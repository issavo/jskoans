// 29: array - `Array.from` static method
// Follow the hints of the failure messages!

describe('`Array.from` converts an array-like object or list into an Array', () => {

  const arrayLike = {0: 'one', 1: 'two', length: 2};

  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike);

    expect(arr).toEqual(FILL_ME_IN);
  });

  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    const classList = Array.from(domNode.classList);

    expect(''+classList).toEqual('' + FILL_ME_IN);
  });

  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.createElement('span');
    const divs = Array.from(nodeList).filter((node) => node.tagName === 'div');

    expect(divs.length).toEqual(FILL_ME_IN);
  });

  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());

      expect(arr).toEqual(FILL_ME_IN);
    });
  });
});
