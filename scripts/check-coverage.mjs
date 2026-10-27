import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadContent } from './load-content.mjs';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const baseline = JSON.parse(read('scripts/fixtures/curriculum-baseline.json'));
const coverage = JSON.parse(read('Update/curriculum-coverage.json'));
const { curriculumAllSections, curriculumAnchorUrl, unifiedReference } = await loadContent('src/content/curriculum.ts');
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
