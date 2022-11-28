/* Triangle Project Code.

Triangle analyzes the lengths of the sides of a triangle
  (represented by a, b and c) and returns the type of triangle.

It returns:
  'equilateral'  if all sides are equal
  'isosceles'    if exactly 2 sides are equal
  'scalene'      if no sides are equal

The tests for this method can be found in
  AboutTriangleProject.js
*/
typeOfTriangle = "";

function triangle(a, b, c) {
  
  if (a == b || b == c || c == a) {
    typeOfTriangle = "isosceles";
  }
  
  if(a == b && a == c && b == c){
    typeOfTriangle = 'equilateral';
  }
  
  if (a !== b && a !== c && b !== c) {
    typeOfTriangle = "scalene";
  }

  return typeOfTriangle;
}

