// 74: String - `endsWith()`
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', () => {

  const s = 'el fin';

  describe('1st parameter, the string to search for', () => {
    it('works with just a character', () => {
      const doesEndWith = s.endsWith(FILL_ME_IN);
      expect(doesEndWith).toEqual(true)
    });

    it('works with a string', () => {
      expect(s.endsWith(FILL_ME_IN)).toEqual(true)
    });

    it('works with unicode characters', () => {
      const nuclear = 'NO ☢ Oh NO!';
      expect(nuclear.endsWith('☢' + FILL_ME_IN)).toEqual(true)
    });

    it('a regular expression throws a TypeError', () => {
      const aRegExp = FILL_ME_IN;
      expect(() => {''.endsWith(aRegExp)}).toThrowError(TypeError)
    });
  });

  describe('2nd parameter, searches within this string as if this string were only this long', () => {
    it('find "el" at a substring of the length 2', () => {
      const endPos = 2;
      expect(s.endsWith(FILL_ME_IN, endPos)).toEqual(true)
    });

    it('`undefined` uses the entire string', () => {
      expect(s.endsWith(FILL_ME_IN, undefined)).toEqual(true)
    });

    it('the parameter gets coerced to an int', () => {
      const position = '5'
      expect(s.endsWith(FILL_ME_IN, position)).toEqual(true)
    });

    describe('value less than 0', () => {
      it('returns `true`, when searching for an empty string', () => {
        const emptyString = FILL_ME_IN;
        expect('1'.endsWith(emptyString, -1)).toEqual(true)
      });

      it('return `false`, when searching for a non-empty string', () => {
        const notEmpty = '';
        expect('1'.endsWith(notEmpty, -1)).toEqual(FILL_ME_IN)
      });
    });
  });
});
