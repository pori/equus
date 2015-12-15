
jest.dontMock('../');

const or = require('../').or;

describe('or', function() {
  it('is truthy', function() {
    expect(or(true, true)).toBe(true);
    expect(or(true, true, true)).toBe(true);
    expect(or(true, false)).toBe(true);
    expect(or(true, true, false)).toBe(true);
    expect(or(true, false, true)).toBe(true);
  });

  it('is falsy', function() {
    expect(or(false, false)).toBe(false);
  });
});
