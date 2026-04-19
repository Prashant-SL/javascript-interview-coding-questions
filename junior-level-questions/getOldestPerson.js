// Write a function getOldestPerson that takes an array of people objects with name and age properties
// and returns the person with the highest age.

const people = [
    { name: 'Anna', age: 35 },
    { name: 'David', age: 42 },
    { name: 'Emily', age: 38 },
    { name: 'Emily', age: 48 },
    { name: 'Emily', age: 73 },
];

function getOldestPerson(people) {
    let old = -1;
    let obj = {};
    const oldObj = people.map((p) => {
        if (p.age > old) {
            old = p.age;
            obj = p;
        }
    });
    return obj;
}

getOldestPerson(people);