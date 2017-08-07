function repeatStringNumTimes(str, num) {
  var newStr = "";
  if (num < 0) {
    return "";
  }
  else {
    for (var i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);