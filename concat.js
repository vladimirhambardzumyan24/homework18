let newArr = [];
function concats(arr) {
  arr.map(function (val) {
    if (Array.isArray(val)) {
      concats(val);
    } else {
      newArr.push(val);
    }
  });
  return newArr;
}
console.log(concats([14, [1, [[[3, []]], 1], 0]], 0));
