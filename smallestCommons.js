// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  // Add a method on Array prototype just for fun
  Array.prototype.range = function(start, end) {
    let arr = [];

    for (let i = start; i < end + 1; i++) {
      arr.push(i);
    }

    return arr;
  }
  // Sort it, range it, reverse it
  arr = arr.sort((a, b) => a - b).range(arr[0], arr[1]).reverse();

  // Set up variables for loops
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