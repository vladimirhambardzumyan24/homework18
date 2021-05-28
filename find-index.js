let index = 0;
function findIndex(arr, i) {
  if (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
      index = i + 1;
    } else {
      findIndex(arr, i + 1);
    }
  }
  if (index === 0) {
    return -1;
  }
  return index;
}
console.log(findIndex([-9, -4, -4, 3, 12, 4, 5], 0));
