function flatArray(arr, depth = "Infinity", result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      flatArray(arr[i], depth - 1, result);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flatArray([1, 2, [3, [4, 5], 6, [[[[7], 8], 9], 10]]], 2));
