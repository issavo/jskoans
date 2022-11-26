// 56:
// Follow the hints of the failure messages!

describe('Pass a function to a generator', () => {
  it('the generator can receive a function as a value', () => {
    let fn = function() {};
    function* generatorFunction(fn) {
      const item = yield 1
      return item
    }
    let iterator = generatorFunction();
    iterator.next();
    expect(iterator.next(fn).value).toEqual(FILL_ME_IN);
  });

  it('pass a function to the iterator, which calls it', function() {
    function* generatorFunction() {
      yield (yield 1)();
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(() => 2).value];
    expect(iteratedOver).toEqual(FILL_ME_IN)
  });

  it('nesting yielded function calls', () => {
    function* generatorFunction() {
      yield (yield (yield 1)())();
    }

    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(() => 2).value, iterator.next(() => 3).value];
    expect(iteratedOver).toEqual(FILL_ME_IN)
  });
});
