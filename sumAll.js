function sumAll(arr) {
  arr.sort((x, y) => x - y);
  var start = arr[0];
  var end = arr[1] + 1;
  var sum = 0;

  for (var i = start; i < end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([5, 10]));
