// Create a function titleCase that takes a sentence as input and returns a new sentence with the first letter of each word capitalized.

// Sample Input:
// capitalise('javascript is awesome');
// Sample Output:
// 'Javascript Is Awesome'

function capitalise(string) {
	const capital = string
		.split(' ')
		.map((str) => {
			const newWord = str.charAt(0).toUpperCase() + str.slice(1);
			return newWord;
		})
		.join(' ');
	return capital;
}

capitalise('javascript is awesome');
