jest.dontMock('../');

const lt = require('../').lt;

describe('lt', function() {
  it('tells us if something is less than another.', function() {
    expect(lt(1, 3)).toBe(true);
    expect(lt('a', 'b')).toBe(true);
  });

  it('tells us if something is not greater than another.', function() {
    expect(lt(3, 1)).toBe(false);
    expect(lt(3, 3)).toBe(false);
    expect(lt('b', 'a')).toBe(false);
    expect(lt('a', 'a')).toBe(false);
  });
});
