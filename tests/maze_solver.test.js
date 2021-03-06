const maze_solver = require("../js/maze_solver");

test("test grid setup", () => {
  var test_grid = new maze_solver.Grid([
    [1, 0],
    [0, 1],
  ]);
  expect(test_grid.grid).toStrictEqual([
    [1, 0],
    [0, 1],
  ]);
});

test("test random grid setup", () => {
  var test_grid = new maze_solver.Grid();
  expect(test_grid.grid.length).toBe(6);
  expect(test_grid.grid[0].length).toBe(6);
});

test("test canTraverse", () => {
  let test_solver = new maze_solver.MazeSolver([
    [1, 0, 1],
    [1, 1, 0],
  ]);
  expect(test_solver.canTraverse(0, 0)).toBe(true);
  expect(test_solver.canTraverse(0, 2)).toBe(true);
  expect(test_solver.canTraverse(2, 0)).toBe(false);
  expect(test_solver.canTraverse(-1, 3)).toBe(false);
});

test("test neighbors", () => {
  let test_solver = new maze_solver.MazeSolver([
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]);
  // expect(test_solver.getNeighbors(0, 0)).toStrictEqual([[1, 0]]);
  expect(test_solver.getNeighbors(1, 0)).toStrictEqual([
    [1, 1],
    [0, 0],
  ]);
});

test("test solve", () => {
  let test_solver = new maze_solver.MazeSolver([
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
  ]);
  expect(test_solver.solve(0, 0, 2, 1)).toBe(true);
  expect(test_solver.solve(1, 0, 2, 1)).toBe(true);
  expect(test_solver.solve(1, 0, 1, 3)).toBe(false);
  expect(test_solver.solve(0, 2, 2, 3)).toBe(true);
});
