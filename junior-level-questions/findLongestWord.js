// Write a function findLongestWord that takes an array of words and returns the longest word.

// Sample Input:
// findLongestWord(words);
// Sample Output:
// 'strawberry'
const words = ['apple', 'banana', 'kiwi', 'strawberry'];

function findLongestWord(words) {
	let big = -1;
	let bigWord = '';
	words.forEach((word) => {
		if (word.length > big) {
			big = word.length;
			bigWord = word;
		}
	});

	return bigWord;
}

findLongestWord(words);
