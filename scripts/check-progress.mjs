import assert from 'node:assert/strict';
import { loadContent } from './load-content.mjs';
const { CONTENT_REVISION, projectRevisedLessonIds, requiredReadingRevision, lessonProgressStatus, lessonGroups } = await loadContent('src/content/lessonManifest.ts');
const review = await loadContent('src/content/courseReview.ts');
const unchangedId = lessonGroups.flatMap(group => group.ids).map(String)
  .find(id => requiredReadingRevision(id) === 3);
assert.ok(unchangedId, 'The project update must not reopen every previously merged chapter');
for (const id of lessonGroups.flatMap(group => group.ids).map(String)) {
  const status = lessonProgressStatus(id, { [id]: { read: true, contentRevision: 3 } });
  assert.equal(status.needsUpdate, projectRevisedLessonIds.has(id), `Only project-expanded chapter ${id} needs revision 4`);
  assert.equal(status.read, !projectRevisedLessonIds.has(id));
}
const key = 'cpp-dojo-state-v1';
const original = {
  version: 1, theme: 'dark', xp: 250, dailyGoal: 25,
  streak: { count: 4, lastActiveDay: '2026-10-25' },
  activityByDay: { '2026-10-25': { xp: 30, reviews: 3, lessons: 1 } },
  progress: {
    '3': { read: true, quizBest: 0.75, practiceDone: true, updatedAt: 1000 },
    '12': { read: true, contentRevision: 3, quizBest: 1, updatedAt: 1500 },
    [unchangedId]: { read: true, contentRevision: 3, updatedAt: 1600 },
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
assert.equal(lessonProgressStatus('12', original.progress).needsUpdate, true);
assert.equal(lessonProgressStatus(unchangedId, original.progress).read, true);
store.actions.markSectionRead(unchangedId);
assert.equal(writes, 0, 'An unaffected revision-3 completion remains valid without storage writes');
const oldReviewIds = review.eligibleReviewCardIds('learned', original.progress);
assert.ok(oldReviewIds.length > 0, 'Past reading must still unlock its review cards');
assert.deepEqual(review.eligibleReviewCardIds('learned', {}), [], 'Unstudied chapters do not unlock cards');
store.actions.markSectionRead('3');
assert.equal(state().xp, 250, 'Confirming an expanded lesson must not duplicate XP');
assert.equal(state().progress['3'].contentRevision, CONTENT_REVISION);
assert.equal(state().progress['3'].quizBest, .75);
assert.equal(state().progress['3'].practiceDone, true);
store.actions.markSectionRead('12');
assert.equal(state().xp, 250, 'Revision-3 readers do not earn another completion reward');
assert.equal(state().progress['12'].contentRevision, CONTENT_REVISION);
assert.equal(state().progress['12'].quizBest, 1);
assert.equal(lessonProgressStatus('12', state().progress).read, true);
assert.deepEqual(review.eligibleReviewCardIds('learned', state().progress), oldReviewIds, 'Content reconfirmation preserves learned review access');
const confirmed = state();
store.actions.markSectionRead('12');
assert.deepEqual(state(), confirmed, 'Reconfirming updated material is idempotent');
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
assert.equal(lessonProgressStatus(unchangedId, reopened.useStore().progress).read, true);
assert.equal(lessonProgressStatus('12', reopened.useStore().progress).read, true);
console.log('PASS: scoped revision-4 updates retain unaffected completions, old reading, XP, SRS and exercise links through reload; no automatic completion or duplicate XP.');
