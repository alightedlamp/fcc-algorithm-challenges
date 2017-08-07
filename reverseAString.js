function reverseString(str) {
  var arr = [];
  arr = str.split("");
  arr.reverse();
  str = arr.join("");
  return str;
}

reverseString("hello");
