// 20: spread - with-arrays
// Follow the hints of the failure messages!

describe('spread with arrays', () => {

  it('extracts each array item', function() {
    const [a, b] = [...[1, 2]];
    expect(FILL_ME_IN).toEqual(2);
  });

  it('in combination with rest', function() {
    const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    expect(FILL_ME_IN, [2, 3, 4, 5]);
  });

  it('spreading into the rest', function() {
    const [...rest] = [...[1, 2, 3, 4, 5]];
    expect(FILL_ME_IN).toEqual([1, 2, 3, 4, 5]);
  });

  describe('used as function parameter', () => {
    it('prefix with `...` to spread as function params', function() {
      const magicNumbers = [1, 2];

      const fn = (magicA, magicB) => {
        expect(magicNumbers[0]).toEqual(magicA);
        expect(magicNumbers[1]).toEqual(magicB);
      };

      fn(...FILL_ME_IN);
    });

    it('pass an array of numbers to Math.max()', function() {
      const max = Math.max(...[23, 0, 42]);

      expect(max).toEqual(FILL_ME_IN);
    });
  });
});
