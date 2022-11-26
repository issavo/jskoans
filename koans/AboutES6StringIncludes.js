// 63: String - `includes()`
// Follow the hints of the failure messages!

describe('`string.includes()` finds string within another string', () => {
    describe('find a single character', () => {
      it('in a three char string', () => {
        const searchString = FILL_ME_IN;
        expect('xyz'.includes(searchString)).toEqual(true)
      });

      it('reports false if character was not found', () => {
        const expected = FILL_ME_IN;
        expect('xyz'.includes('a')).toEqual(expected)
      });
    });

    describe('find a string', () => {
      it('that matches exactly', () => {
        expect('xyz'.includes(FILL_ME_IN)).toEqual(true)
      });
    });

    describe('search for an empty string, is always true', () => {
      it('in an empty string', () => {
        const emptyString = FILL_ME_IN;
        expect(''.includes(emptyString)).toEqual(true)
      });

      it('in `abc`', () => {
        const actual = 'abc'.includes(FILL_ME_IN);
        expect(actual).toEqual(true)
      });
    });

    describe('special/corner cases', () => {
      it('search for `undefined` in a string fails', () => {
        expect('abc'.includes(undefined)).toEqual(FILL_ME_IN)
      });

      it('searches case-sensitive', () => {
        expect('abc'.includes('A')).toEqual(FILL_ME_IN)
      });

      it('must NOT be a regular expression', () => {
        const regExp = FILL_ME_IN;
        expect(() => {''.includes(regExp)}).toThrowError()
      });

      describe('coerces the searched "thing" into a string', () => {
        it('e.g. from a number', () => {
          const actual = FILL_ME_IN.includes(4);
          expect(actual).toEqual(true)
        });

        it('e.g. from an array', () => {
          const actual = FILL_ME_IN.includes([123]);
          expect(actual).toEqual(true)
        });

        it('e.g. from an object, with a `toString()` method', () => {
          const objWithToString = {toString: () => FILL_ME_IN};
          expect('123'.includes(objWithToString)).toEqual(true)
        });
      });
    });

    describe('takes a position from where to start searching', () => {
      it('does not find `a` after position 1 in `abc`', () => {
        const position = FILL_ME_IN;
        expect('abc'.includes('a', position)).toEqual(false)
      });

      it('even the position gets coerced', () => {
        const findAtPosition = (pos) => 'xyz'.includes(FILL_ME_IN, pos);
        expect(findAtPosition('2')).toEqual(true)
      });

      describe('invalid positions get converted to 0', () => {
        it('e.g. `undefined`', () => {
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          expect(findAtPosition(undefined)).toEqual(FILL_ME_IN)
        });

        it('negative numbers', () => {
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          expect(findAtPosition(-2)).toEqual(FILL_ME_IN)
        });

        it('NaN', () => {
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          expect(findAtPosition(NaN)).toEqual(FILL_ME_IN)
        });
      });
    });
  });
