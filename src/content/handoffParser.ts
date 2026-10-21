export interface HandoffChapter {
  number: number;
  title: string;
  body: string;
}

/** Handoff chapters use H1; ignore headings inside fenced examples. */
export function parseHandoff(raw: string): HandoffChapter[] {
  const chapters: HandoffChapter[] = [];
  let current: HandoffChapter | undefined;
  let fence: string | undefined;
  for (const line of raw.replace(/\r\n/g, "\n").split("\n")) {
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = undefined;
      if (current) current.body += line + "\n";
      continue;
    }
    const heading = !fence && line.match(/^# (\d+)\.\s+(.+)$/);
    if (heading) {
      const number = Number(heading[1]);
      if (chapters.some((chapter) => chapter.number === number)) {
        throw new Error(`Duplicate handoff chapter: ${number}`);
      }
      current = { number, title: heading[2], body: "" };
      chapters.push(current);
    } else if (current) current.body += line + "\n";
  }
  return chapters.map((chapter) => ({ ...chapter, body: chapter.body.trim() }));
}

export interface SyntaxEntry {
  syntax: string;
  meaning: string;
  group: string;
}

export function parseSyntaxTable(body: string): SyntaxEntry[] {
  const entries: SyntaxEntry[] = [];
  let group = "Cú pháp";
  for (const line of body.split("\n")) {
    const heading = line.match(/^##\s+[\d.]+\s+(.+)$/);
    if (heading) group = heading[1];
    if (!line.startsWith("| `")) continue;
    // GFM escapes pipes even inside code spans: do not split || or bitwise |.
    const cells = line.slice(1, -1).split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, "|"));
    if (cells.length !== 2) throw new Error(`Invalid quick-reference row: ${line}`);
    const syntax = cells[0].replace(/`/g, "");
    if (!entries.some((entry) => entry.syntax === syntax)) {
      entries.push({ syntax, meaning: cells[1], group });
    }
  }
  return entries;
}

export function normalizeSearch(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
}
