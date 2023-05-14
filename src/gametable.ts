export const tableCreated = (row: number, columns: number) => {
  const randomtable: number[][] = [];
  {
    for (let i = 0; i < row; i + 1) {
      randomtable[i] = [];
      for (let j = 0; j < columns; j += 1) {
        randomtable[i][j] = Math.round(Math.random());
      }
    }
    return randomtable;
  }
};
