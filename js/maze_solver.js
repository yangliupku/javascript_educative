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

  /**
   * Return true if index (x, y) is valid to move through.
   * @param {*} x
   * @param {*} y
   */
  canTraverse(x, y) {
    let nrows = this.grid.length;
    let ncols = this.grid[0].length;
    if (x >= 0 && x < nrows && y >= 0 && y < ncols) {
      return this.grid[x][y] === 1 ? true : false;
    } else {
      return false;
    }
  }
  /**
   * Get all valid next positions from (x, y)
   * @param {*} x
   * @param {*} y
   */
  getNeighbors(x, y) {
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    var neighbors = [];
    for (const [dx, dy] of directions) {
      const xx = x + dx;
      const yy = y + dy;
      if (this.canTraverse(xx, yy)) {
        neighbors.push([xx, yy]);
      }
    }
    return neighbors;
  }
}

module.exports = { Grid, MazeSolver };
