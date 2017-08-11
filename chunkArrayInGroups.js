function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var start = 0;
  var end = size;
  var times = arr.length / size

  for (var i = 0; i < times; i++) {
      newArr.push(arr.slice(start, end));
      start = end;
      end += size;
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));