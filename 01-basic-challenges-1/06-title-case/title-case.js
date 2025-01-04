function titleCase(str) {
  return str
    .split(" ")
    .map((word) => foo(word))
    .join(" ");
}

function foo(word) {
  if (word.length > 1) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  } else {
    return word.toUpperCase();
  }
}

module.exports = titleCase;
