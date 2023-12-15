// create a deep copy of an object

const obj = {
	a: 1,
	b: 2,
	c: {
		A: 11,
		B: 22,
		C: [
			{
				aa: 111,
			},
		],
	},
};

const obj2 = JSON.parse(JSON.stringify(obj));
obj2.c.A = 10;
console.log(obj);
console.log(obj2);
