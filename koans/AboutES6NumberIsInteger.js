// 55: Number - isInteger
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', () =>{
  it('`isInteger` is a static function on `Number`', () => {
    expect(typeof Number.isInteger).toEqual(FILL_ME_IN)
  });

  describe('zero in different ways', () => {
    it('0 is an integer', () => {
      const zero = 0;
      expect(Number.isInteger(zero)).toEqual(FILL_ME_IN)
    });

    it('0.000', () => {
      const veryZero = 0.00000;
      expect(Number.isInteger(veryZero)).toEqual(FILL_ME_IN)
    });

    it('the string "0" is NOT an integer', () => {
      const stringZero = '0';
      expect(Number.isInteger(stringZero)).toEqual(FILL_ME_IN)
    });
  });

  describe('one in different ways', () => {
    it('0.111 + 0.889', () => {
      const rest = 0.889;
      expect(Number.isInteger(0.111 + rest)).toEqual(FILL_ME_IN)
    });

    it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', () => {
      const oneOrNot = 0.5 + 0.2 + 0.2 + 0.1;
      expect(Number.isInteger(oneOrNot)).toEqual(FILL_ME_IN)
    });

    it('parseInt`ed "1" is an integer', () => {
      const convertedToInt = Number.parseInt('1.01');
      expect(Number.isInteger(convertedToInt)).toEqual(FILL_ME_IN)
    });
  });

  xdescribe('what is not an integer', () => {
    it('`Number()` is an integer', () => {
      const numberOne = Number();
      expect(Number.isInteger(numberOne)).toEqual(FILL_ME_IN)
    });

    it('`{}` is NOT an integer', () => {
      const isit = Number.isInteger({});
      expect(isit).toEqual(FILL_ME_IN)
    });

    it('`0.1` is not an integer', () => {
      const isit = Number.isInteger(0.1);
      expect(isit).toEqual(FILL_ME_IN)
    });

    it('`Number.Infinity` is not an integer', () => {
      const isit = Number.isInteger(Number.Infinity);
      expect(isit).toEqual(FILL_ME_IN)
    });

    it('`NaN` is not an integer', () => {
      const isit = Number.isInteger(NaN);
      expect(isit).toEqual(FILL_ME_IN)
    });
  });
});
