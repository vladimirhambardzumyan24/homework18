function sumDigits(num) {
  if (num < 10) {
    return num;
  }
  let sum = sumDigits(num % 10) + sumDigits((num - (num % 10)) / 10);
  return sumDigits(sum);
}
console.log(sumDigits(999999999999));
