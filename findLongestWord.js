function findLongestWord(str) {
  var arr = [];
  arr = str.split(" ");

  var longestWord = arr[0].length;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== undefined) {
      var nextItem = arr[i + 1];
    }

    if (longestWord < nextItem.length) {
      longestWord = nextItem.length;
    }
  }

  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
