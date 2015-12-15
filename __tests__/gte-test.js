jest.dontMock('../');

const gte = require('../').gte;

describe('gte', function() {
  it('tells us if something is greater than or equal to another.', function() {
    expect(gte(3, 1)).toBe(true);
    expect(gte(3, 3)).toBe(true);
    expect(gte('b', 'a')).toBe(true);
    expect(gte('a', 'a')).toBe(true);
  });

  it('tells us if something is not greater than or equal to another.', function() {
    expect(gte(1, 3)).toBe(false);
    expect(gte('a', 'b')).toBe(false);
  });
});
