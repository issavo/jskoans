// 50:
// Follow the hints of the failure messages!

describe('Generators returns an iterable object', () => {
  function* generatorFunction(){
    yield 1;
    yield 2;
  }
  let generator;

  beforeEach(() => {
    generator = generatorFunction();
  });

  it('a generator returns an object', () => {
    const typeOfTheGenerator = FILL_ME_IN;
    expect(typeof generator).toEqual(typeOfTheGenerator)
  });

  it('a generator object has a key `Symbol.iterator`', () => {
    const key = FILL_ME_IN;
    expect(key in generator).toEqual(true)
  });

  it('can be looped with `for-of`, which expects an iterable', () => {
    function iterateForOf(){
      for (let value of generatorFunction()) {
        expect([1,2]).toContain(FILL_ME_IN)
      }
    }
    iterateForOf()
  });
});
