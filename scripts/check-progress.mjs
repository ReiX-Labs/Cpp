import assert from 'node:assert/strict';
import { loadContent } from './load-content.mjs';
const key = 'cpp-dojo-state-v1';
const original = {
  version: 1, theme: 'dark', xp: 250, dailyGoal: 25,
  streak: { count: 4, lastActiveDay: '2026-10-25' },
  activityByDay: { '2026-10-25': { xp: 30, reviews: 3, lessons: 1 } },
  progress: {
    '3': { read: true, quizBest: 0.75, practiceDone: true, updatedAt: 1000 },
    'course:cpp-09': { read: true, updatedAt: 2000 },
  },
  srs: { 'c-int-ref-ptr': { ef: 2.6, interval: 7, reps: 3, due: 9999999999999, lapses: 1 } },
  exercises: { 'example': { done: true, link: 'https://example.invalid/submission' } },
};
const storage = new Map([[key, JSON.stringify(original)]]);
let writes = 0;
globalThis.localStorage = { getItem: k => storage.get(k) ?? null, setItem: (k, v) => { writes++; storage.set(k, v); } };
const store = await loadContent('src/lib/store.ts', { store: true, cacheKey: 'first' });
const state = () => JSON.parse(storage.get(key));
assert.equal(writes, 0, 'Loading the updated curriculum must not mutate progress');
assert.deepEqual(state(), original);
store.actions.markSectionRead('3');
assert.equal(state().xp, 250, 'Confirming an expanded lesson must not duplicate XP');
assert.equal(state().progress['3'].contentRevision, 3);
assert.equal(state().progress['3'].quizBest, .75);
assert.equal(state().progress['3'].practiceDone, true);
store.actions.markSectionRead('6');
assert.equal(state().xp, 250, 'Old course reading maps to prior work, not another XP reward');
assert.deepEqual(state().progress['course:cpp-09'], original.progress['course:cpp-09']);
store.actions.markSectionRead('30');
assert.equal(state().xp, 265, 'A genuinely new chapter awards 15 XP');
const after = state();
store.actions.markSectionRead('30');
assert.deepEqual(state(), after, 'Completion is idempotent');
assert.deepEqual(after.srs, original.srs);
assert.deepEqual(after.exercises, original.exercises);
const reopened = await loadContent('src/lib/store.ts', { store: true, cacheKey: 'reopen' });
assert.deepEqual(reopened.useStore(), after, 'Reload retains history and revision confirmations');
console.log('PASS: old and course reading history, XP, SRS and exercise links survive merge and reload; no automatic completion or duplicate XP.');
