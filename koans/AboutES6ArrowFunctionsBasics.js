// 5: arrow functions - basics
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    var func = () => {};
    expect('' + func).toEqual(FILL_ME_IN);
  });

  it('instead `{}` use an expression, as return value', function() {
    var func = () => FILL_ME_IN;
    expect(func()).toEqual('I return too');
  });

  it('one parameter can be written without parens', () => {
    var func = parameter => FILL_ME_IN - 1;
    expect(func(25)).toEqual(24);
  });

  it('many params require parens', () => {
    var func = (param, param1) => param + param1;
    expect(func(23, 42)).toEqual(FILL_ME_IN);
  });

  it('the function body needs parens to return an object', () => {
    var func = () => FILL_ME_IN;
    expect(func()).toEqual({iAm: 'an object'});
  });
});
