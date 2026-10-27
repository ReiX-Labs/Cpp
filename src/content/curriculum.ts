import raw from "../../Update/CPP_GIAO_TRINH_CHUAN.md?raw";
import { parseCurriculum, parseCurriculumSyntax } from "./curriculumParser";

export const curriculumAllSections = parseCurriculum(raw);
const byId = Object.fromEntries(curriculumAllSections.map((section) => [section.id, section]));

// IDs are strings, independent of legacy reference numbers and persisted progress.
export const curriculumManifest = [
  { id: "cpp-00", number: "00", group: "Chuẩn bị", related: ["0", "1", "2", "43"] },
  { id: "cpp-01", number: "01", group: "Cú pháp và luồng chương trình", related: ["0", "2"] },
  { id: "cpp-02", number: "02", group: "Cú pháp và luồng chương trình", related: ["3", "22"] },
  { id: "cpp-03", number: "03", group: "Cú pháp và luồng chương trình", related: ["3"] },
  { id: "cpp-04", number: "04", group: "Cú pháp và luồng chương trình", related: ["4"] },
  { id: "cpp-05", number: "05", group: "Cú pháp và luồng chương trình", related: ["4", "17"] },
  { id: "cpp-06", number: "06", group: "Hàm, dữ liệu và tổ chức code", related: ["5"] },
  { id: "cpp-06-5", number: "06.5", group: "Hàm, dữ liệu và tổ chức code", related: ["1", "2", "41"] },
  { id: "cpp-07", number: "07", group: "Hàm, dữ liệu và tổ chức code", related: ["20", "49"] },
  { id: "cpp-08", number: "08", group: "Hàm, dữ liệu và tổ chức code", related: ["6", "12"] },
  { id: "cpp-09", number: "09", group: "Bộ nhớ và thiết kế đối tượng", related: ["6"] },
  { id: "cpp-10", number: "10", group: "Bộ nhớ và thiết kế đối tượng", related: ["7", "8", "9", "10"] },
  { id: "cpp-11", number: "11", group: "Bộ nhớ và thiết kế đối tượng", related: ["12", "13"] },
  { id: "cpp-12-1", number: "12.1", group: "Bộ nhớ và thiết kế đối tượng", related: ["14", "15"] },
  { id: "cpp-12-2", number: "12.2", group: "Bộ nhớ và thiết kế đối tượng", related: ["13", "15"] },
  { id: "cpp-13", number: "13", group: "C++ hiện đại và công cụ", related: ["19", "41"] },
  { id: "cpp-14", number: "14", group: "C++ hiện đại và công cụ", related: ["22", "47"] },
  { id: "cpp-14-5", number: "14.5", group: "C++ hiện đại và công cụ", related: ["46"] },
  { id: "cpp-15", number: "15", group: "C++ hiện đại và công cụ", related: ["2", "41"] },
  { id: "cpp-16", number: "16", group: "C++ hiện đại và công cụ", related: ["11", "18"] },
  { id: "cpp-17", number: "17", group: "C++ hiện đại và công cụ", related: ["43", "44"] },
  { id: "cpp-17-1", number: "17.1", group: "C++ hiện đại và công cụ", related: ["43", "44"] },
  { id: "cpp-17-2", number: "17.2", group: "C++ hiện đại và công cụ", related: ["43", "44", "45"] },
];

export const curriculumLessons = curriculumManifest.filter((item) => byId[item.id])
  .map((item) => ({ ...byId[item.id], ...item, title: byId[item.id].title.replace(/^(?:Bài\s+[\d.]+|Chuẩn bị)\s*[—–-]\s*/, "").replace(/`/g, "") }));
export const curriculumUnits = curriculumLessons.filter((item) => item.id !== "cpp-00");
export const curriculumGroups = [...new Set(curriculumUnits.map((item) => item.group))];

const resourceIds = ["healing", "arena", "self-check", "mistakes", "study-history", "review-routine", "roadmap"];
export const curriculumResources = resourceIds.filter((id) => byId[id]).map((id) => ({ ...byId[id], title: byId[id].title.replace(/`/g, "") }));
export const curriculumSections = [...curriculumLessons, ...curriculumResources];
export const curriculumSyntaxEntries = parseCurriculumSyntax(byId.lookup?.body ?? "");
export const curriculumRange = curriculumUnits.at(-1)?.number ?? "13";
export const courseProgressId = (id: string) => `course:${id}`;
export const courseUrl = (id: string) => `/course/${id}`;

const legacyAliases: Record<string, string> = {
  integrated: "arena", questions: "self-check", status: "study-history", schedule: "review-routine",
};
export function resolveCourseId(id?: string | null): string {
  if (!id) return "cpp-00";
  const candidate = legacyAliases[id] ?? (id.match(/^\d+(?:\.\d+)?$/) ? `cpp-${id.replace(".", "-")}` : id);
  return curriculumSections.some((item) => item.id === candidate) ? candidate : "cpp-00";
}

/** Resolve canonical anchors to split pages, never to a HashRouter fragment alone. */
export function curriculumAnchorUrl(anchor: string): string | undefined {
  if (anchor === "lookup") return "/reference?tab=syntax";
  const exact = curriculumSections.find((item) => item.id === anchor);
  if (exact) return courseUrl(exact.id);
  const parent = curriculumSections.find((item) => item.anchors.includes(anchor));
  return parent ? `${courseUrl(parent.id)}?anchor=${encodeURIComponent(anchor)}` : undefined;
}
