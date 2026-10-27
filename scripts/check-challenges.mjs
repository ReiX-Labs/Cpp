import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import ts from 'typescript';

const source = readFileSync(new URL('../src/data/challenges.ts', import.meta.url), 'utf8');
const { challenges } = await import('data:text/javascript;base64,' + Buffer.from(ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText).toString('base64'));
const examples = Object.values(challenges).flat().filter((item) => item.type === 'predict');
const directory = mkdtempSync(join(tmpdir(), 'cpp-challenge-check-'));
const windows = process.platform === 'win32';
for (const item of examples) {
  const cwd = join(directory, item.id);
  mkdirSync(cwd);
  writeFileSync(join(cwd, 'Main.cpp'), item.code);
  const binary = join(cwd, windows ? 'example.exe' : 'example');
  const args = windows ? ['/nologo', '/std:c++17', '/permissive-', '/EHsc', '/utf-8', 'Main.cpp', `/Fe:${binary}`]
    : ['-std=c++17', '-Wall', '-Wextra', '-pedantic', 'Main.cpp', '-o', binary];
  const built = spawnSync(process.env.CXX || (windows ? 'cl.exe' : 'g++'), args, { cwd, encoding: 'utf8', timeout: 120000, windowsHide: true });
  assert.ifError(built.error);
  assert.equal(built.status, 0, `${item.id}: ${built.stdout}\n${built.stderr}`);
  const run = spawnSync(binary, [], { encoding: 'utf8', timeout: 10000, windowsHide: true });
  assert.ifError(run.error);
  assert.equal(run.status, 0, item.id);
  assert.equal(run.stdout.replace(/\r\n/g, '\n').trim(), item.expected.trim(), `${item.id}: answer must match the complete program`);
}
console.log(`PASS: ${examples.length} complete predict-output challenges compile and match their answer keys.`);
