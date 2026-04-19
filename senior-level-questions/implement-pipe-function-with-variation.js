// // Normal Pipe function

// function pipe(...fns) {
//   return function (value) {
//     return fns.reduce((acc, fn) => fn(acc), value);
//   };
// }

// function add(x) {
//   return x + x;
// }

// function mult(x) {
//   return x * x;
// }

// function square(x) {
//   return x * x;
// }

// console.log(pipe(add, mult, square)(2)); // functions will be called from left to right

// Async version
function asyncPipe(...fns) {
  return function (value) {
    return fns.reduce(
      (acc, fn) => acc.then((val) => fn(val)),
      Promise.resolve(value),
    );
  };
}
console.log(asyncPipe(add, mult, square)(2)); // functions will be called from left to right
