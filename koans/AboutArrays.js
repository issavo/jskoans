describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    const emptyArray = [];
    expect(emptyArray.length).toEqual(FILL_ME_IN);

    const multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toEqual(FILL_ME_IN);
    expect(multiTypeArray[2]).toEqual(FILL_ME_IN);
    expect(multiTypeArray[3]()).toEqual(FILL_ME_IN);
    expect(multiTypeArray[4].value1).toEqual(FILL_ME_IN);
    expect(multiTypeArray[4]["value2"]).toEqual(FILL_ME_IN);
    expect(multiTypeArray[5][0]).toEqual(FILL_ME_IN);
  });

  it("array type", function() {
    expect(typeof([])).withContext("What is the type of an array?").toEqual(FILL_ME_IN);
  });

  it("should understand array literals", function () {
    const array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, FILL_ME_IN]);

    array.push(3);
    expect(array).toEqual(FILL_ME_IN);
  });

  it("should understand array length", function () {
    const fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toEqual(FILL_ME_IN);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toEqual(FILL_ME_IN);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toEqual(FILL_ME_IN);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toEqual(FILL_ME_IN);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(FILL_ME_IN);
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN);
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toEqual(FILL_ME_IN);

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toEqual(FILL_ME_IN);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toEqual(FILL_ME_IN);
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual(FILL_ME_IN);

    var poppedValue = array.pop();
    expect(poppedValue).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual(FILL_ME_IN);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });
});
