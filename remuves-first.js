let newArr = [];
function remuvesFirst(arr, i) {
  if (i < arr.length) {
    newArr.push(arr[i]);
    remuvesFirst(arr, i + 1);
  }
  return newArr;
}
console.log(remuvesFirst([6, 78, "n", 0, 1], 1));
