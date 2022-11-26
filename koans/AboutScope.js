describe("About Scope", () => {
    var thisIsAGlobalVariable = 77;

    it("global variables", () => {
        expect(thisIsAGlobalVariable).withContext('is thisIsAGlobalVariable defined in this scope?').toEqual(FILL_ME_IN);
    });

    it("variables declared inside of a function", () => {
        var outerVariable = "outer";

        // this is a self-invoking function. Notice that it calls itself at the end ().
        (() => {
            var innerVariable = "inner";
            expect(outerVariable).withContext('is outerVariable defined in this scope?').toEqual(FILL_ME_IN);
            expect(innerVariable).withContext('is innerVariable defined in this scope?').toEqual(FILL_ME_IN);
        })();

        expect(outerVariable).withContext('is outerVariable defined in this scope?').toEqual(FILL_ME_IN);
        expect(typeof(innerVariable)).withContext('is innerVariable defined in this scope?').toEqual(FILL_ME_IN);
    });
});


