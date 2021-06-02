const findByVal = (arr, value) => {
    console.log(arr.length)
  let newArr = arr;
  let middindex = Math.floor(newArr.length-1 / 2);
  if(value<arr[0] || value>arr[arr.length-1] || arr===[]){
      return -1
  }
  if (value === newArr[middindex]) {
    return middindex;
  }else  if (value < arr[middindex]) {
    return findByVal(newArr.slice(0, middindex), value);
     
  } else if (value > arr[middindex]) {
    return findByVal(newArr.slice( middindex,newArr.length), value);
     
  }
  
};
console.log(findByVal([1, 2, 3, 4, 5, 6, 7, 8, 9], 36));
