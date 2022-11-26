// 28: class - super in constructor
// Follow the hints of the failure messages!

describe('Inside a class`s constructor `super()` can be used', () => {
  it('`extend` a class and use `super()` to call the parent constructor', () => {
    class A {constructor() { this.levels = 1; }}
    class B extends A {
      constructor() {
        super()
        this.levels++;
      }
    }
    expect(new B().levels).toEqual(FILL_ME_IN);
  });

  it('`super()` may also take params', () => {
    class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
    class B extends A {
      constructor(startValue, addTo) {
        super(startValue, addTo);
        this.counter++;
      }
    }
    expect(new B(42, 2).counter).toEqual(FILL_ME_IN);
  });

  it('it is important where you place your `super()` call!', () => {
    class A {inc() { this.countUp = 1; }}
    class B extends A {
      inc() {
        this.countUp = 2;
        super.inc();

        return this.countUp;
      }
    }
    expect(new B().inc()).toEqual(FILL_ME_IN);
  });

  it('use `super.constructor` to find out if there is a parent constructor', () => {
    class A {constructor() {"parent"}}
    class B extends A {
      constructor() {
        super();
        this.isTop = '' + FILL_ME_IN;
      }
    }
    // expect(new B().isTop, 'class A {constructor() {"parent"}}');
    const expect = 'class A {\n      constructor() {\n        "parent";\n      }\n\n    }';
    expect(new B().isTop).toEqual(expect);
  });
});
