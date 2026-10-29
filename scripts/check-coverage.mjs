import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadContent } from './load-content.mjs';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const baseline = JSON.parse(read('scripts/fixtures/curriculum-baseline.json'));
const coverage = JSON.parse(read('Update/curriculum-coverage.json'));
const { curriculumAllSections, curriculumAnchorUrl, unifiedReference } = await loadContent('src/content/curriculum.ts');
const { projectRevisedLessonIds } = await loadContent('src/content/lessonManifest.ts');
const byId = Object.fromEntries(curriculumAllSections.map(s => [s.id, s]));
for (const kind of ['originalTopics', 'supplementTopics']) {
  for (const expected of baseline[kind]) {
    const match = coverage[kind].find(t => t.source === expected.source && t.heading === expected.heading);
    assert.ok(match, `Unmapped source topic: ${expected.source}: ${expected.heading}`);
    assert.ok(byId[match.destination], `Missing destination: ${match.destination}`);
    if (match.anchor) assert.ok(byId[match.destination].anchors.includes(match.anchor), `Topic anchor in wrong chapter: ${match.anchor}`);
    if (match.action === 'replaced-equivalent') assert.ok(match.replacement, 'Editorial consolidation needs an explanation');
  }
}
assert.deepEqual(coverage.groups.flatMap(g => g.ids), unifiedReference.lessonSections.map(s => s.id), 'Document and website learning order must match');
for (const [source, id] of Object.entries(coverage.courseAliases)) assert.match(curriculumAnchorUrl(source), new RegExp(`^/lesson/${id}\\?`));
const raw = read('Update/CPP_GIAO_TRINH_CHUAN.md').replace(/\r\n/g, '\n');
const exampleBlocks = [...raw.matchAll(/^```cpp\n([\s\S]*?)^```\s*$/gm)].map(m => m[1]);
for (const e of baseline.examples) {
  const marker = `// example: ${e.id}; file: ${e.file}`;
  const block = exampleBlocks.find(b => b.includes(marker));
  assert.ok(block, `Missing runnable source: ${marker}`);
  assert.equal(createHash('sha256').update(block).digest('hex'), e.sha256, `Runnable example changed during editorial merge: ${marker}`);
}
console.log(`PASS: all ${baseline.originalTopics.length} original headings and ${baseline.supplementTopics.length} supplemental topics mapped; ${baseline.examples.length} complete source files preserved byte-for-byte.`);

// Project documents are inputs, not another runtime curriculum. Every source
// heading must have an explicit editorial destination inside an existing lesson.
assert.equal(coverage.projectSources.length, 2);
const expandedLessons = new Set();
let mappedProjectTopics = 0;
for (const source of coverage.projectSources) {
  const input = read(source.file).replace(/\r\n/g, '\n');
  assert.equal(createHash('sha256').update(input).digest('hex'), source.sha256,
    `Project input changed: review ${source.file} before publishing its previous mapping`);
  const headings = [...input.matchAll(/^#{2,3} (.+)$/gm)].map(match => match[1]);
  assert.deepEqual(source.topics.map(topic => topic.heading), headings, `${source.file}: source coverage/order`);
  for (const topic of source.topics) {
    assert.ok(topic.treatment && topic.destinations.length && topic.anchors.length, `${source.file}: incomplete editorial mapping`);
    for (const id of topic.destinations) assert.ok(byId[`lesson-${id}`], `Unknown chapter ${id}`);
    for (const anchor of topic.anchors) {
      const owner = curriculumAllSections.find(section => section.anchors.includes(anchor));
      assert.ok(owner && topic.destinations.includes(owner.id.replace('lesson-', '')), `Wrong topic destination: ${anchor}`);
      assert.ok(curriculumAnchorUrl(anchor)?.startsWith('/lesson/'), `Project topic must stay in a lesson: ${anchor}`);
    }
    mappedProjectTopics++;
  }
  for (const example of source.examples) {
    const body = byId[`lesson-${example.lessonId}`]?.body;
    assert.ok(body?.includes(`<a id="${example.anchor}"></a>`), `Missing project example: ${example.anchor}`);
    assert.ok(!/\]\(<?[A-Za-z]:[\\/]/.test(body), `Local machine link leaked into public chapter ${example.lessonId}`);
    expandedLessons.add(example.lessonId);
  }
}
for (const correction of coverage.projectCorrections) {
  assert.ok(correction.reason && byId[`lesson-${correction.lessonId}`], 'A related correctness fix needs an explicit chapter and reason');
  expandedLessons.add(correction.lessonId);
}
assert.deepEqual([...projectRevisedLessonIds].sort(), [...expandedLessons].sort(), 'Only changed project chapters require the new reading revision');
console.log(`PASS: ${mappedProjectTopics} project source headings mapped into ${expandedLessons.size} existing chapters; reviewed input hashes and scoped revisions match.`);
