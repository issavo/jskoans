// 57: Default parameters - basics
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
  it('define it using an assignment to the parameter `function(param=1){}`', () => {
    let number = (int = 0) => int;
    expect(number()).toEqual(FILL_ME_IN)
  });

  it('it is used when `undefined` is passed', () => {
    let number = (int = 23) => int;
    const param = undefined;
    expect(number(param)).toEqual(23)
  });

  it('it is not used when a value is given', () => {
    let number = (int = 0) => int;
    expect(number(42)).toEqual(FILL_ME_IN)
  });

  it('it is evaluated at run time', () => {
    let defaultValue = 42;
    function xhr(method = `value: ${defaultValue}`) {
      return method;
    }
    expect(xhr()).toEqual(FILL_ME_IN)
  });

  it('it can also be a function', () => {
    const defaultValue = () => 0;
    function fn(value = defaultValue()) {
      return value;
    }
    expect(fn()).toEqual(FILL_ME_IN)
  });
});
