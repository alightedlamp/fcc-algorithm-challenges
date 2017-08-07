function titleCase(str) {
  var arr = [];

  str = str.toLowerCase();
  arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i].split("");
    word[0] = word[0].toUpperCase();
    word = word.join("");
    arr[i] = word;
  }
  str = arr.join(" ");

  return str;
}

titleCase("I'm a little tea pot");
