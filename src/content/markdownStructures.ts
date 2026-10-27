export type MarkdownPart =
  | { type: "text"; body: string }
  | { type: "anchor"; id: string }
  | { type: "details"; summary: string; body: string };

/** Recognize only our document's anchors/disclosures, never markup in examples. */
export function splitMarkdownStructures(raw: string): MarkdownPart[] {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const parts: MarkdownPart[] = [];
  let pending: string[] = [];
  let fence = "";
  const flush = () => {
    if (pending.some((line) => line.trim())) parts.push({ type: "text", body: pending.join("\n") });
    pending = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = "";
      pending.push(line);
      continue;
    }
    if (!fence) {
      const anchor = line.match(/^\s*<a\s+id="([a-z0-9-]+)"\s*><\/a>\s*$/);
      if (anchor) { flush(); parts.push({ type: "anchor", id: anchor[1] }); continue; }
      if (/^\s*<details>\s*$/.test(line)) {
        let end = i + 1;
        let innerFence = "";
        for (; end < lines.length; end++) {
          const innerMarker = lines[end].match(/^\s*(`{3,}|~{3,})/);
          if (innerMarker) {
            if (!innerFence) innerFence = innerMarker[1];
            else if (innerMarker[1][0] === innerFence[0] && innerMarker[1].length >= innerFence.length) innerFence = "";
          } else if (!innerFence && /^\s*<\/details>\s*$/.test(lines[end])) break;
        }
        const detail = end < lines.length && lines.slice(i + 1, end).join("\n").match(/^\s*<summary>([^\n]*?)<\/summary>([\s\S]*)$/);
        if (detail) { flush(); parts.push({ type: "details", summary: detail[1], body: detail[2] }); i = end; continue; }
      }
    }
    pending.push(line);
  }
  flush();
  return parts;
}
