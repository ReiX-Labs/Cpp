import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const moduleUrl = (source) => 'data:text/javascript;base64,' + Buffer.from(ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText).toString('base64');
const parserUrl = moduleUrl(read('src/content/handoffParser.ts'));
const parser = await import(parserUrl);
const raw = read('Update/CPP_Fundamentals_Review_01-09_AI_Handoff.md');
const source = read('src/content/handoff.ts')
  .replace(/import raw from .*?;/, `const raw = ${JSON.stringify(raw)};`)
  .replace('"./handoffParser"', JSON.stringify(parserUrl));
const { handoffChapters, fundamentalsLessons, studyResources, syntaxEntries } = await import(moduleUrl(source));
assert.equal(handoffChapters.length, 18);
assert.deepEqual(fundamentalsLessons.map((lesson) => lesson.id), ['01','02','03','04','05','06','06.5','07','08','09']);
for (const item of [...fundamentalsLessons, ...studyResources]) {
  assert.ok(handoffChapters.find((chapter) => chapter.number === item.chapter)?.body.length > 100, item.id);
}
const { parseReference } = await import(moduleUrl(read('src/content/parse.ts')));
const reference = parseReference(read('Cpp_Game_Dev_Reference.md'));
for (const lesson of fundamentalsLessons) for (const id of lesson.related) assert.ok(reference.byId[id], id);
assert.equal(new Set(syntaxEntries.map((entry) => entry.syntax)).size, syntaxEntries.length);
assert.ok(syntaxEntries.some((entry) => entry.syntax === '&& || !'));
assert.ok(syntaxEntries.some((entry) => entry.syntax === '& | ^ ~ << >>'));
assert.ok(syntaxEntries.some((entry) => entry.syntax.includes('name.substr')));
assert.ok(syntaxEntries.some((entry) => parser.normalizeSearch(entry.meaning).includes('tham chieu')));
assert.equal(parser.parseHandoff('# 1. First\n```cpp\n# 2. Not a chapter\n```\n# 3. Last').length, 2);
assert.throws(() => parser.parseHandoff('# 1. First\n# 1. Duplicate'), /Duplicate/);
assert.match(handoffChapters.find((chapter) => chapter.number === 11).body, /chưa nộp để chấm/);
const questions = handoffChapters.find((chapter) => chapter.number === 15).body;
assert.match(questions, /<details>[\s\S]*23\. Không;[\s\S]*<\/details>/);
console.log(`PASS: ${fundamentalsLessons.length} lesson entries, ${studyResources.length} study resources, ${syntaxEntries.length} unique syntax entries; source, links, escaped pipes, search and status verified.`);
