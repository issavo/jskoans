// 61: modules - import

//*******************************************//
// import lines go on the top of the file.   //
//*******************************************//
//
// Due to how this koans are built, the imports will not work here.
// But this is more or less how it will work:

describe('use `import` to import functions that have been exported (somewhere else)', () => {
  describe('the import statement', () => {
    it('is only allowed on the root level', () => {
      // Imports go on the top of the file, if you import here, it will break.
      // import expect from 'expect';
    });

    it('import an entire module using `import <name> from "<moduleName>"`', () => {
      // You can find a sample library in `lib/sample.js`
      // You could import all of it like this:
      // import sample from 'lib/sample'
    });
  });

  describe('import members', () => {
    it('import a single member, using `import {<memberName>} from "module"`', () => {
      // When you want to import only part of the functionality, you can do it like this:
      // import { singleFunction } from 'lib/sample'
    });

    it('separate multiple members with a comma', () => {
      // When you want to import multiple functions at the same time, you can do it like this:
      // import { singleFunction, anotherFunction } from 'lib/sample'
    });
  });

  describe('alias imports', () => {
    it('using `member as alias` as memberName', () => {
      // You can "change" the name of the functions imported adding an alias:
      // import { singleFunction as anotherName } from 'lib/sample'
      // Now comment the next line to move to the next koan:
      fail()
    });
  });
});
