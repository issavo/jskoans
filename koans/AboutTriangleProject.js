
// You need to write the triangle function in the file 'triangle.js'

describe("AboutTriangleProject", () => {
  it("equilateral triangles have equal sides", () => {
    expect(triangle(2, 2, 2)).toEqual('equilateral');
    expect(triangle(10, 10, 10)).toEqual('equilateral');
  });

  it("isosceles triangles have exactly two equal sides", () => {
    expect(triangle(3, 4, 4)).toEqual('isosceles');
    expect(triangle(4, 3, 4)).toEqual('isosceles');
    expect(triangle(4, 4, 3)).toEqual('isosceles');
    expect(triangle(10, 10, 2)).toEqual('isosceles');
  });

  it("scalene triangles have no equal sides", () => {
    expect(triangle(3, 4, 5)).toEqual('scalene');
    expect(triangle(10, 11, 12)).toEqual('scalene');
    expect(triangle(5, 4, 2)).toEqual('scalene');
  });
});
