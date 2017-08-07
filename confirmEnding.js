function confirmEnding(str, target) {
  var strLen = str.length;
  var tarLen = target.length;
  var start = strLen - tarLen;
  if (str.substring(start, strLen) === target) {
    return true;
  }
  else {
    return false;
  }
}
confirmEnding("Bastian", "n");
