import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { toString } from "mdast-util-to-string";
import type { Root, RootContent } from "mdast";
import { curriculumSlug } from "./curriculumParser";

export interface ReadingUnit {
  id: string;
  title: string;
  kind: "concept" | "example" | "practice";
  markdown: string;
  anchors: string[];
  minutes: number;
}

export interface LessonReading {
  intro: string;
  introAnchors: string[];
  units: ReadingUnit[];
}

const parser = unified().use(remarkParse).use(remarkGfm);
const anchorLine = /^\s*<a\s+id="([a-z0-9-]+)"\s*><\/a>\s*$/gm;

function explicitAnchors(node: RootContent, body: string): string[] {
  // CommonMark parses standalone <a> tags as an inline-HTML paragraph.
  if (node.type !== "html" && node.type !== "paragraph") return [];
  return [...body.slice(node.position!.start.offset, node.position!.end.offset).matchAll(anchorLine)].map(match => match[1]);
}

/** Only standalone anchors/separators can move forward with the next heading. */
function isHeadingPrefix(node: RootContent, body: string): boolean {
  return node.type === "thematicBreak" ||
    (explicitAnchors(node, body).length > 0 && !body.slice(node.position!.start.offset, node.position!.end.offset).replace(anchorLine, "").trim());
}

function collectAnchors(nodes: Root["children"], body: string): string[] {
  const found: string[] = [];
  for (const node of nodes) {
    found.push(...explicitAnchors(node, body));
    if (node.type === "heading" && node.depth >= 2 && node.depth <= 4) {
      found.push(curriculumSlug(toString(node, { includeHtml: false })));
      // Older curriculum links derived slugs from raw heading markup. Keep
      // these aliases usable for unit selection without altering document IDs.
      const raw = body.slice(node.position?.start.offset, node.position?.end.offset)
        .replace(/^#{2,4}\s+/, "").replace(/`/g, "");
      found.push(curriculumSlug(raw));
    }
  }
  return [...new Set(found.filter(Boolean))];
}

function unitKind(title: string, anchors: string[]): ReadingUnit["kind"] {
  const normalized = curriculumSlug(title);
  if (/^(tu-lam|tu-viet|tu-kiem-tra|bai-tu|bai-thuc-hanh|thuc-hanh|tieu-chi)/.test(normalized) ||
      anchors.some(anchor => /^project-.*practice/.test(anchor))) return "practice";
  if (anchors.some(anchor => anchor.startsWith("project-")) || /^(vi-du|minh-hoa)/.test(normalized)) return "example";
  return "concept";
}

/** Separate one chapter into reading units without deleting or rewriting text.
 * Slices join byte-for-byte to the input, including whitespace and code fences.
 * H4 headings stay inside their H3 parent; headings inside code are never units.
 */
export function parseLessonReading(body: string): LessonReading {
  const tree = parser.parse(body);
  const sections: { start: number; firstNode: number; headingNode: number }[] = [];
  for (let index = 0; index < tree.children.length; index++) {
    const node = tree.children[index];
    if (node.type !== "heading" || node.depth !== 3) continue;
    let firstNode = index;
    while (firstNode > 0 && isHeadingPrefix(tree.children[firstNode - 1], body)) firstNode--;
    sections.push({ start: tree.children[firstNode].position!.start.offset!, firstNode, headingNode: index });
  }
  const firstStart = sections[0]?.start ?? body.length;
  const intro = body.slice(0, firstStart);
  const introAnchors = collectAnchors(tree.children.slice(0, sections[0]?.firstNode), body);
  const usedIds = new Set<string>();
  const units = sections.map((section, index): ReadingUnit => {
    const end = sections[index + 1]?.start ?? body.length;
    const nodes = tree.children.slice(section.firstNode, sections[index + 1]?.firstNode);
    const title = toString(tree.children[section.headingNode], { includeHtml: false });
    const anchors = collectAnchors(nodes, body);
    const preferredId = nodes.flatMap(node => explicitAnchors(node, body))[0] ?? curriculumSlug(title);
    const baseId = preferredId || `reading-${index + 1}`;
    let id = baseId;
    let suffix = 2;
    while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
    usedIds.add(id);
    const markdown = body.slice(section.start, end);
    return {
      id, title, kind: unitKind(title, anchors), markdown, anchors,
      minutes: Math.max(1, Math.ceil(markdown.trim().split(/\s+/).length / 180)),
    };
  });
  return { intro, introAnchors, units };
}
