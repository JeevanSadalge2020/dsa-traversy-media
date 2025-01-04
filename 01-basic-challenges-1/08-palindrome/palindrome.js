function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return reverseString(str.replaceAll(" ", "")) === str.replaceAll(" ", "");
}

function reverseString(str) {
  let res = [];
  for (const item of str) {
    res.unshift(item);
  }
  return res.join("");
}

module.exports = isPalindrome;
