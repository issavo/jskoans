// 23: class - accessors
// Follow the hints of the failure messages!

describe('Class accessors (getter and setter)', () => {
  it('a getter is defined like a method prefixed with `get`', () => {
    class MyAccount {
      get money() { return Infinity; }
    }

    expect(new MyAccount().money).toEqual(FILL_ME_IN);
  });

  it('a setter has the prefix `set`', () => {
    class MyAccount {
      get balance() { return this.amount; }
      set balance(amount) { this.amount = amount; }
    }

    const account = new MyAccount();
    account.balance = 42;
    expect(account.balance).toEqual(FILL_ME_IN);
  });

  describe('dynamic accessors', () => {
    it('a dynamic getter name is enclosed in `[]`', function() {
      const balance = FILL_ME_IN;
      class YourAccount {
        get [balance]() { return -Infinity; }
      }
      expect(new YourAccount().yourMoney).toEqual(-Infinity);
    });

    it('a dynamic setter name as well', function() {
      const propertyName = FILL_ME_IN;
      class MyAccount {
        get [propertyName]() { return this.amount; }
        set [propertyName](amount) { this.amount = 23; }
      }

      const account = new MyAccount();
      account.balance = 42;
      expect(account.balance).toEqual(23);
    });
  });
});
