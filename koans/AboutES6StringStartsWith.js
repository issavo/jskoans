// 72: String - `startsWith()`
// Follow the hints of the failure messages!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', () => {

  const s = 'the string s';

  describe('1st parameter, the string to search for', () => {
    it('works with just a character', () => {
      const actual = s.startsWith(FILL_ME_IN);
      expect(actual).toEqual(true)
    });

    it('works with a string', () => {
      const expected = FILL_ME_IN;
      expect(s.startsWith('the')).toEqual(expected)
    });

    it('works with unicode characters', () => {
      const nuclear = '☢ NO';
      expect(nuclear.startsWith('☢')).toEqual(FILL_ME_IN)
    });

    it('a regular expression throws a TypeError', () => {
      const aRegExp = FILL_ME_IN;
      expect(() => {''.startsWith(aRegExp)}).toThrowError(TypeError)
    });
  });

  describe('2nd parameter, the position where to start searching from', () => {
    it('find "str" at position 4', () => {
      const position = 4;
      expect(s.startsWith(FILL_ME_IN, position)).toEqual(true)
    });

    it('`undefined` is the same as 0', () => {
      expect(s.startsWith(FILL_ME_IN, undefined)).toEqual(true)
    });

    it('the parameter gets coerced to an int', () => {
      const position = '4';
      expect(s.startsWith(FILL_ME_IN, position)).toEqual(true)
    });

    it('a value larger than the string`s length, returns false', () => {
      expect(s.startsWith('the', FILL_ME_IN)).toEqual(false)
    });
  });
});
