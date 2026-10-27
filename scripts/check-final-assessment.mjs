import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync, copyFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const source = new URL('../Update/ArenaCombat_Final_Reviewed/', import.meta.url);
const cwd = mkdtempSync(join(tmpdir(), 'cpp-final-check-'));
for (const file of ['Main.cpp', 'Player.cpp', 'Player.h', 'Enemy.cpp', 'Enemy.h']) copyFileSync(new URL(file, source), join(cwd, file));
const windows = process.platform === 'win32';
const compiler = process.env.CXX || (windows ? 'cl.exe' : 'g++');
function buildRun(main, name) {
  const binary = join(cwd, name + (windows ? '.exe' : ''));
  const files = [main, 'Player.cpp', 'Enemy.cpp'];
  const args = windows
    ? ['/nologo', '/std:c++17', '/permissive-', '/EHsc', '/utf-8', '/W4', '/WX', ...files, `/Fe:${binary}`]
    : ['-std=c++17', '-Wall', '-Wextra', '-Werror', '-pedantic', ...files, '-o', binary];
  const built = spawnSync(compiler, args, { cwd, encoding: 'utf8', timeout: 120000, windowsHide: true });
  assert.ifError(built.error);
  assert.equal(built.status, 0, built.stdout + built.stderr);
  const run = spawnSync(binary, [], { cwd, encoding: 'utf8', timeout: 10000, windowsHide: true });
  assert.ifError(run.error);
  assert.equal(run.status, 0, run.stdout + run.stderr);
  return run.stdout.replace(/\r\n/g, '\n');
}
const output = buildRun('Main.cpp', 'assessment');
assert.match(output, /Player HP: 40\/120\nEnemies defeated: 3\/3\nPotions remaining: 0\nPlayer Win!!\s*$/);
assert.equal(output.match(/Player uses Potion!/g)?.length, 2);
assert.equal(output.match(/(?:Slime|Goblin|Boss) defeated!/g)?.length, 3);

writeFileSync(join(cwd, 'Boundary.cpp'), `#include "Player.h"
#include "Enemy.h"
#include <cassert>
#include <limits>
#include <memory>
#include <type_traits>

int main() {
    // Source constructors require valid initial configuration; tests stay within that contract.
    Player player(120, 120, 25, 2);
    player.applyDamage(-10);
    player.applyDamage(0);
    assert(player.GetHealth() == 120);
    player.applyDamage(80);
    Enemy target("Target", 100, 100, 10);
    player.Action(target);
    assert(player.GetHealth() == 70 && player.GetPotion() == 1);
    assert(target.GetHealth() == 100); // A potion replaces an attack.
    player.Action(target);
    assert(target.GetHealth() == 75 && player.GetPotion() == 1);

    Player capped(40, 50, 25, 1);
    capped.Action(target);
    assert(capped.GetHealth() == 50 && capped.GetPotion() == 0);
    Player noPotion(40, 120, 25, 0);
    noPotion.Action(target);
    assert(noPotion.GetHealth() == 40 && target.GetHealth() == 50);

    target.applyDamage(-1);
    target.applyDamage(0);
    assert(target.GetHealth() == 50);
    target.applyDamage(std::numeric_limits<int>::max());
    assert(target.GetHealth() == 0 && !target.isAlive());
    player.applyDamage(std::numeric_limits<int>::max());
    assert(player.GetHealth() == 0 && !player.isAlive());
    Enemy untouched("Untouched", 20, 20, 10);
    player.Action(untouched);
    assert(untouched.GetHealth() == 20 && player.GetPotion() == 1);

    static_assert(std::has_virtual_destructor_v<Enemy>);
    std::unique_ptr<Enemy> boss = std::make_unique<Boss>("Boss", 80, 80, 20);
    assert(dynamic_cast<Boss*>(boss.get()) != nullptr);
    Player victim(10, 10, 1, 0);
    boss->dealDamage(victim);
    assert(victim.GetHealth() == 0);
}
`);
buildRun('Boundary.cpp', 'boundaries');

// The public download must be byte-for-byte the reviewed source, not a stale copy.
// Read central-directory records and inflate entries using Node's built-in zlib.
const { inflateRawSync } = await import('node:zlib');
const zip = readFileSync(new URL('../public/downloads/ArenaCombat_Final_Reviewed.zip', import.meta.url));
let eocd = zip.length - 22;
while (eocd >= Math.max(0, zip.length - 65557) && zip.readUInt32LE(eocd) !== 0x06054b50) eocd--;
assert.ok(eocd >= 0, 'Missing ZIP central directory');
let offset = zip.readUInt32LE(eocd + 16);
const entries = new Map();
for (let i = 0; i < zip.readUInt16LE(eocd + 10); i++) {
  assert.equal(zip.readUInt32LE(offset), 0x02014b50);
  const method = zip.readUInt16LE(offset + 10);
  const size = zip.readUInt32LE(offset + 20);
  const nameLength = zip.readUInt16LE(offset + 28);
  const extraLength = zip.readUInt16LE(offset + 30);
  const commentLength = zip.readUInt16LE(offset + 32);
  const local = zip.readUInt32LE(offset + 42);
  const name = zip.subarray(offset + 46, offset + 46 + nameLength).toString('utf8').replaceAll('\\', '/');
  const data = local + 30 + zip.readUInt16LE(local + 26) + zip.readUInt16LE(local + 28);
  const compressed = zip.subarray(data, data + size);
  assert.ok(method === 0 || method === 8, `Unsupported ZIP compression ${method}`);
  entries.set(name.split('/').pop(), method === 8 ? inflateRawSync(compressed) : compressed);
  offset += 46 + nameLength + extraLength + commentLength;
}
for (const file of ['Main.cpp', 'Player.cpp', 'Player.h', 'Enemy.cpp', 'Enemy.h']) {
  assert.deepEqual(entries.get(file), readFileSync(new URL(file, source)), `Download differs: ${file}`);
}
console.log('PASS: supplied five-file Final Assessment builds, produces 40/120 HP + 3/3 defeated + 0 potions, passes boundary/action tests, and matches the public ZIP.');
