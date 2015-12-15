jest.dontMock('../');

const gt = require('../').gt;

describe('gt', function() {
  it('tells us if something is greater than another.', function() {
    expect(gt(3, 1)).toBe(true);
    expect(gt('b', 'a')).toBe(true);
  });

  it('tells us if something is not greater than another.', function() {
    expect(gt(1, 3)).toBe(false);
    expect(gt(3, 3)).toBe(false);
    expect(gt('a', 'b')).toBe(false);
    expect(gt('a', 'a')).toBe(false);
  });
});
