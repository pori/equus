'use strict';

const assert = require('assert');
const not = require('../').not;

suite('not');

test('checks if something does not exist.', function() {
  assert(not(false));
  assert(not(null));
  assert(not(undefined));
  assert(not(''));
  assert(not(0));
});

test('tells if something does exist.', function() {
  assert.equal(not(true), false);
  assert.equal(not({}), false);
  assert.equal(not([]), false);
  assert.equal(not('qwerty'), false);
  assert.equal(not(1), false);
});
