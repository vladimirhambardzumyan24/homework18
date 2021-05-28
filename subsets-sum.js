function subsetSum(arr, l, length, sum) {
  if (l > length) {
      console.log(sum)
    return 
  }
  subsetSum(arr, l + 1, length, sum + arr[l]);
  subsetSum(arr, l + 1, length, sum);
}

let arr = [2,4,5];
subsetSum(arr, 0, arr.length - 1, 0);
