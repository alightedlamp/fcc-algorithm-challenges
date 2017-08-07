function rot13(str) { // LBH QVQ VG!

    // split string into array, set up new string
    str = str.split("");
    var newStr = "";

    function convertChar(a, i) {
      // convert to char code
       a = a.charCodeAt(0);
       // check for punctuation
       if ((a - 13) < (65 - 13)) {
         newStr += String.fromCharCode(a);
       }
       // check for a code that should be a character
       else if ((a - 13) < 65) {
         newStr += String.fromCharCode(90 - (65 - (a - 13) - 1));
       }
       // get everything else
       else {
         newStr += String.fromCharCode(a - 13);
       }
     }
    // decipher
    str.map(convertChar);
    return newStr;
  }

// Change the inputs below to test
rot13("SERR PBQR PNZC");
