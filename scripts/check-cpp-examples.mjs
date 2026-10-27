import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, basename } from 'node:path';
import { spawnSync } from 'node:child_process';

// Run from a VS 2022 Developer shell on Windows, or with g++ available on Linux.
// Only explicitly labelled complete examples are executable; illustrative/UB snippets are not.
const raw = readFileSync(new URL('../Update/CPP_GIAO_TRINH_CHUAN.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n');
const groups = new Map();
for (const block of raw.matchAll(/^```cpp\n([\s\S]*?)^```\s*$/gm)) {
  const marker = block[1].match(/^\/\/ example: ([a-z0-9-]+); file: ([A-Za-z0-9_.-]+)\s*$/m);
  if (!marker) continue;
  const [, id, file] = marker;
  assert.equal(basename(file), file, 'Example filenames must be flat');
  assert.match(file, /\.(cpp|h|hpp)$/);
  const group = groups.get(id) ?? { files: new Map(), end: 0 };
  assert.ok(!group.files.has(file), `Duplicate ${id}/${file}`);
  group.files.set(file, block[1]);
  group.end = block.index + block[0].length;
  groups.set(id, group);
}
assert.ok(groups.size >= 14, 'Do not lose existing complete examples');

const fixtures = {
  'cpp-01-hello': { output: 'Hello, World!\n' },
  'cpp-01-input': { input: 'Mage\n75\n', output: 'Name: HP: Player: Mage, HP=75\n' },
  'cpp-04-input-check': { input: '100\n', output: 'HP=100\n' },
  'cpp-05-input-loop': { input: 'oops\n-1\n120\nKnight Mage\n', output: 'HP: Please enter an integer.\nHP: HP must be non-negative.\nHP: Full name: Knight Mage: 120 HP\n' },
  'cpp-06-functions': { exit: 8, output: '' },
  'cpp-06-5-files': { output: 'true\n' },
  'cpp-07-capacity': { output: 'size=2\nsize=4, last=0\n' },
};
const directory = mkdtempSync(join(tmpdir(), 'cpp-curriculum-check-'));
const windows = process.platform === 'win32';
const compiler = process.env.CXX || (windows ? 'cl.exe' : 'g++');
const binaries = new Map();
const normalize = (text) => text.replace(/\r\n/g, '\n').trimEnd();
const runCase = (binary, input, output, exit = 0) => {
  const result = spawnSync(binary, [], { input, encoding: 'utf8', timeout: 10000, windowsHide: true });
  assert.ifError(result.error);
  assert.equal(result.status, exit, `${binary}: ${result.stderr}`);
  assert.equal(normalize(result.stdout), normalize(output), `${binary}: output must match the teaching material`);
};

for (const [id, group] of groups) {
  const cwd = join(directory, id);
  mkdirSync(cwd);
  for (const [file, code] of group.files) writeFileSync(join(cwd, file), code);
  const sources = [...group.files.keys()].filter((file) => file.endsWith('.cpp'));
  assert.ok(sources.length, `${id} must have a source file`);
  const binary = join(cwd, windows ? 'example.exe' : 'example');
  const args = windows
    ? ['/nologo', '/std:c++17', '/permissive-', '/EHsc', '/utf-8', '/W4', '/WX', ...sources, `/Fe:${binary}`]
    : ['-std=c++17', '-Wall', '-Wextra', '-Werror', '-pedantic', ...sources, '-o', binary];
  const built = spawnSync(compiler, args, { cwd, encoding: 'utf8', timeout: 120000, windowsHide: true });
  assert.ifError(built.error);
  assert.equal(built.status, 0, `${id}: ${built.stdout}\n${built.stderr}`);
  const fixture = fixtures[id] ?? {};
  const tail = raw.slice(group.end).split(/(?=^<a id=|^```cpp)/m)[0];
  const output = fixture.output ?? tail.match(/^```text\n([\s\S]*?)^```/m)?.[1];
  assert.notEqual(output, undefined, `${id} needs a deterministic expected-output block`);
  runCase(binary, fixture.input ?? '', output, fixture.exit ?? 0);
  binaries.set(id, binary);
  console.log(`PASS: ${id} (${sources.length} translation unit${sources.length > 1 ? 's' : ''})`);
}

// Regression cases for failure recovery and EOF; a working happy path alone is insufficient.
for (const input of ['wrong\n', '']) {
  runCase(binaries.get('cpp-04-input-check'), input, 'Invalid input!\n', 1);
}
runCase(binaries.get('cpp-05-input-loop'), '', 'HP: ');
runCase(binaries.get('cpp-05-input-loop'), 'oops\n', 'HP: Please enter an integer.\nHP: ');
runCase(binaries.get('cpp-05-input-loop'), '100\n\n', 'HP: Full name: : 100 HP\n');
console.log(`PASS: ${groups.size} C++17 example groups and 5 input/EOF cases. Temporary binaries: ${directory}`);
