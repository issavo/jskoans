// 54: Object - is
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', () =>{
  describe('scalar values', () => {
    it('1 is the same as 1', () => {
      const areSame = Object.is(1, 1);
      expect(areSame).toEqual(FILL_ME_IN);
    });

    it('int 1 is different to string "1"', () => {
      const areSame = Object.is(1, '1');
      expect(areSame).toEqual(FILL_ME_IN);
    });

    it('strings just have to match', () => {
      const areSame = Object.is('one', 'one');

      expect(areSame).toEqual(FILL_ME_IN);
    });

    it('+0 is not the same as -0', () => {
      expect(Object.is(+0, -0)).toEqual(FILL_ME_IN);
    });

    it('NaN is the same as NaN', () => {
      expect(Object.is(NaN, FILL_ME_IN)).toEqual(true);
    });
  });

  describe('coercion, as in `==` and `===`, does NOT apply', () => {
    it('+0 != -0', () => {
      const coerced = +0 === -0;

      expect(coerced).toEqual(FILL_ME_IN);
    });

    it('empty string and `false` are not the same', () => {
      const emptyString = '';
      const isSame = Object.is(emptyString, false);
      expect(isSame).toEqual(FILL_ME_IN);
    });

    it('NaN', () => {
      const coerced = NaN == NaN;
      expect(coerced).toEqual(FILL_ME_IN);
    });

    it('NaN 0/0', () => {
      const isSame = Object.is(NaN, 0/0);
      expect(isSame).toEqual(FILL_ME_IN);
    });
  });

  describe('complex values', () => {
    it('`{}` is just not the same as `{}`', () => {
      expect(Object.is({}, {})).toEqual(FILL_ME_IN);
    });
  });
});
