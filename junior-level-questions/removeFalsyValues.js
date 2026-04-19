// Create a function removeFalsyValues that takes an array
// and removes all falsy values (false, null, 0, "", undefined, and NaN).

// Sample Input:
// removeFalsyValues([1, 0, true, false, '', undefined, null, NaN]);
// Sample Output:
// [1, true]

function removeFalsyValues(array) {
	return array.filter((ar) => {
		return Boolean(ar);
	});
}

removeFalsyValues([1, 0, true, false, '', undefined, null, NaN]);
