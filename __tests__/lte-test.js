jest.dontMock('../');

const lte = require('../').lte;

describe('lte', function() {
  it('tells us if something is less than or equal to another.', function() {
    expect(lte(1, 3)).toBe(true);
    expect(lte(3, 3)).toBe(true);
    expect(lte('a', 'b')).toBe(true);
    expect(lte('a', 'a')).toBe(true);
  });

  it('tells us if something is not less than or equal to another.', function() {
    expect(lte(3, 1)).toBe(false);
    expect(lte('b', 'a')).toBe(false);
  });
});
