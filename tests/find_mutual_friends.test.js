const C = require("../js/find_mutual_friends");

test("test setup", () => {
  expect(
    C.setup([
      ["A", "B"],
      ["A", "C"],
      ["A", "D"],
      ["B", "D"],
    ])
  ).toStrictEqual({
    A: ["B", "C", "D"],
    B: ["A", "D"],
    C: ["A"],
    D: ["A", "B"],
  });
});
