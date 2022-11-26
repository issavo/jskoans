describe("About Strings", () => {

  it("delimiters", function() {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    expect(true).withContext('are the two strings equal?').toEqual(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", function() {
    var fruit = "apple";
    var dish = "pie";
    expect("apple pie").withContext('what is the value of fruit + " " + dish?').toEqual(fruit + " " + dish);
  });

  it("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    expect('string').withContext('Javascript has no character type').toEqual(characterType);
  });

  it("escape character", function() {
    var stringWithAnEscapedCharacter = "\u0041pple";//\u0041 =>A (Unicode)
    expect("Apple")
      .withContext("what  is the value of stringWithAnEscapedCharacter?")
      .toEqual(stringWithAnEscapedCharacter);
  });
});
