describe("About Numbers", () => {

  it("types", function() {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);

    expect(FILL_ME_IN).withContext('are ints and floats the same type?').toEqual(typeOfIntegers === typeOfFloats);
    expect(FILL_ME_IN).withContext('what is the javascript numeric type?').toEqual(typeOfIntegers);
    expect(FILL_ME_IN).withContext('what is a integer number equivalent to 1.0?').toEqual(1.0);
  });

  it("NaN", function() {
    var resultOfFailedOperations = 7/'apple';
    expect(FILL_ME_IN).withContext('what will satisfy the equals assertion?').toEqual(isNaN(resultOfFailedOperations));
    expect(FILL_ME_IN).withContext('is NaN == NaN?').toEqual(resultOfFailedOperations == NaN);
  });
});
