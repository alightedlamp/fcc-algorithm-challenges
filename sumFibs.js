function sumFibs(num) {
  let fib = [0, 1];
  let i = 1;

  while (fib[i] + fib[i-1] <= num) {
    fib.push(fib[i] + fib[i-1]);
    i++;
  }

  return fib.reduce((sum, value, i) => (value % 2 === 1) ? sum + value : sum, 0);
}

console.log(sumFibs(4)); // 1 + 1 + 3 = 5
console.log(sumFibs(10)); // 1 + 1 + 3 + 5 = 10
console.log(sumFibs(75024)); // 60696
console.log(sumFibs(75025));