function palindrome(str) {
  var re = /[^a-z0-9]/g;

  // convert original string before comparison
  str = str.toLowerCase();
  str = str.replace(re, "");

  var newStr = str;

  // set up new string
  newStr = newStr.split("");
  newStr = newStr.reverse();
  newStr = newStr.join("");

  if (newStr === str) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
