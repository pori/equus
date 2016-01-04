/**
 * Checks whether a value does not exist.
 * @param {*} x
 * @return {boolean}
 */
const not = (x) => !x;

module.exports.not = not;

/**
 * Checks whether a value exists.
 * @param {*} x
 * @return {boolean}
 */
const is = (x) => not(not(x));

module.exports.is = is;

/**
 * Strictly checks if two values are equal. Does not support Objects or Arrays.
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const eq = (a, b) => a === b;

module.exports.eq = eq;

/**
 * Strictly checks if two values are not equal. Does not support Objects or Arrays.
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const ne = (a, b) => a !== b;

module.exports.ne = ne;

/**
 * Checks if a value is greater than another.
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const gt = (a, b) => a > b;

module.exports.gt = gt;

/**
 * Checks if a value is greater than or equal to another.
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const gte = (a, b) => a >= b;

module.exports.gte = gte;

/**
 * Checks if a value is less than another.
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const lt = (a, b) => a < b;

module.exports.lt = lt;

/**
 * Checks if a value is less than or equal to another.
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const lte = (a, b) => a <= b;

module.exports.lte = lte;

/**
 * Evaluates if a list of arguments is true.
 * @param {*} arguments
 * @return {boolean}
 */
const all = function() {
  'use strict';

  let eqs = Object.keys(arguments).map((k) => arguments[k]);

  if (not(eqs.length) && not(eqs[0])) return true;
  else if (not(eqs[0])) return false;

  return all.apply(null, eqs.slice(1));
};

module.exports.all = all;

/**
 * Evaluates if at least one argument in a list is true.
 * @param {*} arguments
 * @return {boolean}
 */
const any = function() {
  'use strict';

  let eqs = Object.keys(arguments).map((k) => arguments[k]);

  if (is(eqs[0])) return true;
  else if (not(eqs.length)) return false;

  return any.apply(null, eqs.slice(1));
};

module.exports.any = any;

// TODO: mod(a, b)

// TODO: regex(x, matcher)
