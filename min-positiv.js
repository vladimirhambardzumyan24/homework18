let min = Infinity;
function minPositive(arr, i) {
  if (i < arr.length) {
    if (arr[i] >= 0 && arr[i] < min) {
      min = arr[i];
    }
    minPositive(arr, i + 1);
  }
  if (min === Infinity) {
    return -1;
  }
  return min;
}
console.log(minPositive([-5, -9, 111, -1000, 7], 0));
