import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const url = (source) => 'data:text/javascript;base64,' + Buffer.from(ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText).toString('base64');
const parserUrl = url(read('src/content/curriculumParser.ts'));
const parser = await import(parserUrl);
const raw = read('Update/CPP_GIAO_TRINH_CHUAN.md');
const curriculumUrl = url(read('src/content/curriculum.ts')
  .replace(/import raw from .*?;/, `const raw = ${JSON.stringify(raw)};`)
  .replace('"./curriculumParser"', JSON.stringify(parserUrl)));
const curriculum = await import(curriculumUrl);
const { curriculumAllSections, curriculumManifest, curriculumLessons, curriculumResources, curriculumSections,
  curriculumSyntaxEntries, curriculumAnchorUrl, resolveCourseId } = curriculum;
assert.deepEqual(curriculumLessons.map((lesson) => lesson.id), curriculumManifest.map((item) => item.id), 'Every course manifest item needs real content');
assert.equal(curriculum.curriculumRange, '17.2');
assert.equal(curriculumLessons.length, 23, 'Preparation + 22 course pages through 17.2');
assert.equal(curriculumResources.length, 7, 'Keep all prior review resources');
assert.equal(new Set(curriculumAllSections.map((section) => section.id)).size, curriculumAllSections.length);
assert.ok(curriculumLessons.every((lesson) => lesson.body.length > 500), 'No placeholder lesson pages');
assert.ok(curriculumLessons.every((lesson) => /Mục tiêu/.test(lesson.body)), 'Every lesson explains its purpose');
for (const id of ['sources', 'validation', 'update-protocol', 'web-integration']) {
  assert.ok(!curriculumSections.some((section) => section.id === id), `Editorial metadata must not become a lesson: ${id}`);
}
const tree = unified().use(remarkParse).use(remarkGfm).parse(raw);
const visit = (node, fn) => { fn(node); for (const child of node.children ?? []) visit(child, fn); };
const explicitAnchors = new Set(curriculumAllSections.map((section) => section.id));
visit(tree, (node) => {
  if (node.type === 'link' && node.url.startsWith('#')) assert.ok(explicitAnchors.has(node.url.slice(1)) || curriculumAnchorUrl(node.url.slice(1)), `Broken canonical link: ${node.url}`);
});
for (const section of curriculumSections) {
  const sectionTree = unified().use(remarkParse).use(remarkGfm).parse(section.body);
  visit(sectionTree, (node) => {
    if (node.type === 'link' && node.url.startsWith('#')) assert.ok(curriculumAnchorUrl(node.url.slice(1)), `${section.id} links to unavailable web content: ${node.url}`);
  });
}
assert.ok(curriculumSyntaxEntries.length >= 154, 'Preserve previous lookup coverage');
assert.equal(new Set(curriculumSyntaxEntries.map((entry) => entry.syntax)).size, curriculumSyntaxEntries.length, 'Do not duplicate the same lookup syntax');
for (const entry of curriculumSyntaxEntries) {
  assert.ok(entry.meaning && entry.links.length, `Lookup requires meaning and lesson link: ${entry.syntax}`);
  for (const link of entry.links) assert.ok(curriculumAnchorUrl(link.anchor), `${entry.syntax}: ${link.anchor}`);
}
assert.ok(curriculumSyntaxEntries.some((entry) => entry.syntax.includes('||')));
for (const token of ['std::move', 'dynamic_cast', '#ifdef', 'static', 'count_if', 'F10']) {
  assert.ok(curriculumSyntaxEntries.some((entry) => entry.syntax.includes(token)), `Missing lookup: ${token}`);
}
assert.equal(resolveCourseId('01'), 'cpp-01');
assert.equal(resolveCourseId('06.5'), 'cpp-06-5');
for (const [old, expected] of Object.entries({ integrated: 'arena', questions: 'self-check', status: 'study-history', schedule: 'review-routine', mistakes: 'mistakes' })) assert.equal(resolveCourseId(old), expected);
assert.equal(curriculumAnchorUrl('cpp-14-5'), '/course/cpp-14-5');
assert.equal(curriculumAnchorUrl('lookup'), '/reference?tab=syntax');
const fixture = '<a id="cpp-a"></a>\n\n## First\n```cpp\n<a id="cpp-fake"></a>\n## Fake\n```\n<a id="cpp-b"></a>\n\n## Last\nBody';
assert.deepEqual(parser.parseCurriculum(fixture).map((section) => section.id), ['cpp-a', 'cpp-b']);
assert.throws(() => parser.parseCurriculum(fixture + '\n<a id="cpp-a"></a>\n## Duplicate'), /Duplicate/);
assert.throws(() => parser.parseCurriculumSyntax('| `a` | one | two | three |'), /Invalid/);
const { splitMarkdownStructures } = await import(url(read('src/content/markdownStructures.ts')));
assert.equal(splitMarkdownStructures('```html\n<a id="fake"></a>\n<details>\n<summary>fake</summary>\nbody\n</details>\n```').length, 1, 'HTML inside examples stays code');
const disclosure = splitMarkdownStructures('Intro\n<details>\n<summary>Answer</summary>\nThe answer\n</details>');
assert.equal(disclosure[1].type, 'details');
assert.equal(disclosure[1].summary, 'Answer');
const cardsUrl = url(read('src/data/cards.ts'));
const { cardIds } = await import(cardsUrl);
const review = await import(url(read('src/content/courseReview.ts').replace('"../data/cards"', JSON.stringify(cardsUrl)).replace('"./curriculum"', JSON.stringify(curriculumUrl))));
for (const [id, lesson] of Object.entries(review.courseCardLessons)) {
  assert.ok(cardIds.includes(id), `Review mapping refers to missing card ${id}`);
  assert.ok(curriculumLessons.some((item) => item.id === lesson), `Review mapping refers to missing lesson ${lesson}`);
}
assert.equal(review.eligibleReviewCardIds('learned', {}).length, 0, 'Do not infer learned material from source documents');
assert.deepEqual(review.eligibleReviewCardIds('library', {}), cardIds, 'Keep access to every old flashcard');
assert.ok(review.eligibleReviewCardIds('course', {}).length > 20);
assert.ok(review.eligibleReviewCardIds('learned', { 'course:cpp-09': { read: true } }).every((id) => review.courseCardLessons[id] === 'cpp-09'));
console.log(`PASS: ${curriculumLessons.length} course pages, ${curriculumResources.length} review resources, ${curriculumSyntaxEntries.length} lookup entries; source, anchors, aliases, safe Markdown and review scopes verified.`);
