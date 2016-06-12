'use strict';

const assert = require('assert');
const is = require('../').is;

suite('is');

test('tells us if something is.', function() {
  assert(is(true));
  assert(is({}));
  assert(is([]));
  assert(is('qwerty'));
  assert(is(1));
});

test('tells us if something does not exist.', function() {
  assert.equal(is(false), false);
  assert.equal(is(null), false);
  assert.equal(is(undefined), false);
  assert.equal(is(''), false);
  assert.equal(is(0), false);
});
