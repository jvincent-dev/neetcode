/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 *  Each row must contain the digits 1-9 without repetition.
 *  Each column must contain the digits 1-9 without repetition.
 *  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *  Note:
 *
 *  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 *  Only the filled cells need to be validated according to the mentioned rules.
 */

/**
 * @param {string[][]} board - board[0][0] is a string containing 1 character
 * @return {boolean}
 */

export function isValidSudoku(board) {
    // col, row, groups/boxes
    // loop through rows and cols > add values into each respective sets with custom keys > do the same for each block group
    const map = {};

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        const row = board[rowIndex];
        const rowKey = `row-${rowIndex}`;

        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const cellVal = row[colIndex];

            if (cellVal !== ".") {
                const colKey = `col-${colIndex}`;

                // row
                if (map.hasOwnProperty(rowKey)) {
                    if (map[rowKey].has(cellVal)) {
                        return false;
                    } // need inner if to prevent resetting map[key]'s Set()
                } else {
                    map[rowKey] = new Set();
                }

                map[rowKey].add(cellVal);

                // col
                if (map.hasOwnProperty(colKey)) {
                    if (map[colKey].has(cellVal)) {
                        return false;
                    }
                } else {
                    map[colKey] = new Set();
                }

                map[colKey].add(cellVal);

                // box
                const boxRowIndex = Math.floor(rowIndex / 3);
                const boxColIndex = Math.floor(colIndex / 3);
                const boxKey = `box-${boxRowIndex}-${boxColIndex}`;

                if (map.hasOwnProperty(boxKey)) {
                    if (map[boxKey].has(cellVal)) {
                        return false;
                    }
                } else {
                    map[boxKey] = new Set();
                }

                map[boxKey].add(cellVal);
            }
        }
    }

    return true;
} // In my head "valid" meant "solvable". So I was thinking to solve and see if it's a valid solution which was not asked for
