function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const item of str) {
    if (vowels.includes(item.toLowerCase())) count++;
  }
  return count;
}

module.exports = countVowels;
