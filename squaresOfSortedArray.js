var sortedSquares = function (nums) {
	// normal approach
	// for (let i = 0; i < nums.length; i++) {
	// 	nums[i] = nums[i] * nums[i];
	// }
	// return nums.sort((a, b) => a - b);

	// two - pointer method
	let i = 0;
	let j = nums.length - 1;
	let ans = [];
	for (let k = nums.length - 1; k >= 0; k--) {
		let firstNumSq = nums[i] * nums[i];
		let lastNumSq = nums[j] * nums[j];

		if (firstNumSq > lastNumSq) {
			ans[k] = firstNumSq;
			i++;
		} else {
			ans[k] = lastNumSq;
			j--;
		}
	}
	console.log(ans);
	return ans;
};
sortedSquares([-4, -1, 0, 3, 10]);
