function allFactors(num, factor, count, k) {
  if (k > num || count > num) {
    return;
  }

  if(count === num) {
      console.log(...factor)
      return
  }

  for (let i = k; i < num; i++) {
    if (num % i === 0) {
      factor.push(i);
      console.log('here:: ', factor)
      allFactors(num, factor, count * i, i);
      factor.pop()
    }
  }
}
allFactors(16, [], 1, 2);
