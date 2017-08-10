function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let pigLatin = '';
  let wordStart = '';

  if (vowels.indexOf(str[0]) >= 0) {
    pigLatin = str.substr(0) + 'way';
    return pigLatin;
  }
  else {
    str = str.split('');
    // while the next letter in the word is not a vowel
    while (vowels.indexOf(str[0]) === -1) {
      wordStart += str[0];
      str.splice(0, 1);
    }
    pigLatin = str.join('') + wordStart + 'ay';
    return pigLatin;
  }
}

console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("glove")); // ovglay
