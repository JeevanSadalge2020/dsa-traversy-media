function displayLikes(names) {
  let arrLength = names.length;
  if (arrLength === 0) return "no one likes this";
  else {
    switch (arrLength) {
      case 1:
        return `${names[0]} likes this`;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default:
        return `${names[0]}, ${names[1]} and ${
          names.length - 2
        } others like this`;
    }
  }
}

module.exports = displayLikes;
