function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // 3, 4
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // 1, 0, 1
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); // [];
