'use strict';

const assert = require('assert');
const ne = require('../').ne;

suite('ne');

test('tells us if two inputs are not equivalent.', function() {
  assert(ne(true, false));
  assert(ne('qwerty', 'asdf'));
  assert(ne(1, 2));
});

test('tells us if two inputs are equivalent.', function() {
  assert.equal(ne(true, true), false);
  assert.equal(ne('qwerty', 'qwerty'), false);
  assert.equal(ne(1, 1), false);
});
