function largestOfFour(arr) {
  var largestArr = [];

  arr.forEach(function(nums) {
    var sortedNums = nums.sort(function(a, b) {
      return a - b;
    });
    largestArr.push(sortedNums[sortedNums.length - 1]);
  });
  arr = largestArr;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
