// Return true if the passed string is a valid US phone number.

// RegExes are clever, but infuriating...
function telephoneCheck(str) {
  return /^(1[\s-]?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);
}

console.log(telephoneCheck("2 757 622-7382"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck('555-555-5555'));
console.log(telephoneCheck('(555)555-5555'));
console.log(telephoneCheck('(555) 555-5555'));
console.log(telephoneCheck('555 555 5555'));
console.log(telephoneCheck('5555555555'));
console.log(telephoneCheck('1 555 555 5555'));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));