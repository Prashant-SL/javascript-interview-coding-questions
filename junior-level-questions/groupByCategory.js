// Create a function groupByCategory that takes an array of product objects with name, category,
// and price properties and groups them by category.

// Sample Input:
// groupByCategory(products);
// Sample Output:
// {
//   Electronics: [
//     { name: 'Laptop', category: 'Electronics', price: 1200 },
//     { name: 'Coffee Maker', category: 'Electronics', price: 80 },
//   ],
//   Clothing: [
//     { name: 'T-shirt', category: 'Clothing', price: 25 },
//   ],
// }

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'T-shirt', category: 'Clothing', price: 25 },
    { name: 'Coffee Maker', category: 'Electronics', price: 80 },
];

function groupByCategory(products) {
    return Object.groupBy(products, (product) => product.category);
}

groupByCategory(products);