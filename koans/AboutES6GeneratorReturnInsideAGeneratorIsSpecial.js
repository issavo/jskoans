// 73: Generator - `return` inside a generator is special
// Follow the hints of the failure messages!

describe('`return` in a generator function is special', () => {
  describe('the returned value is an IteratorResult (just like any value returned via `yield`)', () => {
    it('returns an IteratorResult (an object with the properties `value` and `done`)', () => {
      function* generatorFunction() { return 1; }
      const returned = generatorFunction().next();
      const propertyNames = [FILL_ME_IN];
      expect(Object.keys(returned)).toEqual(propertyNames)
    });

    it('the property `value` is the returned value', () => {
      function* generatorFunction() { return FILL_ME_IN; }
      const {value} = generatorFunction().next();
      expect(value).toEqual(23)
    });

    it('the property `done` is true', () => {
      function* generatorFunction() { return 42; }
      const {done} = generatorFunction().next();
      expect(done).toEqual(FILL_ME_IN)
    });

    it('NOTE: `yield` does not return `done=true` but `done=false`!', () => {
      function* generatorFunction() { yield 1; }
      const returned = generatorFunction().next();
      expect(returned).toEqual({value: 1, done: FILL_ME_IN})
    });

    it('a missing `return` returns `{value: undefined, done: true}`', () => {
      function* generatorFunction() {  }
      const returned = generatorFunction().next();
      expect(returned).toEqual({value: void 0, done: FILL_ME_IN})
    });
  });

  describe('mixing `return` and `yield`', () => {
    function* generatorFunctionWithYieldAndReturn() {
      yield 1;
      return 2
    }

    it('is possible', () => {
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = [
        iterator.next(),
        iterator.next()
      ];
      expect(values).toEqual([{value: 1, done: false}, FILL_ME_IN])
    });

    it('the mix behaves different to two `yield`s', () => {
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = FILL_ME_IN;
      expect(Array.from(iterator)).toEqual(values)
    });

    it('two `yield`s returning values', () => {
      function* generatorFunctionWithTwoYields() {
        yield 1;
        yield 2;
      }
      expect(Array.from(generatorFunctionWithTwoYields())).toEqual(FILL_ME_IN)
    });

    it('return a yielded value by "chaining" `return` and `yield`', () => {
      function* generatorFunction() {
        const item = yield 1
        return item;
      }
      const iterator = generatorFunction();
      const values = [
        iterator.next().value,
        iterator.next(2).value
      ];
      expect(values).toEqual(FILL_ME_IN)
    });
  });
});
