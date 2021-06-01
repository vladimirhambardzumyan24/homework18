
function concats(arr, newArr) {
  arr.map(function (val) {
    if (Array.isArray(val)) {
      concats(val,newArr);
    } else {
      newArr.push(val);
    }
  });
  return newArr;
}
console.log(concats([14, [1, [[[3, []]], 1], 0]], []));
console.log(concats([14, [1, [[[3, []]], 1], 0]], []));
