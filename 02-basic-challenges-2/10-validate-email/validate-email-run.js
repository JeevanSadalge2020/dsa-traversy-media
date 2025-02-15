const validateEmail = require("./validate-email");

// Test cases
console.log(validateEmail("test@example.com")); // true-
console.log(validateEmail("test.email@domain.co.uk")); // true-
console.log(validateEmail("")); // false-
console.log(validateEmail("test@")); // false-
console.log(validateEmail("@domain.com")); // false-
console.log(validateEmail("test@domain")); // false-
console.log(validateEmail("test..email@domain.com")); // false
console.log(validateEmail(".test@domain.com")); // false-
console.log(validateEmail("test@.domain.com")); // false
console.log(validateEmail("test@domain..com")); // false
