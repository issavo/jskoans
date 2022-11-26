// 77: Promise - chaining
// Follow the hints of the failure messages!

describe('chaining multiple promises can enhance readability', () => {

  describe('prerequisites for understanding', function() {

    it('reminder: the test passes when a fulfilled promise is returned', function(done) {
      const promise = Promise.resolve(FILL_ME_IN)

      promise
        .then(value => { expect(value).toEqual('I should fulfill'); done(); })
        .catch(e => fail());
    });

    it('a function given to `then()` fulfills (if it doesn\'t throw)', function() {
      const beNice = () => FILL_ME_IN;
      return Promise.resolve()
        .then(beNice)
        .then(niceMessage => expect(niceMessage).toEqual('I am nice'));
    });

  });

  describe('chain promises', function() {

    const removeMultipleSpaces = string => string.replace(/\s+/g, ' ');

    it('`then()` receives the result of the promise it was called on', function() {
      const wordsPromise = Promise.resolve('one   space     between each     word');
      return wordsPromise
        .then(string => CHANGE_ME(string))
        .then(actual => {expect(actual).toEqual('one space between each word')})
      ;
    });

    const appendPeriod = string => `${string}.`;

    it('multiple `then()`s can be chained', function() {
      const wordsPromise = Promise.resolve('Sentence without       an end');
      return wordsPromise
        .then(CHANGE_ME)
        .then(CHANGE_ME)
        .then(actual => {expect(actual).toEqual('Sentence without an end.')})
      ;
    });

    const trim = string => string.replace(/^\s+/, '').replace(/\s+$/, '');

    it('order of the `then()`s matters', function() {
      const wordsPromise = Promise.resolve('Sentence without       an end ');
      return wordsPromise
        // CHANGE THE ORDER
        .then(appendPeriod)
        .then(trim)
        .then(removeMultipleSpaces)

        .then(actual => {expect(actual).toEqual('Sentence without an end.')})
      ;
    });

    const asyncUpperCaseStart = (string, onDone) => {
      const format = () => onDone(string[0].toUpperCase() + string.substr(1));
      setTimeout(format, 100);
    };

    it('any of the things given to `then()` can resolve asynchronously (the real power of Promises)', function() {
      const wordsPromise = Promise.resolve('sentence without an end');

      return wordsPromise
        .then(string => new Promise(resolve => asyncUpperCaseStart(string, resolve)))
        .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
        .then(actual => {expect(actual).toEqual(FILL_ME_IN)})
      ;
    });

    it('also asynchronously, the order still matters, promises wait, but don`t block', function() {
      const wordsPromise = Promise.resolve('trailing space   ');
      return wordsPromise
        // CHANGE THE ORDER
        .then(string => new Promise(resolve => asyncUpperCaseStart(string, resolve)))
        .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
        .then(string => new Promise(resolve => setTimeout(() => resolve(trim(string)), 100)))

        .then(actual => {expect(actual).toEqual('Trailing space.')});
    });
  });
});
