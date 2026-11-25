import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './calc.mjs';

test('add', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-2, -3), -5);
  assert.equal(add(0, 0), 0);
});

test('mul', async () => {
  const { mul } = await import('./calc.mjs');
  assert.equal(mul(2, 3), 6);
  assert.equal(mul(-2, 3), -6);
  assert.equal(mul(0, 7), 0);
});
