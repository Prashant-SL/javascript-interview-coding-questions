const nums = [4, 1, 2, 1, 2];
function singleNumber(nums) {
	let obj = {};
	const n = nums.length;
	if (n == 1) {
		console.log(nums[0]);
	} else {
		for (let i = 0; i < n; i++) {
			if (obj[nums[i]] == undefined) {
				obj[nums[i]] = 1;
			} else {
				obj[nums[i]]++;
			}
		}
		for (let key in obj) {
			if (obj[key] == 1) {
				console.log(key);
			}
		}
	}
}

singleNumber(nums);
