const findMissingLetter = require("./find-missing-letter");

result = findMissingLetter(["a", "b", "c", "d", "f", "g"]);

console.log(result);

console.log(findMissingLetter(["a", "b", "d", "e"])); // Should return 'c'
console.log(findMissingLetter(["O", "Q", "R", "S"])); // Should return 'P'
console.log(findMissingLetter([])); // Should return ''
console.log(findMissingLetter(["a", "b", "c"])); // Should return ''
