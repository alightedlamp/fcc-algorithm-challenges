// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

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

function titleCase(str) {
  return str.toLowerCase().split(' ')
    .map((word) => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
}


console.log(titleCase("I'm a little tea pot"));
