// // Version 1
// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (cb) {
//     const array = this;
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//       if (array[i]) {
//         result[i] = cb(array[i], i, array);
//       }
//     }
//     return result;
//   };
// }

// const resp = [1, 2, 3, 4].myMap((e, i) => e * 2);
// console.log(resp);

// // Version 2

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (cb, thisArg) {
        if (typeof cb  != "function") {
            throw new TypeError(cb + " is not a function!")
        }
        if (!Array.isArray(this)) {
            throw new Error("myMap method should be called on valid arrays!")
        }

        const array = this;
        const newArray = [];

        for (let i=0; i< array.length; i++) {
            const result = cb.call(thisArg, array[i], array);
            newArray.push(result);
        }

        return newArray;
    }
}

const resp = [1, 2, 3, 4].myMap((e, i) => e * 2);
console.log(resp);