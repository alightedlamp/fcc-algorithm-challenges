function diffArray(arr1, arr2) {
  var newArr = [];

  var diffA = arr1.filter(function(a, b) {
    return arr2.indexOf(a) === -1;
  });
  var diffB = arr2.filter(function(a, b) {
    return arr1.indexOf(a) === -1;
  })
  newArr = diffA.concat(diffB);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
