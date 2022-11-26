// 30: array - `Array.of` static method
// Follow the hints of the failure messages!

describe('`Array.of` creates an array with the given arguments as elements', () => {

  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array.of(10);

    expect(arr).toEqual(FILL_ME_IN);
  });

  it('puts all arguments into array elements', () => {
    const arr = Array.of(FILL_ME_IN);

    expect(arr).toEqual([1, 2]);
  });

  it('takes any kind and number of arguments', () => {
    const starter = [1, 2];
    const end = [3, 4];
    const arr = Array.of(...starter, ...end);

    expect(arr).toEqual(FILL_ME_IN);
  });
});
