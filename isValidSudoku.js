/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  const hash = {
    rows: {},
    cols: {},
  };

  const squares = {};

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '.' || board[col][row] === '.') {
        continue;
      }

      // // invalid value
      // if (Number(board[row][col]) < 1 || Number(board[row][col]) > 9) {
      //   return false;
      // }

      // set rows
      if (!hash.rows[row]) {
        hash.rows[row] = new Set();
        hash.rows[row].add(board[row][col]);
      } else {
        hash.rows[row].add(board[row][col]);
      }

      // // set cols
      // if (!hash.cols[row]) {
      //   hash.cols[row] = {};
      //   hash.cols[row][board[row][col]] = true;
      // } else {
      //   hash.cols[row][board[row][col]] = true;
      // }
    }
  }

  console.log('hash: ', hash.rows);
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
