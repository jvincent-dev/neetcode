/**
 * You are given an m x n integer matrix matrix with the following two properties:
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous row.
 *
 * Given an integer target, return true if target is in matrix or false otherwise.
 *
 * You must write a solution in O(log(m * n)) time complexity.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */

export function searchA2dMatrixSimple(matrix, target) {
    /**
     * search row's first index using bin search to see if target is in between current index and current index + 1
     * search column using bin search
     * if found return value
     */
    let rHead = 0;
    let rTail = matrix.length - 1;

    while (rHead <= rTail) {
        const rMidpoint = Math.floor((rHead + rTail) / 2);

        if (target < matrix[rMidpoint][0]) {
            rTail = rMidpoint - 1; // check lower half rows
        } else if (target > matrix[rMidpoint][0]) {
            if (rMidpoint === matrix.length - 1 || target < matrix[rMidpoint + 1][0]) {
                let cHead = 0;
                let cTail = matrix[0].length - 1;

                // check row's columns
                while (cHead <= cTail) {
                    const cMidpoint = Math.floor((cHead + cTail) / 2);

                    if (target < matrix[rMidpoint][cMidpoint]) {
                        cTail = cMidpoint - 1;
                    } else if (target > matrix[rMidpoint][cMidpoint]) {
                        cHead = cMidpoint + 1;
                    } else {
                        return true;
                    }
                }

                return false;
            } else {
                rHead = rMidpoint + 1; // check upper half rows
            }
        } else if (target === matrix[rMidpoint][0]) {
            return true;
        }
    }

    return false;
}

/** solved with https://github.com/kashfifahim
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */

export function searchA2dMatrix(matrix, target) {
    const flattendLen = matrix.length * matrix[0].length;
    const row = matrix.length;
    const col = matrix[0].length;
    let start = 0;
    let end = flattendLen - 1;

    while (start < end) {
        const midpoint = parseInt((start + end) / 2); // flattened midpoint
        const midVal = matrix[parseInt(midpoint / row)][midpoint % col]; // hash to correct indices

        if (target < midVal) {
            end = midpoint - 1; // check lower half
        } else if (target > midVal) {
            start = midpoint + 1; // check upper half
        } else {
            return true;
        }
    }

    if (matrix[parseInt(start / row)][start % col] === target || matrix[parseInt(end / row)][end % col] == target) {
        return true;
    }

    return false;
}
