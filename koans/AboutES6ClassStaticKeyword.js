// 24: class - static keyword
// Follow the hints of the failure messages!

describe('Inside a class you can use the `static` keyword', () => {
  describe('for methods', () => {
    class UnitTest {}

    it('a static method just has the prefix `static`', () => {
      class TestFactory {
        static CHANGE_ME() { return new UnitTest(); }
      }
      expect(TestFactory.makeTest() instanceof UnitTest).toBeTruthy();
    });

    it('the method name can be dynamic/computed at runtime', () => {
      const methodName = FILL_ME_IN;
      class TestFactory {
        static [methodName]() { return new UnitTest(); }
      }
      expect(TestFactory.createTest() instanceof UnitTest).toBeTruthy();
    });
  });

  describe('for accessors', () => {
    it('a getter name can be static, just prefix it with `static`', () => {
      class UnitTest {
        static get testType() { return 'unit'; }
      }
      expect(UnitTest.testType).toEqual(FILL_ME_IN);
    });

    it('even a static getter name can be dynamic/computed at runtime', () => {
      const type = FILL_ME_IN;
      class IntegrationTest {
        static get [type]() { return 'integration'; }
      }

      expect('testType' in IntegrationTest).toBeTruthy();
      expect(IntegrationTest.testType).toEqual('integration');
    });
  });
});
