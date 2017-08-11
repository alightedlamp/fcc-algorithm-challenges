function fearNotLetter(str) {
  let lastChar = '';
  let missing;

  for (var i = 0; i < str.length - 1; i++) {
    currChar = str.charCodeAt(i);
    nextChar = currChar + 1;
    // if next char code doesn't match the next string's char code, missing letter is found
    if (str.charCodeAt(i + 1) !== nextChar) {
      missing = String.fromCharCode(nextChar);
    }
    else {
      // nothing happens
    }
  }
  return missing;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bcd"));
console.log(fearNotLetter("yz"));