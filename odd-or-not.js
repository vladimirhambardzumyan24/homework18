function odd(number) {
  if ((number % 10) % 2 === 0 && number > 0) {
    console.log(number);

    return false;
  } else if (number > 0) {
    return odd((number - (number % 10)) / 10);
  }
  return true;
}
console.log(odd(4211133));
