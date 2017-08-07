function factorialize(num) {
  var factorialized = 1;
  for (var i = 1; i < num; i++) {
    factorialized *= (i + 1);
  }
  return factorialized;
}

factorialize(5);
