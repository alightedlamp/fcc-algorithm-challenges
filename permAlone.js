// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

function permAlone(str) {
  let prefix = '';
  let post = '';
  let pre = '';

  function permute(str, prefix) {
    if (str.length === 0) {
      return [prefix];
    }
    else {
      let res = []; // accumulator to hold perms
      for (let i = 0; i < str.length; i++) {
        pre = str.substring(0, i);
        post = str.substring(i + 1);
        res = res.concat(permute(pre + post, str[i] + prefix));
      }
      return res;
    }
  }

  const re = /(.)\1+/g;
  return permute(str, prefix).filter(perm => !perm.match(re)).length;
}

console.log(permAlone('aab'));

// Heap's algorithm
function permAloneB(str) {
  let arr = str.split('');
  let permutations = [];
  let temp;

  const re = /(.)\1+/g;

  function swap(a, b) {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function generate(n) {
    if (n === 1) {
      return permutations.push(arr.join(''));
    }
    else {
      for (let i = 0; i != n; ++i) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }

  generate(arr.length);
  return permutations.filter(perm => !perm.match(re)).length;
}

console.log(permAloneB('aab'));