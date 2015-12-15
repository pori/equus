jest.dontMock('../');

const eq = require('../').eq;

describe('eq', function() {
  it('tells us if two inputs are equivalent.', function() {
    expect(eq(true, true)).toBe(true);
    expect(eq('qwerty', 'qwerty')).toBe(true);
    expect(eq(1, 1)).toBe(true);
  });

  it('tells us if two inputs are not equivalent.', function() {
    expect(eq(true, false)).toBe(false);
    expect(eq('qwerty', 'asdf')).toBe(false);
    expect(eq(1, 2)).toBe(false);
  });
});
