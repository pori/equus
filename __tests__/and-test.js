
jest.dontMock('../');

const and = require('../').and;

describe('and', function() {
  it('is truthy', function() {
    expect(and(true, true)).toBe(true);
    expect(and(true, true, true)).toBe(true);
  });

  it('is falsy', function() {
    expect(and(true, false)).toBe(false);
    expect(and(true, true, false)).toBe(false);
    expect(and(true, false, true)).toBe(false);
  });
});
