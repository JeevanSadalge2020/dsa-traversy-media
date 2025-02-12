function findMissingLetter(arr) {
  if (arr.length === 0) return "";
  else {
    for (let i = 1; i < arr.length; i++) {
      let cur = arr[i].charCodeAt(0);
      let prev = arr[i - 1].charCodeAt(0);
      if (cur - prev > 1) {
        return String.fromCharCode(cur - 1);
      }
    }
    return "";
  }
}

module.exports = findMissingLetter;
