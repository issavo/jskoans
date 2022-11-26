// 66: object-literal - getter
// Follow the hints of the failure messages!

describe('An object literal can also contain getters', () => {
  it('just prefix the property with `get` (and make it a function)', () => {
    const obj = {
      get x() { return 'ax'; }
    };
    expect(obj.x).toEqual(FILL_ME_IN)
  });

  it('must have NO parameters', () => {
    const obj = {
      // Change this line to use a getter and fix the test
      x(param) { return 'ax'; }
    };
    expect(obj.x).toEqual('ax')
  });

  it('can be a computed property (an expression enclosed in `[]`)', () => {
    const keyName = 'x';
    const obj = {
      get [FILL_ME_IN]() { return 'ax'; }
    };
    expect(obj.x).toEqual('ax')
  });

  it('can be removed using delete', () => {
    const obj = {
      get x() { return 'ax'; }
    };
    delete obj.x;
    expect(obj.x).toEqual(FILL_ME_IN)
  });

  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/s/ =>get
  // It might be corrected later, new knowledge welcome.

  //it('must not overlap with a pure property', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; }
  //  };
  //
  //  assert.equal(obj.x, 'ax');
  //});
  //
  //it('multiple `get` for the same property are not allowed', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; },
  //    get x() { return 'ax1'; }
  //  };
  //
  //  assert.equal(obj.x, 'ax');
  //});
});
