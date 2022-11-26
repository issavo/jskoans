// 41: array - entries
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', () => {
    it('returns key+value for each element', () => {
      const arr = ['a', 'b', 'c'];
      const entriesAsArray = Array.from(arr.entries());

      expect(entriesAsArray).toEqual(FILL_ME_IN)
    });

    it('empty elements contain the value `undefined`', () => {
      const arr = ['one'];
      arr[2] = 'three';
      const values = Array.from(arr.entries());

      expect(values[1]).toEqual(FILL_ME_IN)
    });

    describe('returns an iterable', () => {
      it('has `next()` to iterate', () => {
        const arr = ['one'];
        const entries = arr.entries();
        const value = entries.next().value

        expect(value).toEqual(FILL_ME_IN)
      });
    });
  });
