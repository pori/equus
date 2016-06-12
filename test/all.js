'use strict';

const assert = require('assert');
const all = require('../').all;

suite('all');

test('is truthy', function() {
  assert(all(true, true));
  assert(all(true, true, true));
});

test('is falsy', function() {
  assert.equal(all(true, false), false);
  assert.equal(all(true, true, false), false);
  assert.equal(all(true, false, true), false);
});
