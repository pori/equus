'use strict';

const assert = require('assert');
const gt = require('../').gt;

suite('gt');

test('if curried', function() {
  assert.equal(typeof gt(3), 'function', 'should be a curried function');
});

test('if something is greater than another.', function() {
  assert(gt(3)(1));
  assert(gt('b')('a'));
});

test('if something is not greater than another.', function() {
  assert.equal(gt(1)(3), false);
  assert.equal(gt(3)(3), false);
  assert.equal(gt('a')('b'), false);
  assert.equal(gt('a')('a'), false);
});
