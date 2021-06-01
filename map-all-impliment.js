class Dictionary {
  constructor({ key, secondKey }) {
    this.key = { key };
    this.secondKey = { secondKey };
  }
  set(item, val) {
    if (!(item in this.key)) {
      this.key[item] = val;
      return this.key;
    }
    this.secondKey[item] = val;
    return this.secondKey;
  }
  get(item) {
    this.arr = [];
    try {
      if (item in this.secondKey) {
        this.arr.push(this.key[item], this.secondKey[item]);
        return this.arr;
      }
      this.arr.push(this.key[item]);
      return this.arr;
    } finally {
      return this;
    }
  }
  delete(val) {
    let deleted = this.arr.filter((item) => item !== val);
    return deleted;
  }
  remove(item) {
    delete this.key[item];
  }
  keys() {
    let keyArr = [];
    for (let ki in this.key) {
      keyArr.push(ki);
    }
    return keyArr;
  }
  values() {
    let valArr = [];
    for (let ki in this.key) {
      valArr.push(this.key[ki]);
    }
    if (Object.values(this.secondKey).length) {
      for (let ki in this.secondKey) {
        valArr.push(this.secondKey[ki]);
      }
    }
    return valArr;
  }
  entries() {
    let keyValArr = [];
    for (let ki in this.key) {
      keyValArr.push([ki, this.key[ki]]);
    }
    return keyValArr;
  }
}

const dict = new Dictionary({ key: "value", secondKey: "value2" });
// dict.set("num", 10);

console.log(dict.set("num", 10));
console.log(dict.set("num", 200));

console.log(dict.get("num").delete(10));
// console.log(dict.get("num"));

// console.log(dict.remove('key'))
// console.log(dict.keys());
// console.log(dict.values());
// console.log(dict.entries());
