// 71: String - `repeat()`
// Follow the hints of the failure messages!

describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', () => {

  describe('pass the count to `str.repeat(count)`', () => {
    it('for `1` the string stays the same', () => {
      const what = 'one'.repeat(FILL_ME_IN);
      expect(what).toEqual('one')
    });

    it('for `3` the string `x` becomes `xxx`', () => {
      const actual = 'x'.repeat(FILL_ME_IN);
      expect(actual).toEqual('xxx')
    });

    it('for `0` an empty string is returned', () => {
      const dontRepeat = FILL_ME_IN;
      expect('shrink'.repeat(dontRepeat)).toEqual('')
    });

    it('the count is not an int, such as "3", it gets coerced to an int', () => {
      const repeated = 'three'.repeat('FILL_ME_IN');
      expect(repeated).toEqual('threethreethree')
    });
  });

  describe('throws an error for', () => {
    it('a count of <0', () => {
      const belowZero = FILL_ME_IN;
      expect(() => {''.repeat(belowZero)}).toThrowError(RangeError)
    });

    it('a count of +Infinty', () => {
      let infinity = FILL_ME_IN;
      expect(() => {''.repeat(infinity)}).toThrowError(RangeError)
    });
  });

  describe('accepts everything that can be coerced to a string', () => {
    it('e.g. a boolean', () => {
      let aBool = true;
      expect(String.prototype.repeat.call(aBool, 2)).toEqual(FILL_ME_IN)
    });

    it('e.g. a number', () => {
      let aNumber = 1;
      expect(String.prototype.repeat.call(aNumber, 2)).toEqual(FILL_ME_IN)
    });
  });

  describe('for my own (string) class', () => {
    it('calls `toString()` to make it a string', () => {
      class MyString { toString() { return 'my string'; } }

      expect(String(new MyString()).repeat(1)).toEqual(FILL_ME_IN)
    });

    it('`toString()` is only called once', () => {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }

      let repeated = String(new X()).repeat(2);
      expect(repeated).toEqual(FILL_ME_IN)
    });
  });
});
