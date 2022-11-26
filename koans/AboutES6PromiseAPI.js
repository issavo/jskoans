// 78: Promise - API overview
// Follow the hints of the failure messages!

describe('`Promise` API overview', function() {

  it('`new Promise()` requires a function as param', () => {
    const param = FILL_ME_IN;
    expect(() => { new Promise(param) }).not.toThrowError();
  });

  describe('resolving a promise', () => {
    // reminder: the test passes when a fulfilled promise is returned
    it('via constructor parameter `new Promise((resolve) => { resolve(); })`', () => {
      const param = (FILL_ME_IN) => { expect().nothing(); resolve(); };
      return new Promise(param);
    });

    it('using `Promise.resolve()`', () => {
      // USE THE RIGHT FUNCTION
      return Promise.reject('all fine');
    });
  });

  describe('a rejected promise', () => {
    it('using the constructor parameter', (done) => {
      const promise = new Promise((resolve, reject) => { CHANGE_ME() });

      promise
        .then(() => done(fail()))
        .catch(() => done());
    });

    it('via `Promise.reject()`', (done) => {
      const promise = CHANGE_ME();
      promise
        .then(() => done(fail()))
        .catch(() => done());
    });
  });

  const resolvingPromise = Promise.resolve();
  const rejectingPromise = Promise.reject();

  describe('`Promise.all()`', () => {
    it('`Promise.all([p1, p2])` resolves when all promises resolve', () => {
      // CHANGE ARRAY TO PASS THE TEST
      const promises = [resolvingPromise, rejectingPromise, resolvingPromise]
      return Promise.all(promises)
    });

    it('`Promise.all([p1, p2])` rejects when a promise is rejected', (done) => {
      // CHANGE ARRAY TO PASS THE TEST
      const promises = [resolvingPromise, resolvingPromise]
      return Promise.all(promises)
        .then(() => done(fail()))
        .catch(() => done())
    });
  });

  describe('`Promise.race()`', () => {
    it('`Promise.race([p1, p2])` resolves when one of the promises resolves', () => {
      // CHANGE ARRAY TO PASS THE TEST
      const promises = [rejectingPromise]

      return Promise.race(promises)
    });

    it('`Promise.race([p1, p2])` rejects when one of the promises rejects', (done) => {
      // CHANGE ARRAY TO PASS THE TEST
      const promises = [resolvingPromise]

      Promise.race(promises)
        .then(() => done(fail()))
        .catch(() => done())
    });

    it('`Promise.race([p1, p2])` order matters (and timing)', () => {
      // CHANGE ARRAY TO PASS THE TEST
      const promises = [rejectingPromise, resolvingPromise]

      return Promise.race(promises)
    });
  });
});
