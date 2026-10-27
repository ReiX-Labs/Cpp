import { courseCoverage } from "../../Update/curriculum-coverage.json";

/** IDs preserve saved work; array order controls the learning path. */
export const lessonGroups = [
  { id: "foundations", title: "Nền tảng, hàm và dữ liệu", ids: [0, 1, 3, 4, 5, 20, 49, 6, 12] },
  { id: "ownership", title: "Vòng đời, tài nguyên và OOP", ids: [13, 7, 8, 9, 10, 14, 15, 16] },
  { id: "modern", title: "C++ hiện đại và thư viện chuẩn", ids: [17, 22, 47, 46, 19, 11, 18, 21, 23, 48] },
  { id: "engineering", title: "Tổ chức code, debugging và kiểm thử", ids: [2, 41, 42, 43, 44, 45, 55, 50] },
  { id: "game", title: "Ứng dụng C++ trong lập trình game", ids: [24, 25, 26, 27, 28, 29] },
  { id: "unreal", title: "Unreal Engine C++", ids: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 51, 52, 53, 54] },
];

/** Source reading can cover parts of several merged chapters, never certify a
 * whole expanded chapter. Keep this mapping aligned with the editorial audit. */
export const sourceLessonTargets: Record<string, string[]> = courseCoverage;
export const CONTENT_REVISION = 3;
export const revisedLessonIds = new Set([...Object.values(sourceLessonTargets).flat(), "24", "30", "31", "32", "36"]);
export interface ReadingRecord { read?: boolean; contentRevision?: number }
export function lessonProgressStatus(id: string, progress: Record<string, ReadingRecord>) {
  const prior = progress[id];
  const sourceRead = Object.entries(sourceLessonTargets)
    .some(([source, targets]) => targets.includes(id) && progress[`course:${source}`]?.read);
  const hasHistory = !!prior?.read || sourceRead;
  const read = !!prior?.read && (!revisedLessonIds.has(id) || (prior.contentRevision ?? 0) >= CONTENT_REVISION);
  return { read, needsUpdate: hasHistory && !read, hasHistory };
}

export function readingReward(id: string, progress: Record<string, ReadingRecord>) {
  const status = lessonProgressStatus(id, progress);
  return status.read || status.hasHistory ? 0 : 15;
}
