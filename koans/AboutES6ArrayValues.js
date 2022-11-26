// 43: array - `Array.values`
// Follow the hints of the failure messages!

describe('`Array.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', () => {
    const arr = ['k', 'e', 'y'];
    const iterator = arr.values();

    expect(iterator.next().value).toEqual(FILL_ME_IN)
  });

  it('use `iterator.next()` to drop first value', () => {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next();

    expect([...iterator]).toEqual([FILL_ME_IN])
  });

  it('empty array contains no values', () => {
    const arr = []
    const values = [...arr.values()];

    expect(values.length).toEqual(FILL_ME_IN)
  });

  it('a sparse array without real values has values though', () => {
    const arr = [,];
    const keys = [...arr.values()];

    expect(keys).toEqual([FILL_ME_IN])
  });

  it('also includes holes in sparse arrays', () => {
    const arr = ['a',,'c'];

    expect([...arr.values()]).toEqual([FILL_ME_IN])
  });
});
