const numbers = [3, 5, 6, 2, 1];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let item = array[i];
        array[i] = array[j];
        array[j] = item;
      }
    }
  }
  return array;
};

console.log(bubbleSort(numbers));
