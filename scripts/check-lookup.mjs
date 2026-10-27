import assert from 'node:assert/strict';
import { loadContent } from './load-content.mjs';

const { syntaxCatalog, lookupTopics, searchSyntaxCatalog: search } = await loadContent('src/content/syntaxCatalog.ts');
const { curriculumSyntaxEntries, curriculumAnchorUrl } = await loadContent('src/content/curriculum.ts');
const topicIds = new Set(lookupTopics.map(topic => topic.id));
assert.ok(syntaxCatalog.length >= curriculumSyntaxEntries.length);
for (const source of curriculumSyntaxEntries) assert.ok(syntaxCatalog.some(entry => entry.sourceSyntax === source.syntax), `Lost lookup coverage: ${source.syntax}`);
for (const entry of syntaxCatalog) {
  assert.ok(topicIds.has(entry.topic), `Missing topic: ${entry.syntax}`);
  assert.ok(entry.action && entry.example && entry.meaning, `Incomplete lookup: ${entry.syntax}`);
  assert.ok(entry.links.length, `Missing source link: ${entry.syntax}`);
  for (const link of entry.links) assert.ok(curriculumAnchorUrl(link.anchor), `Broken lesson link: ${entry.syntax} -> ${link.anchor}`);
}
assert.deepEqual(new Set(search('&').map(entry => entry.syntax)), new Set(['a & b', 'int& ref = hp;', '&player']));
assert.deepEqual(new Set(search('*').map(entry => entry.syntax)), new Set(['a * b', 'Player* ptr = &player;', '*ptr']));
assert.equal(search('doi so phan tu')[0]?.syntax, 'values.resize(n);');
assert.equal(search('xoa cuoi vector')[0]?.syntax, 'values.pop_back();');
assert.match(search('xoa cuoi vector')[0]?.pitfall ?? '', /không rỗng/);
assert.equal(search('std::vector::reserve')[0]?.syntax, 'values.reserve(n);');
assert.equal(search('dự trữ bộ nhớ')[0]?.syntax, 'values.reserve(n);');
assert.equal(search('truyền để sửa biến gốc')[0]?.syntax, 'void DamageRef(int& hp);');
assert.equal(search('lay dia chi')[0]?.syntax, '&player');
assert.equal(search('F10')[0]?.syntax, 'F10');
for (const syntax of ['const int* p', 'int* const p = &hp', 'const int* const p = &hp', 'int GetHealth() const;']) {
  assert.ok(search('const', 'const').some(entry => entry.syntax === syntax), `Missing const comparison: ${syntax}`);
}
const vector = search('', 'vector');
assert.ok(vector.every(entry => entry.topic === 'vector'));
assert.ok(new Set(vector.map(entry => entry.action)).size >= 4, 'Vector needs operation groups, not a flat list');
assert.deepEqual(search('no-such-cpp-api-987654321'), []);
assert.equal(new Set(syntaxCatalog.map(entry => entry.id)).size, syntaxCatalog.length);
console.log(`PASS: ${syntaxCatalog.length} indexed syntax uses; semantic queries, symbol contexts, vector actions, const comparison and canonical links.`);
