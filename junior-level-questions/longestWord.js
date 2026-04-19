const arr = ['javascript', 'is', 'actually', 'good'];

function longestWord(words) {
	let longWord = 0;
	words.forEach((word) => {
		if (word.length > longWord) {
			longWord = word.length;
		}
	});
	arr.reduce((ac, cv) => {
		if (cv.length > longWord) {
			longWord = cv.length;
		}
	}, 0);
	console.log('longWord', longWord);

	return longWord;
}
longestWord(arr);
