import { cardIds } from "../data/cards";
import { courseProgressId, curriculumLessons } from "./curriculum";

// Only cards whose concepts are taught in the course are in this deck. Legacy
// IDs and their existing SRS schedules stay unchanged; no inferred completion.
export const courseCardLessons: Record<string, string> = {
  "c-compile-model": "cpp-06-5", "c-compiler-vs-linker": "cpp-06-5",
  "c-header-source": "cpp-06-5", "c-include-guard": "cpp-06-5",
  "c-brace-init": "cpp-02", "c-auto": "cpp-02", "c-constexpr": "cpp-02",
  "c-switch-fallthrough": "cpp-04", "c-param-passing": "cpp-06",
  "c-range-for": "cpp-08", "c-int-ref-ptr": "cpp-09", "c-nullptr": "cpp-09",
  "c-stack-heap": "cpp-10", "c-new-delete": "cpp-10", "c-raii": "cpp-10",
  "c-member-init-list": "cpp-11", "c-access-specifiers": "cpp-11",
  "c-const-correct": "cpp-11", "c-override": "cpp-12-1", "c-is-a": "cpp-12-1",
  "c-virtual-dtor": "cpp-12-2", "c-template": "cpp-13",
  "c-static-3": "cpp-14", "c-using-namespace": "cpp-14",
  "c-casts-4": "cpp-14-5", "c-forward-decl": "cpp-15",
  "c-move-semantics": "cpp-16", "c-std-move": "cpp-16", "c-lambda-capture": "cpp-16",
};
export type ReviewScope = "learned" | "course" | "library";
export function eligibleReviewCardIds(scope: ReviewScope, progress: Record<string, { read?: boolean }>): string[] {
  if (scope === "library") return cardIds;
  const available = new Set(curriculumLessons.map((lesson) => lesson.id));
  return cardIds.filter((id) => {
    const lesson = courseCardLessons[id];
    return lesson && available.has(lesson) && (scope === "course" || progress[courseProgressId(lesson)]?.read);
  });
}
