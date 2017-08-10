function myReplace(str, before, after) {
  str = str.split(' ').map(function(word, i) {
    if (word === before) {
      if (word[0] == word[0].toUpperCase()) {
        after = after.split('');
        after.splice(0, 1, after[0].toUpperCase());
        after = after.join('');
        return after;
      }
      return after;
    }
    else {
      return word;
    }
  }).join(' ');

  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
