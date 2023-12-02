function removeVowels(s) {
  const hash = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let i = s.length;
  const charsList = s.split('');

  while (i > 0) {
    if (hash[charsList[i]]) {
      charsList.splice(i, 1);
    }
    i--;
  }

  return charsList.join('');
}

console.log(removeVowels('leetcodeisacommunityforcoders'));
ltcdscmmntyfrcdrs;
// length = 15
