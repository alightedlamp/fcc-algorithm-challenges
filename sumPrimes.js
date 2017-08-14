// inefficient!
function sumPrimes(num) {
  const nums = [];

  for (let i = 1; i < num + 1; i++) {
    nums.push(i);
  }

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  return nums.reduce((sum, value) => isPrime(value) ? sum + value : sum, 0);
}

console.log(sumPrimes(10)); // 2 + 3 + 5 + 7

// implement sieve!

function sumPrimes2(num) {
  var sieve = new Array(num + 1).fill(true);
  var max = Math.ceil(Math.sqrt(num));
  var i, j;
  var sum = 0;

  for (i = 2; i <= max; i++) {
    if (sieve[i]) {
      for (j = i * i; j <= num; j += i) {
        sieve[j] = false;
      }
    }
  }

  for (i = 2; i <= num; i++ ) {
    if (sieve[i]) sum += i;
  }

  return sum;
}

console.log(sumPrimes2(10));