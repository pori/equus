/**
 * Just and identity function.
 *
 * @param {*} x
 * @return {boolean}
 */
const is = (x) => x;

/**
 * Checks whether a value does not exist.
 *
 * @param {*} x
 * @return {boolean}
 */
const not = (x) => !x;

/**
 * Strictly checks if two values are equal. Does not support Objects or Arrays.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
 const equal = (a) => (b) => a === b;

/**
 * Strictly checks if two values are not equal. Does not support Objects or Arrays.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const notEqual = (a, b) => a !== b;

/**
 * Checks if a value is greater than another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const greaterThan = (a) => (b) => a > b;

/**
 * Checks if a value is greater than or equal to another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const greaterThanOrEqual = (a) => (b) => a >= b;

/**
 * Checks if a value is less than another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const lesserThan = (a, b) => a < b;

/**
 * Checks if a value is less than or equal to another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const lesserThanOrEqual = (a, b) => a <= b;

/**
 * Evaluates if a list of arguments is true.
 *
 * @param {*} arguments
 * @return {boolean}
 */
function all() {
  const eqs = [...arguments];

  if (not(eqs.length) && not(eqs[0])) return true;
  else if (not(eqs[0])) return false;

  return all.apply(null, eqs.slice(1));
}

/**
 * Evaluates if at least one argument in a list is true.
 *
 * @param {*} arguments
 * @return {boolean}
 */
function any() {
  const eqs = [...arguments];

  if (is(eqs[0])) return true;
  else if (not(eqs.length)) return false;

  return any.apply(null, eqs.slice(1));
}

module.exports = {
	is,
	not,
	equal,
	notEqual,
	greaterThan,
	greaterThanOrEqual,
	lesserThan,
	lesserThanOrEqual,
	all,
	any,
}
