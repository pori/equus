'use strict';

const assert = require('assert');
const lt = require('../').lt;

suite('lt');

test('tells us if something is less than another.', function() {
  assert(lt(1, 3));
  assert(lt('a', 'b'));
});

test('tells us if something is not greater than another.', function() {
  assert.equal(lt(3, 1), false);
  assert.equal(lt(3, 3), false);
  assert.equal(lt('b', 'a'), false);
  assert.equal(lt('a', 'a'), false);
});
