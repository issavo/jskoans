// 18: rest - as-parameter

describe('Rest parameters in functions', () => {
  it('must be the last parameter', () => {
    const fn = (...rest) => {
      expect([1, 2]).toEqual(FILL_ME_IN);
    };

    fn(1, 2);
  });

  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, ...rest) => {
      expect([3,4]).toEqual(FILL_ME_IN);
    };

    fn(null, 2, 3, 4);
  });

  it('eliminate `arguments`!!!', () => {
    const fn = (firstArg, ...rest) => rest;
    const result = fn(1, 2, 3);
    expect(result).toEqual(FILL_ME_IN);
  });
});
