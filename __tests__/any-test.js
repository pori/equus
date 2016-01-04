
jest.dontMock('../');

const any = require('../').any;

describe('any', function() {
  it('is truthy', function() {
    expect(any(true, true)).toBe(true);
    expect(any(true, true, true)).toBe(true);
    expect(any(true, false)).toBe(true);
    expect(any(true, true, false)).toBe(true);
    expect(any(true, false, true)).toBe(true);
  });

  it('is falsy', function() {
    expect(any(false, false)).toBe(false);
  });
});
