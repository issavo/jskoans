// 7: block scope - let
// Follow the hints of the failure messages!

describe('`let` restricts the scope of the variable to the current block', () => {
  describe('`let` vs. `var`', () => {
    it('`var` works as usual, it`s scope is the function', () => {
      if (true) {
        var varX = FILL_ME_IN;
      }
      expect(varX).toEqual(true);
    });

    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true;
      }
      expect(() => console.log(FILL_ME_IN)).toThrowError()
    });
  });

  describe('`let` usage', () => {
    it('`let` use in `for` loops', () => {
      for (let key in {x: 1}) {}

      expect(() => console.log(FILL_ME_IN)).toThrowError()
    });

    it('create artifical scope, using curly braces', () => {
      {
        let letX = true;
      }
      expect(() => console.log(FILL_ME_IN)).toThrowError()
    });
  });
});
