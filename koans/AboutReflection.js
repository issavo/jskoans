describe("About Reflection", () => {

  function A() {
    this.aprop = "A";
  };

  function B() {
    this.bprop = "B";
  };

  it("typeof", function() {
    expect(FILL_ME_IN).withContext('what is the type of an empty object?').toEqual(typeof({}));
    expect(FILL_ME_IN).withContext('what is the type of a string?').toEqual(typeof('apple'));
    expect(FILL_ME_IN).withContext('what is the type of -5?').toEqual(typeof(-5));
    expect(FILL_ME_IN).withContext('what is the type of false?').toEqual(typeof(false));
  });

  it("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(var propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    expect(keys).withContext('what are the property names of the object?').toEqual(['FILL_ME_IN','FILL_ME_IN','FILL_ME_IN']);
    expect(values).withContext('what are the property values of the object?').toEqual(['FILL_ME_IN',FILL_ME_IN,FILL_ME_IN]);
  });

  it("hasOwnProperty", function() {
    var b = new B();
    var propertyName;

    var keys = [];
    for (propertyName in b) {
        keys.push(propertyName);
    }

    expect(FILL_ME_IN).withContext('how many elements are in the keys array?').toEqual(keys.length);
    expect([FILL_ME_IN, FILL_ME_IN]).withContext('what are the properties of the array?').toEqual(keys);
  });

  it("constructor property", function () {
    var a = new A();
    expect(FILL_ME_IN).withContext("what is the type of a's constructor?").toEqual(typeof(a.constructor));
    expect(FILL_ME_IN).withContext("what is the name of a's constructor?").toEqual(a.constructor.name);
  });

  it("eval", function() {
    // eval executes a string
    var result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

});
