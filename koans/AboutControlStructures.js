describe("About Control Structures", () => {

  it("if", function() {
    var isPositive = false;
    if (2 > 0) {
        isPositive = true;
    }
    expect(FILL_ME_IN).withContext('what is the value of isPositive?').toEqual(isPositive);
  });

  it("for", function() {
    var counter = 10;
    for (var i = 1; i <= 3; i++) {
        counter = counter + i;
    }
    expect(FILL_ME_IN).withContext('what is the value of counter?').toEqual(counter);
  });

  it("for in", function() {
    var person = [ "Amory Blaine", 102 ];
    var result = '';
    // for in loops through the keys of an iterable.
    for (var property_name in person) {
        result += property_name;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("for of", function() {
    const items = [ 3, 102 ];
    var result = 0;
    // for of loops through the values of an iterable
    for (var value of items) {
        result = result + value;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("ternary operator", function() {
    var fruit = true ? "apple" : "orange";
    expect(FILL_ME_IN).withContext('what is the value of fruit?').toEqual(fruit);

    fruit = false ? "apple" : "orange";
    expect(FILL_ME_IN).withContext('now what is the value of fruit?').toEqual(fruit);
  });

  it("switch", function() {
    var result = 0;
    switch (2) {
        case 1:
            result = 1;
            break;
        case 1+1:
            result = 2;
            break;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

  it("null coalescing", function() {
    var result = null || "a value";
    expect(FILL_ME_IN).withContext('what is the value of result?').toEqual(result);
  });

});
