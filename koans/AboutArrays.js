describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    const emptyArray = [];
    expect(emptyArray.length).toEqual(0);

    const multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toEqual(0);
    expect(multiTypeArray[2]).toEqual("two");
    expect(multiTypeArray[3]()).toEqual(3);
    expect(multiTypeArray[4].value1).toEqual(4);
    expect(multiTypeArray[4]["value2"]).toEqual(5);
    expect(multiTypeArray[5][0]).toEqual(6);
  });

  it("array type", function() {
    expect(typeof([])).withContext("What is the type of an array?").toEqual('object');
  });

  it("should understand array literals", function () {
    const array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1,2,3]);
  });

  it("should understand array length", function () {
    const fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toEqual(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toEqual(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toEqual(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toEqual(5);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(['peanut']);
    expect(array.slice(0, 2)).toEqual(['peanut', 'butter']);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(['and', 'jelly']);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(['jelly']);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toEqual("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toEqual("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toEqual('three');
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    expect(poppedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});
