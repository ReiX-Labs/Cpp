import raw from "../../Update/CPP_GIAO_TRINH_CHUAN.md?raw";
import { parseCurriculum, parseCurriculumSyntax, curriculumSlug } from "./curriculumParser";
import { supplementTopics } from "../../Update/curriculum-coverage.json";
import { lessonGroups } from "./lessonManifest";
import type { Part, Reference, Section } from "./parse";
export { lessonProgressStatus } from "./lessonManifest";

export const curriculumAllSections = parseCurriculum(raw);
const byAnchor = Object.fromEntries(curriculumAllSections.map((section) => [section.id, section]));
let displayNumber = 0;
function sectionFrom(anchor: string, id: string, part: Pick<Part, "id" | "title">, num: string): Section {
  const source = byAnchor[anchor];
  if (!source) throw new Error(`Missing unified curriculum chapter: ${anchor}`);
  return { id, num, title: source.title.replace(/^(?:\d+|[A-H])\.\s*/, "").replace(/`/g, ""),
    body: source.body, partId: part.id, partTitle: part.title,
    minutes: Math.max(1, Math.round(source.body.split(/\s+/).length / 180)),
    codeBlocks: Math.floor((source.body.match(/^```/gm)?.length ?? 0) / 2) };
}
const parts: Part[] = lessonGroups.map((group, index) => {
  const part: Part = { id: group.id, title: group.title, label: `Chặng ${index + 1}`, isAppendix: false, sections: [] };
  part.sections = group.ids.map((id) => sectionFrom(`lesson-${id}`, String(id), part, String(++displayNumber).padStart(2, "0")));
  return part;
});
const appendix: Part = { id: "appendices", title: "Bảng đối chiếu và thực hành", label: "Phụ lục", isAppendix: true, sections: [] };
appendix.sections = [..."abcdefgh"].map((id) => sectionFrom(`appendix-${id}`, id, appendix, id.toUpperCase()));
parts.push(appendix);
const sections = parts.flatMap((part) => part.sections);
export const unifiedReference: Reference = {
  title: "C++ cho lập trình game và Unreal Engine", intro: "Một chương trình học từ nền tảng đến ứng dụng.",
  parts, sections, lessonSections: parts.filter((part) => !part.isAppendix).flatMap((part) => part.sections),
  appendix, byId: Object.fromEntries(sections.map((section) => [section.id, section])),
};

const resourceIds = ["healing", "arena", "self-check", "mistakes", "study-history", "review-routine", "roadmap"];
export const curriculumResources = resourceIds.map((id) => byAnchor[id]).filter(Boolean)
  .map((item) => ({ ...item, title: item.title.replace(/`/g, "") }));
export const curriculumLessons = unifiedReference.lessonSections;
export const curriculumSections = [...sections.map((section) => byAnchor[/^\d+$/.test(section.id) ? `lesson-${section.id}` : `appendix-${section.id}`]), ...curriculumResources];
export const curriculumSyntaxEntries = parseCurriculumSyntax(byAnchor.lookup?.body ?? "");

const aliases: Record<string, string> = {
  integrated: "arena", questions: "self-check", status: "study-history", schedule: "review-routine",
};
export function resolveCourseId(id?: string | null): string {
  if (!id) return "cpp-00";
  if (aliases[id]) return aliases[id];
  if (/^\d+(?:\.\d+)?$/.test(id)) {
    const [major, minor] = id.split(".");
    return `cpp-${major.padStart(2, "0")}${minor ? `-${minor}` : ""}`;
  }
  return id;
}

/** Old course URLs enter the same chapters as the main navigation. */
export function curriculumAnchorUrl(anchor: string, sourceId?: string): string | undefined {
  if (anchor === "lookup" || anchor === "appendix-a") return "/reference?tab=syntax";
  const oldTopic = supplementTopics.find(topic => (!sourceId || topic.source === sourceId)
    && curriculumSlug(topic.heading.replace(/`/g, "")) === anchor);
  if (oldTopic) anchor = oldTopic.anchor;
  const owner = curriculumAllSections.find((section) => section.id === anchor)
    ?? curriculumAllSections.find((section) => section.body.includes(`<a id="${anchor}"></a>`))
    ?? (() => { const candidates = curriculumAllSections.filter(section => section.anchors.includes(anchor)); return candidates.length === 1 ? candidates[0] : undefined; })();
  if (!owner) return undefined;
  const lesson = owner.id.match(/^lesson-(\d+)$/);
  if (lesson) return `/lesson/${lesson[1]}${anchor === owner.id ? "" : `?anchor=${encodeURIComponent(anchor)}`}`;
  const appendixId = owner.id.match(/^appendix-([a-h])$/);
  if (appendixId) return `/reference?tab=${appendixId[1]}${anchor === owner.id ? "" : `&anchor=${encodeURIComponent(anchor)}`}`;
  if (resourceIds.includes(owner.id)) return `/reference?tab=${owner.id}${anchor === owner.id ? "" : `&anchor=${encodeURIComponent(anchor)}`}`;
  return undefined;
}
export const rawCurriculumMarkdown = raw;
