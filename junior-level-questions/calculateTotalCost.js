// Write a function calculateTotalCost that takes an array of items with name and cost properties
// and calculates the total cost.

// Sample Input:
// calculateTotalCost(items);
// Sample Output:
// 95

const items = [
    { name: 'Book', cost: 15 },
    { name: 'Chair', cost: 50 },
    { name: 'Lamp', cost: 30 },
];

function calculateTotalCost(items) {
    return items.reduce((sum, item) => sum + item.cost, 0);
}

calculateTotalCost(items);