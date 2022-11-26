// 9: object-literals - basics
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
  const x = 1;
  const y = 2;

  describe('with variables', () => {
    it('the short version for `{x: x}` is {x}', () => {
      const short = {FILL_ME_IN};
      expect(short).toEqual({x: 1});
    });

    it('works with multiple variables too', () => {
      const short = {FILL_ME_IN, FILL_ME_IN};
      expect(short).toEqual({x: 1, y: 2});
    });
  });

  describe('with methods', () => {
    const func = () => func;

    it('using the name only uses it as key', () => {
      const short = {FILL_ME_IN};
      expect(short).toEqual({func: func});
    });

    it('a different key must be given explicitly, just like before ES6', () => {
      const short = {FILL_ME_IN: func};
      expect(short).toEqual({otherKey: func});
    });

    it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      const short = {
        inlineFunc() { return 'I am inline' }
      };
      expect(short.inlineFunc()).toEqual(FILL_ME_IN);
    });
  });
});
