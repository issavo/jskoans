describe("About Numbers", () => {

  it("types", function() {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);

    expect(true).withContext('are ints and floats the same type?').toEqual(typeOfIntegers === typeOfFloats);
    expect('number').withContext('what is the javascript numeric type?').toEqual(typeOfIntegers);
    expect(1).withContext('what is a integer number equivalent to 1.0?').toEqual(1.0);
  });

  it("NaN", function() {
    var resultOfFailedOperations = 7/'apple';//return undefined
    expect(true).withContext('what will satisfy the equals assertion?').toEqual(isNaN(resultOfFailedOperations));//return true
    expect(false).withContext('is NaN == NaN?').toEqual(resultOfFailedOperations == NaN);//return false
  });
});
//typeof(7/'apple')
//return number