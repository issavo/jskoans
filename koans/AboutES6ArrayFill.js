// 31: array - `Array.prototype.fill` method
// Follow the hints of the failure messages!

describe('`Array.prototype.fill` can fill up an array with one value', () => {

  it('`fill(0)` will populate `0` into each array element', function() {
    const arr = new Array(3).fill(0);

    expect(arr).toEqual(FILL_ME_IN);
  });

  it('fill only changes content, adds no new elements', function() {
    const arr = [].fill(0);

    expect(arr).toEqual(FILL_ME_IN);
  });

  it('second parameter to `fill()` is the position where to start filling', function() {
    const fillStartAt = FILL_ME_IN;
    const arr = [1,2,3].fill(42, fillStartAt);

    expect(arr).toEqual([1, 2, 42]);
  });

  it('third parameter is the position where filling stops', function() {
    const fillStartAt = 1;
    const fillEndAt = FILL_ME_IN;
    const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);

    expect(arr).toEqual([1, 42, 3]);
  });
});
