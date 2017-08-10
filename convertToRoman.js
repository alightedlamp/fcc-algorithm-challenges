function convertToRoman(num) {
  var decimals = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var roman = '';

  for (var i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
        roman += romans[i];
        num -= decimals[i];
    }
  }

  return roman;
}

console.log(convertToRoman(15));
