// 22: class - creation
// Follow the hints of the failure messages!

describe('Class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    const instance = new TestClass();
    expect(typeof instance).toEqual(FILL_ME_IN);
  });

  it('a class is block scoped', () => {
    class Outside {}
    {class Inside {}}
    expect(typeof FILL_ME_IN).toEqual('undefined');
  });

  it('the `constructor` is a special method', function() {
    class User {
      constructor(id) { this.id = id }
    }
    const user = new User(42);
    expect(user.id).toEqual(FILL_ME_IN);
  });

  it('defining a method by writing it inside the class body', function() {
    class User {
        writesTests() {
            return true
        }
    }
    const notATester = new User();
    expect(notATester.writesTests()).toEqual(FILL_ME_IN);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      constructor() { this.everWroteATest = FILL_ME_IN }

      wroteATest() { this.everWroteATest = FILL_ME_IN; }

      isLazy() { return this.everWroteATest }
    }

    const tester = new User();
    expect(tester.isLazy()).toEqual(true);
    tester.wroteATest();
    expect(tester.isLazy()).toEqual(false);
  });

  it('anonymous class', () => {
    const classType = typeof {};

    expect(classType).toEqual(FILL_ME_IN);
  });
});
