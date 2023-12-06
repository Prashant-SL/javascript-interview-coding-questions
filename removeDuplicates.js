// Write a function findDuplicates that takes an array of numbers and returns an array containing only the unique elements.
// Sample Input:
// findDuplicates([1, 2, 3, 2, 4, 5, 6, 6, 7]);
// Sample Output:
// [1, 2, 3, 4, 5, 6, 7]

const findDuplicates = (array) => {
	return [...new Set(array)];
};

findDuplicates([1, 2, 3, 2, 4, 5, 6, 6, 7]);
