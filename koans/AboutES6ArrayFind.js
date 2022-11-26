// 32: array - `Array.prototype.find`
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {

  it('takes a compare function', function() {
    const found = [true].find(item => item === FILL_ME_IN);

    expect(found).toEqual(true);
  });

  it('returns the first value found', function() {
    const found = [0, 1, 2].find(item => item > 1);

    expect(found).toEqual(FILL_ME_IN);
  });

  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === 4);

    expect(found).toEqual(FILL_ME_IN);
  });

  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name}) => name === FILL_ME_IN);

    expect(found).toEqual(alice);
  });
});
