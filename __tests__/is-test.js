jest.dontMock('../');

const is = require('../').is;

describe('is', function() {
  it('tells us if something is.', function() {
    expect(is(true)).toBe(true);
    expect(is({})).toBe(true);
    expect(is([])).toBe(true);
    expect(is('qwerty')).toBe(true);
    expect(is(1)).toBe(true);
  });

  it('tells us if something does not exist.', function() {
    expect(is(false)).toBe(false);
    expect(is(null)).toBe(false);
    expect(is(undefined)).toBe(false);
    expect(is('')).toBe(false);
    expect(is(0)).toBe(false);
  });
});
