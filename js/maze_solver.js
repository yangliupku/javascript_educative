class Grid {
  constructor(arr) {
    if (arr === undefined) {
      this.grid = [...Array(6).keys()].map(() =>
        [...Array(6).keys()].map((x) => Math.floor(Math.random() * 2))
      );
    } else {
      this.grid = arr.map((row) => [...row]);
    }
  }
  printGrid() {
    for (const row of this.grid) {
      row.map((x) => process.stdout.write(x ? "O" : "X"));
      process.stdout.write("\n");
    }
  }
}

class MazeSolver extends Grid {
  constructor(arr) {
    super(arr);
  }
}

module.exports = { Grid };
