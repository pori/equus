'use strict';

const assert = require('assert');
const eq = require('../').eq;

suite('eq');

test('curried', function() {
  assert.equal(typeof eq(5), 'function');
});

test('two inputs are equivalent.', function() {
  assert(eq(true)(true));
  assert(eq('qwerty')('qwerty'));
  assert(eq(1)(1));
});

test('two inputs are not equivalent.', function() {
  assert.equal(eq(true)(false), false);
  assert.equal(eq('qwerty')('asdf'), false);
  assert.equal(eq(1)(2), false);
});
