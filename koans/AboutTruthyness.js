describe("About Truthyness", () => {

  it("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    expect(true).withContext('is one truthy?').toEqual(oneIsTruthy);
  });

  it("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    expect(true).withContext('is -1 truthy?').toEqual(negativeOneIsTruthy);
  });

  it("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    expect(false).withContext('is 0 truthy?').toEqual(zeroIsTruthy);
  });

  it("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    expect(false).withContext('is null truthy?').toEqual(nullIsTruthy);
  });
});
