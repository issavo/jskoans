// 33: array - `Array.prototype.findIndex`
// Follow the hints of the failure messages!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {

  it('takes a compare function, returns the index where it returned true', function() {
    const foundAt = [false, true].findIndex(item => item === true);

    expect(foundAt).toEqual(FILL_ME_IN);
  });

  it('returns the first position it was found at', function() {
    const foundAt = [0, 1, 1, 1].findIndex(item => item === 1);

    expect(foundAt).toEqual(FILL_ME_IN);
  });

  it('returns `-1` when nothing was found', function() {
    const foundAt = [1, 2, 3].findIndex(item => item > FILL_ME_IN);

    expect(foundAt).toEqual(-1);
  });

  it('the findIndex callback gets the item, index and array as arguments', function() {
    const foundAt = [1, 1, 2, 3, 3, 3].findIndex((element, index, items) => element === 3 && index > 3);

    expect(foundAt).toEqual(FILL_ME_IN);
  });

  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const foundAt = [bob, alice].findIndex(({name:{length}}) => length > 3);

    expect(foundAt).toEqual(FILL_ME_IN);
  });
});
