// Motivation layer: XP levels + achievements, all derived from AppState.
import { reference } from "../content/reference";
import type { AppState } from "./store";

export interface LevelInfo {
  level: number;
  title: string;
  into: number; // xp earned into the current level
  need: number; // xp required to clear the current level
  floor: number; // total xp at the start of this level
}

const LEVEL_TITLES: [number, string][] = [
  [1, "Tân binh C++"],
  [3, "Coder tập sự"],
  [5, "Gameplay Dev"],
  [8, "Engine Tinkerer"],
  [12, "C++ Artisan"],
  [16, "Bậc thầy Con trỏ"],
  [20, "C++ Guru"],
];

export function levelTitle(level: number): string {
  let title = LEVEL_TITLES[0][1];
  for (const [min, t] of LEVEL_TITLES) if (level >= min) title = t;
  return title;
}

/** Growing XP curve: each level needs ~35% more than the last. */
export function levelInfo(xp: number): LevelInfo {
  let level = 1;
  let need = 100;
  let floor = 0;
  while (xp >= floor + need) {
    floor += need;
    level += 1;
    need = Math.round(need * 1.35);
  }
  return { level, title: levelTitle(level), into: xp - floor, need, floor };
}

// ---- totals ----
export function totalReviews(s: AppState): number {
  return Object.values(s.activityByDay).reduce((a, d) => a + d.reviews, 0);
}
export function totalLessonsRead(s: AppState): number {
  return reference.lessonSections.filter((sec) => s.progress[sec.id]?.read).length;
}
export function partsCompleted(s: AppState): number {
  const current = reference.parts
    .filter((p) => !p.isAppendix)
    .filter((p) => p.sections.length > 0 && p.sections.every((sec) => s.progress[sec.id]?.read))
    .length;
  // Reordering lessons cannot revoke an achievement already earned under the
  // original eight-part curriculum. This does not mark new content as complete.
  const oldRanges = [[0, 6], [7, 11], [12, 16], [17, 23], [24, 29], [30, 40], [41, 45], [46, 55]];
  const historical = oldRanges.filter(([first, last]) =>
    Array.from({ length: last - first + 1 }, (_, i) => String(first + i)).every(id => s.progress[id]?.read)).length;
  return Math.max(current, historical);
}
export function bestQuizAces(s: AppState): number {
  return Object.values(s.progress).filter((p) => (p.quizBest ?? 0) >= 1).length;
}
export function exercisesDone(s: AppState): number {
  return Object.values(s.exercises ?? {}).filter((e) => e.done).length;
}

// ---- achievements ----
export interface Achievement {
  id: string;
  icon: string;
  title: string;
  desc: string;
  goal: number;
  progress: (s: AppState) => number;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-lesson", icon: "🌱", title: "Bước đầu tiên", desc: "Hoàn thành bài học đầu tiên", goal: 1, progress: totalLessonsRead },
  { id: "ten-lessons", icon: "📚", title: "Ham học", desc: "Hoàn thành 10 bài học", goal: 10, progress: totalLessonsRead },
  { id: "part-done", icon: "🏅", title: "Trọn một chương", desc: "Học hết một Phần", goal: 1, progress: partsCompleted },
  { id: "all-lessons", icon: "👑", title: "Toàn tập", desc: "Hoàn thành tất cả bài học", goal: reference.lessonSections.length, progress: totalLessonsRead },
  { id: "streak-3", icon: "🔥", title: "Nhen lửa", desc: "Chuỗi 3 ngày liên tiếp", goal: 3, progress: (s) => s.streak.count },
  { id: "streak-7", icon: "⚡", title: "Bền bỉ", desc: "Chuỗi 7 ngày liên tiếp", goal: 7, progress: (s) => s.streak.count },
  { id: "streak-30", icon: "💎", title: "Kỷ luật thép", desc: "Chuỗi 30 ngày liên tiếp", goal: 30, progress: (s) => s.streak.count },
  { id: "reviews-50", icon: "🧠", title: "Ôn tập chăm chỉ", desc: "Ôn 50 lượt thẻ", goal: 50, progress: totalReviews },
  { id: "reviews-250", icon: "🦉", title: "Trí nhớ thép", desc: "Ôn 250 lượt thẻ", goal: 250, progress: totalReviews },
  { id: "quiz-ace", icon: "🎯", title: "Điểm tuyệt đối", desc: "Đạt 100% một bài quiz", goal: 1, progress: bestQuizAces },
  { id: "exercises-5", icon: "🛠️", title: "Thực chiến", desc: "Hoàn thành 5 bài tập", goal: 5, progress: exercisesDone },
  { id: "level-5", icon: "🚀", title: "Lên tay", desc: "Đạt cấp độ 5", goal: 5, progress: (s) => levelInfo(s.xp).level },
];

export function isUnlocked(a: Achievement, s: AppState): boolean {
  return a.progress(s) >= a.goal;
}
