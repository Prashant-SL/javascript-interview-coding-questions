function flatObj(obj, prevKey = "", result = {}) {
  for (let key in obj) {
    const newKey = prevKey ? `${prevKey}.${key}` : key;

    if (typeof obj[key] == "object" && typeof obj[key] != null) {
      flatObj(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
      h: 5,
    },
    i: 6,
  },
};
console.log(flatObj(obj));
