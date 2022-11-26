// 42: array - `Array.keys`
// Follow the hints of the failure messages!

describe('`array.keys` returns an iterator for all keys in the array', () => {
    it('`keys()` returns an iterator', () => {
      const arr = ['a', 'b'];
      const iterator = arr.keys();

      expect(iterator.next().value).toEqual(FILL_ME_IN)
      expect(iterator.next().value).toEqual(FILL_ME_IN)
    });

    it('gets all keys', () => {
      const arr = ['a', 'b'];
      const keys = Array.from(arr.keys());

      expect(keys).toEqual(FILL_ME_IN)
    });

    it('empty array contains no keys', () => {
      const arr = [];
      const keys = [...arr.keys()];

      expect(keys.length).toEqual(FILL_ME_IN)
    });

    it('a sparse array without real values has keys though', () => {
      const arr = [,,];
      const keys = [...arr.keys()];

      expect(keys).toEqual(FILL_ME_IN)
    });

    it('also includes holes in sparse arrays', () => {
      const arr = ['a', , 'c'];
      const keys = [...arr.keys()];

      expect(keys).toEqual(FILL_ME_IN)
    });
  });
