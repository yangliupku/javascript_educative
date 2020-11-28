const mutual_friendts = require("../js/find_mutual_friends");

test("test setup", () => {
  expect(
    mutual_friendts.setup([
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

test("test mapping single", () => {
  expect(mutual_friendts.mapper({ A: ["B", "C", "D"] })).toStrictEqual([
    { AB: ["B", "C", "D"] },
    { AC: ["B", "C", "D"] },
    { AD: ["B", "C", "D"] },
  ]);
});

test("test mapping multiple", () => {
  expect(
    mutual_friendts.mapper({
      A: ["B", "C", "D"],
      B: ["A", "D"],
      C: ["A"],
      D: ["A", "B"],
    })
  ).toStrictEqual([
    { AB: ["B", "C", "D"] }, // from 'A'
    { AC: ["B", "C", "D"] }, // from 'A'
    { AD: ["B", "C", "D"] }, // from 'A'
    { AB: ["A", "D"] }, // from 'B'
    { BD: ["A", "D"] }, // from 'B'
    { AC: ["A"] }, // from 'C'
    { AD: ["A", "B"] }, // from 'D'
    { BD: ["A", "B"] }, // from 'D'
  ]);
});
