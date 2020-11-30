const maze_solver = require("../js/maze_solver");

test("test grid setup", () => {
  var test_grid = new maze_solver.Grid([
    [1, 0],
    [0, 1],
  ]);
  test_grid.printGrid();
  expect(test_grid.grid).toStrictEqual([
    [1, 0],
    [0, 1],
  ]);
});

test("test random grid setup", () => {
  var test_grid = new maze_solver.Grid();
  test_grid.printGrid();
  expect(test_grid.grid.length).toBe(6);
  expect(test_grid.grid[0].length).toBe(6);
});
