function areAllCharactersUnique(str) {
  let l = str.length;
  if (l === 0) return true;
  else {
    let map = new Map();
    for (let i = 0; i < l; i++) {
      if (!map.has(str[i])) {
        map.set(str[i], true);
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = areAllCharactersUnique;
