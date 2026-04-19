// Basic Version
// function sum(a) {
//     return function (b) {
//         if (!b) {
//             return a;
//         }

//         return sum (a + b);
//     }
// }

// console.log(sum(2)(3)(4)());

// Version - 1
// function sum(a) {
//     return function inner(...args) {
//         if (args.length == 0) {
//             return a;
//         }

//         for (let arg of args) {
//             a += arg;
//         }

//         return inner;
//     }
// }

// console.log(sum(2)(3,4,5)(4)());

// Version - 2
function sum(...args) {
    let a = 0;

    for (let arg of args) {
        a += arg;
    }

    return function inner(...args) {
        if (args.length == 0) {
            return a;
        }

        for (let arg of args) {
            a += arg;
        }

        return inner;
    }
}

console.log(sum(2,3,4)(3,4,5)(4)());
