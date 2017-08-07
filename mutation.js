function mutation(arr) {
  var strOne = arr[0].split().join().toLowerCase();
  var strTwo = arr[1].split().join().toLowerCase();
  var contains = true;

  for (var i = 0; i < strTwo.length; i++) {
    if (strOne.indexOf(strTwo[i]) == -1) {
      contains = false;
    }
  }

  return contains;
}

mutation(["Alien", "line"]);
