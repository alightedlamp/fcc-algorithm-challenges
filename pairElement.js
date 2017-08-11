function pairElement(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }
  let pairing = [];

  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (pairs.hasOwnProperty(str[i])) {
      pairing.push([str[i], pairs[str[i]]]);
    }
  }

  return pairing;
}

console.log(pairElement("GCG"));