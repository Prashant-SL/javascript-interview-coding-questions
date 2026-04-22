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

    let result = [];
    let arr = this;
    let length = this.length;

    for (let i = 0; i < length; i++) {
      if (cb.call(thisArg, arr[i], i, arr)) {
        result.push(cb.call(arr[i]));
      }
    }

    return result;
  };
}

console.log([1, 2, 3, 4].filter((e) => e > 5));
