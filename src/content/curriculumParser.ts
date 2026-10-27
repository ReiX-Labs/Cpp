export interface CurriculumSection {
  id: string;
  title: string;
  body: string;
  anchors: string[];
}

export interface CurriculumSyntaxEntry {
  syntax: string;
  meaning: string;
  group: string;
  links: { label: string; anchor: string }[];
}

export function curriculumSlug(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/** Explicit anchors identify chapters; headings inside examples never create lessons. */
export function parseCurriculum(raw: string): CurriculumSection[] {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const sections: CurriculumSection[] = [];
  let section: CurriculumSection | undefined;
  let fence = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = "";
    }
    const anchor = !fence && line.match(/^<a\s+id="([a-z0-9-]+)"\s*><\/a>\s*$/);
    if (anchor) {
      let next = i + 1;
      while (next < lines.length && !lines[next].trim()) next++;
      const title = lines[next]?.match(/^## (.+)$/);
      if (title) {
        if (sections.some((item) => item.id === anchor[1])) throw new Error(`Duplicate curriculum chapter: ${anchor[1]}`);
        section = { id: anchor[1], title: title[1], body: "", anchors: [anchor[1], curriculumSlug(title[1])] };
        sections.push(section);
        i = next;
        continue;
      }
      if (section) section.anchors.push(anchor[1]);
    }
    if (section) {
      const heading = !fence && line.match(/^#{2,4}\s+(.+)$/);
      if (heading) section.anchors.push(curriculumSlug(heading[1].replace(/`/g, "")));
      section.body += line + "\n";
    }
  }
  return sections.map((item) => ({ ...item, body: item.body.trim().replace(/(?:\n---\s*)+$/, "") }));
}

/** Canonical lookup is a GFM table with syntax, meaning and lesson links. */
export function parseCurriculumSyntax(body: string): CurriculumSyntaxEntry[] {
  const entries: CurriculumSyntaxEntry[] = [];
  let group = "Cú pháp";
  let fence = "";
  for (const line of body.split("\n")) {
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = "";
      continue;
    }
    if (fence) continue;
    const heading = line.match(/^###\s+(.+)$/);
    if (heading) group = heading[1];
    if (!line.startsWith("| `")) continue;
    const cells = line.trim().slice(1, -1).split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, "|"));
    if (cells.length !== 3) throw new Error(`Invalid curriculum lookup row: ${line}`);
    const syntax = cells[0].replace(/`/g, "");
    const links = [...cells[2].matchAll(/\[((?:[^\[\]]|\[[^\]]*\])+)\]\(#([a-z0-9-]+)\)/g)]
      .map((match) => ({ label: match[1], anchor: match[2] }));
    if (!entries.some((entry) => entry.syntax === syntax && entry.group === group)) entries.push({ syntax, meaning: cells[1], group, links });
  }
  return entries;
}
