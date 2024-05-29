function quicksort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	const result = [...quicksort(left), pivot, ...quicksort(right)];
	console.log('Result for iteration: ', result);
	return result;
}

console.log(quicksort([9, 2, 1, 5, 8, 3, 6, 4, 7]));
