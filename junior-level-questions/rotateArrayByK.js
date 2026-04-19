const arr = [1, 2, 3, 4, 5, 6, 7];

function reverseArr(arr, start, end) {
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}

function rotate(arr, k) {
	const n = arr.length;
	k = k % n;
	reverseArr(arr, 0, n - 1);
	reverseArr(arr, 0, k - 1);
	reverseArr(arr, k, n - 1);

	return arr;
}
rotate(arr, 3);
