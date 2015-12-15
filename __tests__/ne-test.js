jest.dontMock('../');

const ne = require('../').ne;

describe('ne', function() {
  it('tells us if two inputs are not equivalent.', function() {
    expect(ne(true, false)).toBe(true);
    expect(ne('qwerty', 'asdf')).toBe(true);
    expect(ne(1, 2)).toBe(true);
  });

  it('tells us if two inputs are equivalent.', function() {
    expect(ne(true, true)).toBe(false);
    expect(ne('qwerty', 'qwerty')).toBe(false);
    expect(ne(1, 1)).toBe(false);
  });
});
