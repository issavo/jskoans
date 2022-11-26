// 27: class - super inside a method
// Follow the hints of the failure messages!

describe('Inside a class use `super` to access parent methods', () => {
  it('use of `super` without `extends` fails (already when transpiling)', () => {
    class A {hasSuper() { return CHANGE_ME(); }}
    expect(new A().hasSuper()).toEqual(false);
  });

  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return super.hasSuper(); }}
    expect(new B().hasSuper()).toEqual(FILL_ME_IN);
  });

  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return 'nothing'; }}
    expect(new B().hasSuper()).toEqual(FILL_ME_IN);
  });

  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return true; }}
    class B extends A {}
    class C extends B {iAmSuper() { return super.iAmSuper(); }}
    expect(new C().iAmSuper()).toEqual(FILL_ME_IN);
  });

  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    class B extends A {getMethod() { return CHANGE_ME(); }}
    expect(new B().getMethod()).toEqual(void 0);
  });
});
