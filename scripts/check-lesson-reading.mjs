import assert from 'node:assert/strict';
import { loadContent } from './load-content.mjs';

const { parseLessonReading } = await loadContent('src/content/lessonReading.ts');
const { curriculumLessons, curriculumAllSections, lessonProjectExamples } = await loadContent('src/content/curriculum.ts');
let unitCount = 0;
for (const lesson of curriculumLessons) {
  const reading = parseLessonReading(lesson.body);
  assert.equal(reading.intro + reading.units.map(unit => unit.markdown).join(''), lesson.body,
    `Reading layout must retain every character in chapter ${lesson.id}`);
  assert.ok(reading.units.length > 0, `${lesson.id} needs reading units`);
  assert.equal(new Set(reading.units.map(unit => unit.id)).size, reading.units.length, `${lesson.id}: unique unit IDs`);
  const all = new Set([...reading.introAnchors, ...reading.units.flatMap(unit => unit.anchors)]);
  const original = curriculumAllSections.find(section => section.id === `lesson-${lesson.id}`);
  // The chapter's own anchor/title live outside its body; all internal anchors
  // must select either the introduction or one of the reading units.
  for (const anchor of original.anchors.slice(2)) assert.ok(all.has(anchor), `${lesson.id}: unselectable anchor ${anchor}`);
  for (const example of lessonProjectExamples[lesson.id] ?? []) {
    const owner = reading.units.find(unit => unit.anchors.includes(example.anchor));
    assert.ok(owner, `Project link needs a reading destination: ${example.anchor}`);
    assert.ok(owner.markdown.includes(`<a id="${example.anchor}"></a>`), `Project anchor detached from its text: ${example.anchor}`);
    assert.ok(['example', 'practice'].includes(owner.kind), `Project kind: ${example.anchor}`);
  }
  for (const unit of reading.units) {
    assert.ok(unit.title && unit.markdown && unit.anchors.length && unit.minutes >= 1);
    assert.ok(['concept', 'example', 'practice'].includes(unit.kind));
  }
  unitCount += reading.units.length;
}

const fixture = [
  'Introduction.', '', '<a id="intro-alias"></a>', '', 'Still introduction.', '',
  '<a id="old-alias"></a>', '', '---', '', '<a id="topic-alias"></a>', '',
  '### A `vector` and [link](#somewhere)', '', 'Body.', '',
  '```cpp', '### Not a section', '<a id="fake"></a>', '```', '',
  '~~~text', '### Also not a section', '~~~', '',
  '#### Nested detail', '', 'Detail text.', '',
  '<a id="project-cube-demo"></a>', '', '### Ví dụ nhỏ', '', 'Example.', '',
  '### Tự làm và tiêu chí hoàn thành', '', 'Practice.', '',
].join('\n');
const reading = parseLessonReading(fixture);
assert.equal(reading.intro + reading.units.map(unit => unit.markdown).join(''), fixture);
assert.equal(reading.units.length, 3);
assert.deepEqual(reading.introAnchors, ['intro-alias']);
assert.equal(reading.units[0].id, 'old-alias');
assert.equal(reading.units[0].title, 'A vector and link');
assert.ok(reading.units[0].anchors.includes('topic-alias'));
assert.ok(reading.units[0].anchors.includes('a-vector-and-link'));
assert.ok(reading.units[0].anchors.includes('nested-detail'));
assert.ok(!reading.units.flatMap(unit => unit.anchors).includes('fake'));
assert.deepEqual(reading.units.map(unit => unit.kind), ['concept', 'example', 'practice']);
assert.equal(parseLessonReading('Only an intro.').intro, 'Only an intro.');
assert.deepEqual(parseLessonReading('Only an intro.').units, []);
const repeated = parseLessonReading('### Repeat\nOne\n\n### Repeat\nTwo');
assert.deepEqual(repeated.units.map(unit => unit.id), ['repeat', 'repeat-2']);
const crlf = fixture.replace(/\n/g, '\r\n');
const windowsReading = parseLessonReading(crlf);
assert.equal(windowsReading.intro + windowsReading.units.map(unit => unit.markdown).join(''), crlf);
console.log(`PASS: ${curriculumLessons.length} chapters split into ${unitCount} reading units without losing content, code or legacy/project anchors.`);
