function fib(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return fib(number - 1) + fib(number - 2);
}
console.log(fib(8));



function fibonacci(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    let s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

console.log(fibonacci(8));
