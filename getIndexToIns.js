function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) { return a - b; });
  var i = arr.indexOf(num);
  if (arr[i + 1] >= num || arr[i + 1] === undefined) { return i; }
  else { return i - 1; }
}

getIndexToIns([10, 20, 30, 40, 50], 35);
