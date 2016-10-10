import test from 'ava'
import { all, any, not, is, eq, ne, lt, gt, lte, gte } from '../src/assert.js'

// all

test('is truthy', t => {
  t.true(all(true, true))
  t.true(all(true, true, true))
})

test('is falsy', t => {
  t.is(all(true, false), false)
  t.is(all(true, true, false), false)
  t.is(all(true, false, true), false)
})

// any

test('is truthy', t => {
  t.true(any(true, true));
  t.true(any(true, true, true));
  t.true(any(true, false));
  t.true(any(true, true, false));
  t.true(any(true, false, true));
});

test('is falsy', t => {
  t.is(any(false, false), false);
});

// eq

test('curried', t => {
  t.is(typeof eq(5), 'function');
});

test('two inputs are equivalent.', t => {
  t.true(eq(true)(true));
  t.true(eq('qwerty')('qwerty'));
  t.true(eq(1)(1));
});

test('two inputs are not equivalent.', t => {
  t.is(eq(true)(false), false);
  t.is(eq('qwerty')('asdf'), false);
  t.is(eq(1)(2), false);
});

// gt

test('if curried', t => {
  t.is(typeof gt(3), 'function', 'should be a curried function');
});

test('if something is greater than another.', t => {
  t.true(gt(3)(1));
  t.true(gt('b')('a'));
});

test('if something is not greater than another.', t => {
  t.is(gt(1)(3), false);
  t.is(gt(3)(3), false);
  t.is(gt('a')('b'), false);
  t.is(gt('a')('a'), false);
});

// gte

test('curried', t => {
  t.is(typeof gte(3), 'function');
});

test('something is greater than or equal to another.', t => {
  t.true(gte(3)(1));
  t.true(gte(3)(3));
  t.true(gte('b')('a'));
  t.true(gte('a')('a'));
});

test('something is not greater than or equal to another.', t => {
  t.is(gte(1)(3), false);
  t.is(gte('a')('b'), false);
});

// is

test('tells us if something is.', t => {
  t.true(is(true));
  t.true(is({}));
  t.true(is([]));
  t.true(is('qwerty'));
  t.true(is(1));
});

test('tells us if something does not exist.', t => {
  t.is(is(false), false);
  t.is(is(null), false);
  t.is(is(undefined), false);
  t.is(is(''), false);
  t.is(is(0), false);
});

// lt

test('tells us if something is less than another.', t => {
  t.true(lt(1, 3));
  t.true(lt('a', 'b'));
});

test('tells us if something is not greater than another.', t => {
  t.is(lt(3, 1), false);
  t.is(lt(3, 3), false);
  t.is(lt('b', 'a'), false);
  t.is(lt('a', 'a'), false);
});

// lte

test('tells us if something is less than or equal to another.', t => {
  t.true(lte(1, 3));
  t.true(lte(3, 3));
  t.true(lte('a', 'b'));
  t.true(lte('a', 'a'));
});

test('tells us if something is not less than or equal to another.', t => {
  t.is(lte(3, 1), false);
  t.is(lte('b', 'a'), false);
});

// ne

test('tells us if two inputs are not equivalent.', t => {
  t.true(ne(true, false));
  t.true(ne('qwerty', 'asdf'));
  t.true(ne(1, 2));
});

test('tells us if two inputs are equivalent.', t => {
  t.is(ne(true, true), false);
  t.is(ne('qwerty', 'qwerty'), false);
  t.is(ne(1, 1), false);
});

// not

test('checks if something does not exist.', t => {
  t.true(not(false));
  t.true(not(null));
  t.true(not(undefined));
  t.true(not(''));
  t.true(not(0));
});

test('tells if something does exist.', t => {
  t.is(not(true), false);
  t.is(not({}), false);
  t.is(not([]), false);
  t.is(not('qwerty'), false);
  t.is(not(1), false);
});
