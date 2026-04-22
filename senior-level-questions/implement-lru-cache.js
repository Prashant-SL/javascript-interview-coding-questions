class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);

    return value;
  }

  // If the key exists:
  //   then move it to the end of the list, also update its value with new one/value
  // If no:
  //   check the size of the map, 
  //      if its less than the limit then add it directly
  //      else remove the LRU and add the new one to the last
  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.limit) {
      const lruKey = this.map.keys().next().value;
      this.map.delete(lruKey);
    }

    this.map.set(key, value);
  }
}

const cache = new LRUCache(2);
cache.put(1, 10);
cache.put(2, 20);
console.log(cache.get(1));
cache.put(3, 30);
console.log(cache.get(2));
