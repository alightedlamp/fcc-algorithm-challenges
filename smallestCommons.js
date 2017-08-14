// Find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between arr[0] and arr[1].
// should be for the RANGE, so 1, 5 should check for the lowest of 1, 2, 3, 4, 5
function smallestCommons(arr) {
  Array.prototype.range = function(a, b) {
    const start = a;
    const end = b;
    let arr = [];

    for (let i = start; i < end + 1; i++) {
      arr.push(i);
    }

    return arr;
  }
  arr = arr.sort((a, b) => a - b).range(arr[0], arr[1]).reverse();

  let quot = 0;
  let idx = 1;
  let n;

  do {
    quot = arr[0] * idx * arr[1];
    for (n = 2; n < arr.length; n++) {
      if (quot % arr[n] !== 0) {
        break;
      }
    }
    idx++;
  }
  while (n !== arr.length);

  return quot;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));