import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './calc.mjs';

test('add', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-2, -3), -5);
  assert.equal(add(0, 0), 0);
});

test('sub', async () => {
  const { sub } = await import('./calc.mjs');
  assert.equal(sub(5, 3), 2);
  assert.equal(sub(-2, 3), -5);
  assert.equal(sub(0, 0), 0);
  assert.equal(sub(3, 5), -2);
});
