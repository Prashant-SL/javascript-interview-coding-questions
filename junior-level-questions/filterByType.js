// Create a function filterByType that takes an array of items with name and type properties
// and filters them based on a specified type.

// Sample Input:
// filterByType(items, 'Clothing');
// Sample Output:
// [{ name: 'Jacket', type: 'Clothing' }]

const items = [
    { name: 'Sunglasses', type: 'Accessory' },
    { name: 'Jacket', type: 'Clothing' },
    { name: 'Headphones', type: 'Electronics' },
];


function filterByType(items, filter) {
    return items.filter((item) => item.type.toLowerCase() === filter.toLowerCase());
}

filterByType(items, 'Clothing');