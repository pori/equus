'use strict';

const assert = require('assert');
const lte = require('../').lte;

suite('lte');

test('tells us if something is less than or equal to another.', function() {
  assert(lte(1, 3));
  assert(lte(3, 3));
  assert(lte('a', 'b'));
  assert(lte('a', 'a'));
});

test('tells us if something is not less than or equal to another.', function() {
  assert.equal(lte(3, 1), false);
  assert.equal(lte('b', 'a'), false);
});
