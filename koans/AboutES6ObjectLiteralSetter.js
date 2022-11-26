// 67: object-literal - setter
// Follow the hints of the failure messages!

describe('An object literal can also contain setters', () => {
  describe('defining: a setter', () => {
    it('by prefixing the property with `set` (and make it a function)', () => {
      let theX = null;
      const obj = {
        set x(newX) { theX = newX; }
      };
      obj.x = FILL_ME_IN;
      expect(theX).toEqual('the new X')
    });

    it('must have exactly one parameter', () => {
      let setterCalledWith = void 0;
      const obj = {
        // Change this line to make it a setter
        x() {
            setterCalledWith = data
        }
      };
      obj.x = 'new value'
      expect(setterCalledWith).toEqual('new value')
    });

    it('can be a computed property (an expression enclosed in `[]`)', () => {
      const publicPropertyName = 'x';
      const obj = {
        set [publicPropertyName](data) { this._x = data }
      };
      obj.x = 'axe';
      expect(obj._x).toEqual(FILL_ME_IN)
    });
  });

  describe('working with/on the setter', () => {
    it('you can use `delete` to remove the property (including it`s setter)', () => {
      let setterCalled = false;
      const obj = {
        set x(param) { setterCalled = true; }
      };
      // delete the property x here, to make the test pass

      obj.x = true;
      expect(setterCalled).toEqual(false)
    });
  });

  // TODO
  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
  // It might be corrected later, new knowledge welcome.
  // it('must not overlap with a pure property', function() {
  //   const obj = {
  //     x: 1,
  //     set x(val) { return 'ax'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
  // it('multiple `set` for the same property are not allowed', function() {
  //   const obj = {
  //     x: 1,
  //     set x(v) { return 'ax'; },
  //     set x(v) { return 'ax1'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
});
