
describe("About Regular Expressions", () => {
    it("exec", () => {
        var numberFinder = /(\d).*(\d)/;
        var results = numberFinder.exec("what if 6 turned out to be 9?");
        expect(results[0]).withContext('what is the value of results?').toEqual(FILL_ME_IN);
        expect(results[1]).withContext('what is the value of results?').toEqual(FILL_ME_IN);
        expect(results[2]).withContext('what is the value of results?').toEqual(FILL_ME_IN);
    });

    it("test", () => {
        var containsSelect = /select/.test("  select * from users ");
        expect(containsSelect).withContext('does the string provided contain "select"?').toEqual(FILL_ME_IN);
    });

    it("match", () => {
        var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
        expect(matches).withContext('what is the value of matches?').toEqual([FILL_ME_IN, FILL_ME_IN]);
    });

    it("replace", () => {
        var pie = "apple pie".replace("apple", "strawberry");
        expect(pie).withContext('what is the value of pie?').toEqual(FILL_ME_IN);

        pie = "what if 6 turned out to be 9?".replace(/\d/g, function(number) { // the second parameter can be a string or a function
            var map = {'6': 'six','9': 'nine'};
            return map[number];
        });
        expect(pie).withContext('what is the value of pie?').toEqual(FILL_ME_IN);
    });
});

