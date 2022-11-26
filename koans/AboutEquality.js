describe("About Equality", () => {

  it("numeric equality", function() {
    expect(3 + 4).toEqual(7);
  });

  it("string equality", function() {
    expect("3" + "7").withContext("concatenate the strings").toEqual("37");
  });

  it("equality without type coercion", function() {
    expect(3 === 3).withContext('what is exactly equal to 3?').toBeTruthy();
  });

  it("equality with type coercion", function() {
    expect(3 == '3').withContext('what string is equal to 3, with type coercion?').toBeTruthy();
  });

  it("string literals", function() {
    expect("frankenstein").withContext("quote types are interchangable, but must match.").toEqual("frankenstein");
    expect('frankenstein').withContext("quote types can use both single and double quotes.").toEqual('frankenstein');
  });
});
