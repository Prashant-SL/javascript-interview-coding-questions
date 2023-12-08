// Write a function mergeObjects that takes two objects as input and returns a new object with the
// properties of both objects.

// Sample Input:
// mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
// Sample Output:
// { a: 1, b: 3, c: 4 }

function mergeObjects(a, b) {
	return { ...a, ...b };
}

mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
