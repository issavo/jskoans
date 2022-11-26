// 79: Promise - catch
// Follow the hints of the failure messages!
// Here we use promises to trigger, don't modify the block with the
// returning promise!

describe('`catch()` returns a Promise and deals with rejected cases only', () => {

  describe('prerequisites for understanding', () => {
    it('*return* a fulfilled promise, to pass a test', () => {
      // USE THE RIGHT FUNCTION
      return Promise.reject();
    });

    it('reminder: the test passes when a fulfilled promise is returned', () => {
      // USE THE RIGHT FUNCTION
      return Promise.reject('I should fulfill.');
    });
  });

  describe('`catch` method basics', () => {
    it('is an instance method', () => {
      const p = new Promise(() => {});
      expect(typeof p.catch).toEqual(FILL_ME_IN);
    });

    it('catches only promise rejections', (done) => {
      // USE THE RIGHT FUNCTION
      const promise = Promise.resolve();
      promise
        .then(() => {
            fail('Should not be called!')
            done()
        })
        .catch(done());
    });

    it('returns a new promise', () => {
      // USE THE RIGHT FUNCTION
      const whatToReturn = () => Promise.reject();

      const promise = Promise.reject();
      return promise.catch(() =>
        whatToReturn()
      );
    });

    it('converts it`s return value into a promise', () => {
      const p = Promise.reject();
      const p1 = p.catch(() => FILL_ME_IN);

      return p1.then(result => expect('promise?').toEqual(result));
    });

    it('the first parameter is the rejection reason', () => {
      const p = Promise.reject(FILL_ME_IN);

      return p.catch(reason => {
        expect(reason).toEqual('oops');
      });
    });
  });

  describe('multiple `catch`es', () => {
    it('only the first `catch` is called', () => {
      const p = Promise.reject('1');
      const p1 = p
          .catch(reason => `${reason} AND 2`)
          .catch(reason => `${reason} AND 3`)
        ;

      return p1.then(result =>
        expect(result).toEqual(FILL_ME_IN)
      );
    });

    it('if a `catch` throws, the next `catch` catches it', () => {
      const p = Promise.reject('1');
      const p1 = p
          .catch(reason => { throw Error(`${reason} AND 2`) })
          .catch(err => { return `${err.message} AND 3` })
          .catch(err => `${err} but NOT THIS`)
        ;

      return p1.then(result =>
        expect(result).toEqual(FILL_ME_IN)
      );
    });
  });
});
