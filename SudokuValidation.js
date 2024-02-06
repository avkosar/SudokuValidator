function validSolution(board) {
    // Check if the board is a 9x9 array
    if (!Array.isArray(board) || board.length !== 9 || board.some(row => !Array.isArray(row) || row.length !== 9)) {
        return false;
    }

    // Function to check if a 3x3 subgrid contains unique numbers from 1 to 9
    function isSubgridValid(board, startRow, startCol) {
        let seen = new Set();
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                const number = board[i][j];
                if (number < 1 || number > 9 || seen.has(number)) return false;
                seen.add(number);
            }
        }
        return true;
    }

    // Checking each row and column
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        for (let j = 0; j < 9; j++) {
            const rowNumber = board[i][j];
            const colNumber = board[j][i];
            if (rowNumber < 1 || rowNumber > 9 || rowSet.has(rowNumber)) return false;
            if (colNumber < 1 || colNumber > 9 || colSet.has(colNumber)) return false;
            rowSet.add(rowNumber);
            colSet.add(colNumber);
        }
    }

    // Checking each 3x3 subgrid
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isSubgridValid(board, i, j)) return false;
        }
    }

    return true;
}

// Testing the function with a valid and an invalid Sudoku board
const validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const invalidBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

console.log(validSolution(validBoard)); // Should return true
console.log(validSolution(invalidBoard)); // Should return falsefunction validSolution(board) {
    // Check if the board is a 9x9 array
    if (!Array.isArray(board) || board.length !== 9 || board.some(row => !Array.isArray(row) || row.length !== 9)) {
        return false;
    }

    // Function to check if a 3x3 subgrid contains unique numbers from 1 to 9
    function isSubgridValid(board, startRow, startCol) {
        let seen = new Set();
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                const number = board[i][j];
                if (number < 1 || number > 9 || seen.has(number)) return false;
                seen.add(number);
            }
        }
        return true;
    }

    // Checking each row and column
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        for (let j = 0; j < 9; j++) {
            const rowNumber = board[i][j];
            const colNumber = board[j][i];
            if (rowNumber < 1 || rowNumber > 9 || rowSet.has(rowNumber)) return false;
            if (colNumber < 1 || colNumber > 9 || colSet.has(colNumber)) return false;
            rowSet.add(rowNumber);
            colSet.add(colNumber);
        }
    }

    // Checking each 3x3 subgrid
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isSubgridValid(board, i, j)) return false;
        }
    }

    return true;
}

// Testing the function with a valid and an invalid Sudoku board
const validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const invalidBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

console.log(validSolution(validBoard)); // Should return true
console.log(validSolution(invalidBoard)); // Should return false