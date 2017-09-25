// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

function pairwise(arr, arg) {
  const usedIndices = [];
  return arr.reduce((acc, el, i) => {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] + arr[j] === arg) {
        if (usedIndices.indexOf(i) === -1 && usedIndices.indexOf(j) === -1) {
          usedIndices.push(i, j);
          return acc + (i + j);
        }
      }
      j++;
    }
    return acc;
  }, 0);
}

console.log(pairwise([1,4,2,3,0,5], 7)); // 11
console.log(pairwise([1, 3, 2, 4], 4)); // 1
console.log(pairwise([1, 1, 1], 2)); // 1 - 0 + 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // 10 - 0 + 4, 1 + 5