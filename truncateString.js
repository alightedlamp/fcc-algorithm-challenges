// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (num <= 3) {
    str = str.slice(0, num) + "...";
  }
  else if (str.length > num) {
    str = str.slice(0, num - 3) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

function truncateString(str, num) {
  if (str.length <= num) {
    return num;
  }
  else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}