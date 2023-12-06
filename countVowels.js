// Create a function countVowels that takes a string as input and returns the
// count of vowels (a, e, i, o, u) in the string.

// Sample Input:
// countVowels('programming');
// Sample Output:
// 3

function countVowels(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word[i])) {
			count++;
		}
	}
	console.log(count);
	return count;
}

countVowels('programming');
