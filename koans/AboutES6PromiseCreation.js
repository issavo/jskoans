// 76: Promise - creation
// Follow the hints of the failure messages!

describe('a promise can be created in multiple ways', function() {

  describe('creating a promise fails when', function() {

    it('using `Promise` as a function', function() {
      function callPromiseAsFunction() {
        return FILL_ME_IN;
      }
      expect(callPromiseAsFunction).toThrowError();
    });

    it('no parameter is passed', function() {
      function promiseWithoutParams() {
        return FILL_ME_IN
      }
      expect(promiseWithoutParams).toThrowError();
    });

    it('passing a non-callable throws too', function() {
      const notAFunction = CHANGE_ME;
      expect(() => { new Promise(notAFunction) }).toThrowError();
    });

  });

  describe('most commonly Promises get created using the constructor', function() {

    it('by passing a resolve function to it', function() {
      const promise = new Promise((FILL_ME_IN) => resolve());
      return promise;
    });

    it('by passing a resolve and a reject function to it', function(done) {
      const promise = new Promise((resolve, reject) => FILL_ME_IN);

      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(done);
    });

  });

  describe('extending a `Promise`', function() {

    it('using `class X extends Promise{}` is possible', function() {
      class MyPromise extends Promise {}
      const promise = new MyPromise(resolve => FILL_ME_IN);

      promise
        .then(() => done())
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
      class ResolvingPromise extends Promise {
        constructor(resolve) { FILL_ME_IN }
      }

      return new ResolvingPromise(resolve => resolve());
    });

  });

  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {

    it('returns all results', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2))
      ]);

      promise
        .then(value => { expect(value).toEqual(FILL_ME_IN); done(); })
        .catch(e => done(new Error(e)));
    });

    it('is rejected if one rejects', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),
        FILL_ME_IN
      ]);

      promise
        .then(() => done(new Error()))
        .catch(() => done());
    });

  });

  describe('`Promise.race()` returns the first settled promise', function() {

    it('if it resolves first, the promises resolves', function(done) {
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
      const promise = Promise.race([lateRejectedPromise, FILL_ME_IN]);

      promise
        .then(value => { expect(value).toEqual('1st :)'); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
      const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
      const promise = Promise.race([FILL_ME_IN, lateResolvingPromise]);

      promise
        .then(() => done(new Error()))
        .catch(value => { expect(value).toEqual('I am a REJECTOR'); done(); })
        .catch(done);
    });
  });

  describe('`Promise.resolve()` returns a resolving promise', function() {

    it('if no value given, it resolves with `undefined`', function(done) {
      const promise = FILL_ME_IN;

      promise
        .then(value => { expect(value).toEqual(void 0); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('resolves with the given value', function(done) {
      const promise = Promise.resolve(FILL_ME_IN);

      promise
        .then(value => { expect(value).toEqual('quick resolve'); done(); })
        .catch(e => done(e));
    });

  });

  describe('`Promise.reject()` returns a rejecting promise', function() {

    it('if no value given, it rejects with `undefined`', function(done) {
      const promise = FILL_ME_IN;

      promise
        .then(() => done(new Error()))
        .catch(value => { expect(value).toEqual(void 0); done(); })
        .catch(done);
    });

    it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
      const promise = Promise.reject(FILL_ME_IN);

      promise
        .then(() => done(new Error()))
        .catch(value => { expect(value).toEqual('quick reject'); done(); })
        .catch(done);
    });
  });
});
