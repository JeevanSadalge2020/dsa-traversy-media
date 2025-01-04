function countOccurrences(str, char) {
  let count = 0;
  for (const item of str) {
    if (char.toUpperCase() === item.toUpperCase()) count++;
  }
  return count;
}

module.exports = countOccurrences;
