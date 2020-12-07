const mod = require("../js/text_justification");

test("test splitline", () => {
  expect(mod.splitLine(["A", "creative", "man"], 10)).toStrictEqual([
    ["A", "creative"],
    ["man"],
  ]);
  expect(mod.splitLine(["A", "creative", "man"], 11)).toStrictEqual([
    ["A", "creative"],
    ["man"],
  ]);
  expect(mod.splitLine(["He", "who", "controls"], 15)).toStrictEqual([
    ["He", "who", "controls"],
    [],
  ]);
  expect(mod.splitLine(["He", "who", "controls"], 1)).toStrictEqual([
    [],
    ["He", "who", "controls"],
  ]);
});
