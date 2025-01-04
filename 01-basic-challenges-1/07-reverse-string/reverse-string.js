function reverseString(str) {
  let res = [];
  for (const item of str) {
    res.unshift(item);
  }
  return res.join("");
}

module.exports = reverseString;
