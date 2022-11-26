// 3: template strings - tagged
// Follow the hints of the failure messages!

describe('tagged template strings, are an advanced form of template strings', function() {

  it('syntax: prefix the template string with a function to call (without "()" around it)', function() {
    function tagFunction(s) {
      return s.toString();
    }

    var evaluated = CHANGE_ME`template string`;
    expect(evaluated).toEqual('template string');
  });

  describe('the function can access each part of the template', function() {

    describe('the 1st parameter - receives only the pure strings of the template string', function() {

      function tagFunction(strings) {
        return strings;
      }

      it('the strings are an array', function() {
        var result = FILL_ME_IN;

        expect(tagFunction`template string`).toEqual(result);
      });

      it('expressions are NOT passed to it', function() {
        var tagged = tagFunction`one${23}`;
        expect(tagged).toEqual(FILL_ME_IN);
      });

    });

    describe('the 2nd and following parameters - contain the values of the processed substitution', function() {

      var one = 1;
      var two = 2;
      var three = 3;

      it('the 2nd parameter contains the first expression`s value', function() {
        function firstValueOnly(strings, firstValue) {
          return firstValue;
        }
        expect(firstValueOnly`uno ${one}, dos ${two}`).toEqual(FILL_ME_IN);
      });

      it('the 3rd parameter contains the second expression`s value', function() {
        function firstValueOnly(strings, firstValue, secondValue) {
          return secondValue;
        }
        expect(firstValueOnly`uno ${one}, dos ${two}`).toEqual(FILL_ME_IN);
      });

      it('using ES6 rest syntax, all values can be accessed via one variable', function() {
        function valuesOnly(stringsArray, ...allValues) { // using the new ES6 rest syntax
          return FILL_ME_IN;
        }
        expect(valuesOnly`uno=${one}, dos=${two}, tres=${three}`).toEqual([1, 2, 3]);
      });
    });
  });
});

