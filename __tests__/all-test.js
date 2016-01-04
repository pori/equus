
jest.dontMock('../');

const all = require('../').all;

describe('all', function() {
  it('is truthy', function() {
    expect(all(true, true)).toBe(true);
    expect(all(true, true, true)).toBe(true);
  });

  it('is falsy', function() {
    expect(all(true, false)).toBe(false);
    expect(all(true, true, false)).toBe(false);
    expect(all(true, false, true)).toBe(false);
  });
});
