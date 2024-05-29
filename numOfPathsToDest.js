/**
 *
 * @param {number} n
 * @returns {number}
 */
function NumOfPathsToDest(n) {
	let numOfSteps = 0;

	let i = 0;
	let j = 0;
	while (i < n && j < n) {
		if (i === j) {
			i++;
		}
	}
}

console.log(NumOfPathsToDest(4));

function numOfPathsToDest(n) {
	// allocate a 2D array for memoization
	// the memoization array is initialized with -1
	// to indicate uncalculated squares.
	const memo = new Array(n).fill(-1).map(() => new Array(n).fill(-1));

	return numOfPathsToSquare(n - 1, n - 1, memo);
}

/* input:
#    i, j - a pair of non-negative integer coordinates
#    memo - a 2D memoization array.
# output:
#    number of paths from (0,0) to the square represented in (i,j), */

function numOfPathsToSquare(i, j, memo) {
	if (i < 0 || j < 0) {
		return 0;
	} else if (i < j) {
		memo[i][j] = 0;
	} else if (memo[i][j] != -1) {
		return memo[i][j];
	} else if (i == 0 && j == 0) {
		memo[i][j] = 1;
	} else {
		memo[i][j] =
			numOfPathsToSquare(i, j - 1, memo) + numOfPathsToSquare(i - 1, j, memo);
	}

	return memo[i][j];
}

console.log(numOfPathsToDest(4));

/* let paths = 0;

function numOfPathsToDest(n) {
  calculateNumOfPathsToPoint(n - 1, n - 1);
  return paths;
}

function calculateNumOfPathsToPoint(row, column) {
  if (row < 0 || column < 0) return;
  
  if (row === 0 && column === 0) {
    paths++;
    return;
  }
  if (row > column) return;
  
  calculateNumOfPathsToPoint(row - 1, column); // Coming from the square below
  calculateNumOfPathsToPoint(row, column - 1); // Coming from left square
}


console.log(numOfPathsToDest(1));
*/

/* input: n - a positive integer representing the grid size.
# output: number of valid paths from (0,0) to (n-1,n-1). */

function numOfPathsToDest(n) {
	// allocate a 2D array for memoization
	// the memoization array is initialized with -1
	// to indicate uncalculated squares.
	const memo = new Array(n).fill(-1).map(() => new Array(n).fill(-1));

	return numOfPathsToSquare(n - 1, n - 1, memo);
}

/* input:
#    i, j - a pair of non-negative integer coordinates
#    memo - a 2D memoization array.
# output:
#    number of paths from (0,0) to the square represented in (i,j), */

function numOfPathsToSquare(i, j, memo) {
	if (i < 0 || j < 0) {
		return 0;
	} else if (i < j) {
		memo[i][j] = 0;
	} else if (memo[i][j] != -1) {
		return memo[i][j];
	} else if (i == 0 && j == 0) {
		memo[i][j] = 1;
	} else {
		memo[i][j] =
			numOfPathsToSquare(i, j - 1, memo) + numOfPathsToSquare(i - 1, j, memo);
	}

	return memo[i][j];
}

console.log(numOfPathsToDest(4));
