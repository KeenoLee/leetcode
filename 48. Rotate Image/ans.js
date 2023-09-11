// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

function rotate(matrix) {
  const n = matrix.length;

  // Transpose the matrix (swap rows and columns)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Swap matrix[i][j] and matrix[j][i]
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row to complete the 90-degree rotation
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

// Test cases
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix1);
console.log(matrix1);
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix2);
console.log(matrix2);
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
