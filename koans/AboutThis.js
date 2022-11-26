describe("About this", () => {
    it("'this' inside a method", () => {
        var person = {
            name: 'bob',
            intro: function() {
                return "Hello, my name is " + this.__;
            }
        }
        expect(person.intro()).withContext("If an object has a method can you access properties inside it?").toEqual("Hello, my name is bob");
    });

    it("'this' on unattached function", () => {
        var person = {
            globalName: 'bob',
            intro: function() {
                return "Hello, my name is " + this.globalName;
            }
        }

        var alias = person.intro;

        // if the function is not called as an object property 'this' is the global context
        // (window in a browser). This is an example. Please do not do this in practise.
        window.FILL_ME_IN = 'Peter';
        expect(alias()).withContext("What does 'this' refer to when it is not part of an object?").toEqual("Hello, my name is Peter");
    });

    it("'this' set explicitly", () => {
        var person = {
            name: 'bob',
            intro: function() {
                return "Hello, my name is " + this.name;
            }
        }

        // calling a function with 'call' lets us assign 'this' explicitly
        var message = person.intro.call({FILL_ME_IN: "Frank"});
        expect(message).withContext("What does 'this' refer to when you use the 'call()' method?").toEqual( "Hello, my name is Frank");
    });
    // extra credit: underscore.js has a 'bind' function http://documentcloud.github.com/underscore/#bind
    // read the source and see how it is implemented
});


