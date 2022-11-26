// 52: Generator - Send value to a generator
// Follow the hints of the failure messages!

describe('Pass a value to a generator', () => {
  it('basics: get the values from a generator in two ways', () => {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }

    // way #1
    var convertedToAnArray = Array.from(generatorFunction());

    // way #2
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next().value];

    expect(convertedToAnArray).toEqual(FILL_ME_IN)
  });

  it('pass a value to the iterator', () => {
    function* generatorFunction() {
      const param = yield 1;
      return param;
    }

    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(FILL_ME_IN).value];

    expect(iteratedOver).toEqual([1, 4])
  });

  it('a value passed to the 1st `next()` call is ignored', () => {
    function* generatorFunction() {
      const param = yield 1;
      return param

    }
    let iterator = generatorFunction();
    const values = [
      iterator.next('irrelevant').value,
      iterator.next(2).value
    ];
    expect(values).toEqual(FILL_ME_IN)
  });
});
