'use strict';

const assert = require('assert');
const any = require('../').any;

suite('any')

it('is truthy', function() {
  assert(any(true, true));
  assert(any(true, true, true));
  assert(any(true, false));
  assert(any(true, true, false));
  assert(any(true, false, true));
});

it('is falsy', function() {
  assert.equal(any(false, false), false);
});
