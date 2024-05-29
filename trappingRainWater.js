let test1 = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
let test2 = [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1];
let test3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

/**
 *
 * @param {number[]} walls
 * @returns {number}
 */
function trappingRainWater(walls) {
	let totalWater = 0;
	let maxL = 0;
	let maxR = 0;

	for (let cP = 0; cP < walls.length; cP++) {
		// declare current height
		let cH = walls[cP];

		// Get the maxR value
		for (let rP = cP + 1; rP < walls.length; rP++) {
			if (walls[rP] > maxR) {
				maxR = walls[rP];
			}
		}

		// Get the maxL value
		for (let lP = cP - 1; lP >= 0; lP--) {
			if (walls[lP] > maxL) {
				maxL = walls[lP];
			}
		}

		// calculate current water container can hold
		const cW = Math.min(maxL, maxR) - cH;
		console.table({ maxL, maxR, cW });
		if (cW > 0) {
			totalWater += cW;
		}

		// reset the maxL and maxR
		maxL = 0;
		maxR = 0;
	}

	return totalWater;
}

// console.log(trappingRainWater(test2));

/**
 *
 * @param {number[]} heights
 * @returns {number}
 */
function getTrappedRainWaterOptimised(heights) {
	let pRight = heights.length - 1;
	let pLeft = 0;
	let maxRight = heights[pRight];
	let maxLeft = heights[pLeft];
	let totalWater = 0;

	while (pLeft !== pRight) {
		if (maxLeft < maxRight) {
			// check if the current value of pLeft is greater than maxLeft current value
			if (heights[pLeft] < maxLeft) {
				totalWater += maxLeft - heights[pLeft];
			}

			// move the left pointer inwards
			pLeft++;
			// set maxLeft to the greater value between the height at left pointer and the max value encountered thus far
			maxLeft = Math.max(maxLeft, heights[pLeft]);
		} else {
			if (heights[pRight] < maxRight) {
				totalWater += maxRight - heights[pRight];
			}

			// move the right pointer inwards
			pRight--;
			maxRight = Math.max(maxRight, heights[pRight]);
		}
	}
	return totalWater;
}

console.log(getTrappedRainWaterOptimised(test3));
