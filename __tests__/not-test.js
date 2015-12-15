jest.dontMock('../');

const not = require('../').not;

describe('not', function() {
  it('checks if something does not exist.', function() {
    expect(not(false)).toBe(true);
    expect(not(null)).toBe(true);
    expect(not(undefined)).toBe(true);
    expect(not('')).toBe(true);
    expect(not(0)).toBe(true);
  });

  it('tells if something does exist.', function() {
    expect(not(true)).toBe(false);
    expect(not({})).toBe(false);
    expect(not([])).toBe(false);
    expect(not('qwerty')).toBe(false);
    expect(not(1)).toBe(false);
  });
});
