describe("About Reflection", () => {

  function A() {
    this.aprop = "A";
  };

  function B() {
    this.bprop = "B";
  };

  it("typeof", function() {
    expect('object').withContext('what is the type of an empty object?').toEqual(typeof({}));
    expect('string').withContext('what is the type of a string?').toEqual(typeof('apple'));
    expect('number').withContext('what is the type of -5?').toEqual(typeof(-5));
    expect('boolean').withContext('what is the type of false?').toEqual(typeof(false));
  });

  it("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(var propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    expect(keys).withContext('what are the property names of the object?').toEqual(['name','age','unemployed']);
    expect(values).withContext('what are the property values of the object?').toEqual(['Amory Blaine',102,true]);
  });

  it("hasOwnProperty", function() {
    var b = new B();
    var propertyName;

    var keys = [];
    for (propertyName in b) {
        keys.push(propertyName);
    }

    expect(1).withContext('how many elements are in the keys array?').toEqual(keys.length);
    expect(['bprop']).withContext('what are the properties of the array?').toEqual(keys);
  });

  it("constructor property", function () {
    var a = new A();
    expect('function').withContext("what is the type of a's constructor?").toEqual(typeof(a.constructor));
    expect('A').withContext("what is the name of a's constructor?").toEqual(a.constructor.name);
  });

  it("eval", function() {
    // eval executes a string
    var result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    expect('apple pie').withContext('what is the value of result?').toEqual(result);
  });

});
