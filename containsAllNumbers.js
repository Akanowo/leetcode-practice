/**
 * 
 * QUESTION:
An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

 

Example 1:


Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.
Example 2:

Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
1 <= matrix[i][j] <= n
 */

function Solution(matrix) {
	const transposedMatrix = transposeMatrix(matrix);
	// BRUTE FORCE SOLUTION

	// FOR ROWS
	for (let row of matrix) {
		let n = row.length; // to get the value of n
		let set = new Set(); // to make sure we don't have repeating values
		for (let rowItem of row) {
			if (rowItem > n || rowItem < 1) {
				return false;
			}
			if (set.has(rowItem)) {
				return false;
			}
			set.add(rowItem);
		}
	}

	// FOR COLUMNS
	for (let row of transposedMatrix) {
		let n = row.length;
		let set = new Set();
		for (let rowItem of row) {
			if (rowItem > n || rowItem < 1) {
				return false;
			}
			if (set.has(rowItem)) {
				return false;
			}
			set.add(rowItem);
		}
	}

	return true;
}

function transposeMatrix(matrix) {
	const transposed = [];

	for (let i = 0; i < matrix.length; i++) {
		let transposedRow = [];
		for (let j = 0; j < matrix.length; j++) {
			let row = matrix[j];
			const valueAtIndex = row[i];
			transposedRow.push(valueAtIndex);
		}
		transposed.push(transposedRow);
	}

	console.log(transposed);
}

Solution([
	[1, 2, 3],
	[3, 1, 2],
	[2, 3, 1],
]);
