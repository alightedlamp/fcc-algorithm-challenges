// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function sumFibs(num) {
  let sum = 0;

  function makeFib(num) {
    let fib = [0, 1];

    for (var i = 1; i < num; i++) {
      fib.push(fib[i] + fib[i-1]);
    }
    return fib;
  }

  const testFib = makeFib(num);

  for (var j = 0; testFib[j] <= num; j++) {
    if (testFib[j] % 2 === 1) {
      sum += testFib[j];
    }
  }
  return sum;
}

console.log(sumFibs(4)); // 1 + 1 + 3 = 5
console.log(sumFibs(10)); // 1 + 1 + 3 + 5 = 10
console.log(sumFibs(75024)); // 60696