'use strict';

const assert = require('assert');
const gte = require('../').gte;

suite('gte');

test('curried', function() {
  assert.equal(typeof gte(3), 'function');
});

test('something is greater than or equal to another.', function() {
  assert(gte(3)(1));
  assert(gte(3)(3));
  assert(gte('b')('a'));
  assert(gte('a')('a'));
});

test('something is not greater than or equal to another.', function() {
  assert.equal(gte(1)(3), false);
  assert.equal(gte('a')('b'), false);
});
