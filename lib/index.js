/**
 * Checks whether a value does not exist.
 *
 * @param {*} x
 * @return {boolean}
 */
export const not = (x) => !x;

/**
 * Checks whether a value exists.
 *
 * @param {*} x
 * @return {boolean}
 */
export const is = (x) => not(not(x));

/**
 * Strictly checks if two values are equal. Does not support Objects or Arrays.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
export const eq = (a) => (b) => a === b;

/**
 * Strictly checks if two values are not equal. Does not support Objects or Arrays.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
export const ne = (a, b) => a !== b;

/**
 * Checks if a value is greater than another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
export const gt = (a) => (b) => a > b;

/**
 * Checks if a value is greater than or equal to another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
export const gte = (a) => (b) => a >= b;

/**
 * Checks if a value is less than another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
export const lt = (a, b) => a < b;

/**
 * Checks if a value is less than or equal to another.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
const lte = (a, b) => a <= b;

module.exports.lte = lte;

/**
 * Evaluates if a list of arguments is true.
 *
 * @param {*} arguments
 * @return {boolean}
 */
export function all () {
    let eqs = [...arguments];

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
export function any () {
    let eqs = [...arguments];

    if (is(eqs[0])) return true;
    else if (not(eqs.length)) return false;

    return any.apply(null, eqs.slice(1));
}

