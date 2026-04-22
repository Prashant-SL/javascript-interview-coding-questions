if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, thisArg) {
    // Validations
    if (typeof cb != "function") {
      throw new Error(cb + " is not a function");
    }
    if (!Array.isArray(this)) {
      throw new Error(cb + " myReduce method should be called on valid array");
    }
    if (this == null || this == undefined || this.length == 0) {
      throw new Error(cb + " myReduce method should be called on valid array");
    }

    let accumulator;
    let startIndex;
    let arr = this;

    if (arguments.length >= 2) {
      accumulator = arguments[1];
      startIndex = 0;
    } else {
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
      if (i in arr) {
        accumulator = cb.call(thisArg, accumulator, arr[i], i, arr);
      }
    }

    return accumulator;
  };
}

console.log([1, 2, 3, 4].myReduce((ac, cv) => ac * cv, 1));
