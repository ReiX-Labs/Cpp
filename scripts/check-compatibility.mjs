import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const load = (source) => import('data:text/javascript;base64,' + Buffer.from(ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText).toString('base64'));
const baseline = JSON.parse(read('scripts/fixtures/legacy-ids.json'));
const { parseReference } = await load(read('src/content/parse.ts'));
const reference = parseReference(read('Cpp_Game_Dev_Reference.md'));
const { cards } = await load(read('src/data/cards.ts'));
const { quizzes } = await load(read('src/data/quizzes.ts'));
const { challenges } = await load(read('src/data/challenges.ts'));
const { exerciseGroups } = await load(read('src/content/exercises.ts').replace(
  /import \{ reference \} from .*?;/, `const reference = ${JSON.stringify(reference)};`,
));
const current = {
  sections: reference.sections.map((item) => item.id),
  cards: cards.map((item) => item.id),
  quizzes: Object.values(quizzes).flat().map((item) => item.id),
  challenges: Object.values(challenges).flat().map((item) => item.id),
  exercises: exerciseGroups.flatMap((group) => group.items.map((item) => item.id)),
};
for (const [kind, ids] of Object.entries(current)) {
  assert.equal(new Set(ids).size, ids.length, `${kind}: duplicate IDs`);
  assert.deepEqual(ids.filter((id) => baseline[kind].includes(id)), baseline[kind], `${kind}: existing IDs/order must remain stable`);
}
for (const card of cards) assert.ok(reference.byId[card.sectionId], `Missing card section ${card.sectionId}`);
for (const [section, questions] of Object.entries(quizzes)) {
  assert.ok(reference.byId[section], `Missing quiz section ${section}`);
  for (const q of questions) assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length, q.id);
}
assert.match(read('src/lib/store.ts'), /const KEY = "cpp-dojo-state-v1"/, 'Keep the existing browser storage key');
console.log(`PASS: retained ${current.sections.length} library sections, ${baseline.cards.length} cards, ${baseline.quizzes.length} questions, ${baseline.challenges.length} challenges and ${baseline.exercises.length} exercise IDs.`);
