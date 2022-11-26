// 12: destructuring - object
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    const { FILL_ME_IN } = {x: 1};
    expect(x).toEqual(1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const FILL_ME_IN = {first: 23, second: 42};
      expect(FILL_ME_IN).toEqual(42);
    });

    it('object and array', () => {
      const {z:[x]} = {z: [42]};
      expect(FILL_ME_IN).toEqual(42);
    });

    it('array and object', () => {
      const [,[{FILL_ME_IN}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      expect(FILL_ME_IN).toEqual('ES6');
    });
  });

  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1};
      expect(FILL_ME_IN).toEqual(void 0);
    });

    it('destructure from builtins (string)', () => {
      const {substr} = '';
      expect(FILL_ME_IN).toEqual(String.prototype.substr);
    });
  });
});
