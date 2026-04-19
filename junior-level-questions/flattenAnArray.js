// Write a function flattenArray that takes an array of nested arrays and returns a single flat array.

// Sample Input:
// flattenArray([1, [2, [3, 4], 5], 6]);
// Sample Output:
// [1, 2, 3, 4, 5, 6]

function flattenArray(array) {
	return array.flat(Infinity);
}

flattenArray([1, [2, [3, 4], 5], 6]);
