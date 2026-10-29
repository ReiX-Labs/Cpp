import assert from 'node:assert/strict';
import { loadContent } from './load-content.mjs';

const { syntaxCatalog, lookupCategories, lookupTopics, searchSyntaxCatalog: search } = await loadContent('src/content/syntaxCatalog.ts');
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
assert.equal(lookupCategories.length, 6, 'New APIs belong within the existing six category paths');
const projectEntries = {
  'std::unordered_set<int> cells;': ['set', 'Khởi tạo tập hợp'],
  'cells.insert(cell)': ['set', 'Thêm phần tử'],
  'cells.find(cell) != cells.end()': ['set', 'Kiểm tra tồn tại'],
  'cells.erase(cell)': ['set', 'Xóa phần tử'],
  'std::floor(value)': ['math', 'Làm tròn xuống'],
  'std::isfinite(value)': ['math', 'Kiểm tra số đầu vào'],
  'TSet<FIntVector> Occupied;': ['ue-containers', 'Khởi tạo TSet'],
  'Occupied.Contains(Cell)': ['ue-containers', 'Kiểm tra TSet'],
  'Occupied.Add(Cell)': ['ue-containers', 'Thêm vào TSet'],
  'Occupied.Remove(Cell)': ['ue-containers', 'Xóa khỏi TSet'],
  'TWeakObjectPtr<AActor> WeakActor;': ['ue-pointers', 'Chọn kiểu tham chiếu'],
  'WeakActor.Get()': ['ue-pointers', 'Truy cập object còn sống'],
  'WeakActor.IsValid()': ['ue-pointers', 'Kiểm tra hiệu lực'],
  'TSoftObjectPtr<UStaticMesh> MeshAsset;': ['ue-pointers', 'Chọn kiểu tham chiếu'],
  'MeshAsset.LoadSynchronous()': ['ue-pointers', 'Tải asset'],
  'GridTransform.InverseTransformPosition(WorldPosition)': ['ue-geometry', 'Đổi hệ tọa độ'],
  'GridTransform.TransformPosition(LocalPosition)': ['ue-geometry', 'Đổi hệ tọa độ'],
  'FMath::FloorToInt(LocalX / CellSize)': ['ue-geometry', 'Đổi tọa độ thành ô'],
  'OnHealthChanged.RemoveDynamic(this, &AMyHUD::HandleHealthChanged)': ['ue-events', 'Gỡ đăng ký sự kiện'],
};
for (const [syntax, expected] of Object.entries(projectEntries)) {
  const entries = syntaxCatalog.filter(entry => entry.syntax === syntax);
  assert.equal(entries.length, 1, `Project lookup must be present once: ${syntax}`);
  const entry = entries[0];
  assert.deepEqual([entry.topic, entry.action], expected, `Project API needs the correct navigation path: ${syntax}`);
  assert.ok(entry.pitfall && entry.aliases.length && entry.links.length, `Project API needs context and lesson links: ${syntax}`);
}
assert.equal(new Set(search('', 'set').map(entry => entry.action)).size, 4, 'Set lookup needs create, add, find and erase actions');
assert.equal(search('them khong trung')[0]?.syntax, 'cells.insert(cell)');
assert.equal(search('kiem tra o da chiem')[0]?.syntax, 'Occupied.Contains(Cell)');
assert.equal(search('world sang local')[0]?.syntax, 'GridTransform.InverseTransformPosition(WorldPosition)');
assert.equal(search('kiem tra so huu han')[0]?.syntax, 'std::isfinite(value)');
assert.equal(search('huy dang ky su kien')[0]?.syntax, 'OnHealthChanged.RemoveDynamic(this, &AMyHUD::HandleHealthChanged)');
assert.match(search('contains C++17')[0]?.pitfall ?? '', /C\+\+20/);
assert.match(search('nap asset dong bo')[0]?.pitfall ?? '', /chặn game thread/);
console.log(`PASS: ${syntaxCatalog.length} indexed syntax uses; semantic queries, symbol contexts, container actions, project APIs and canonical links.`);
