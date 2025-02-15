function validateEmail(email) {
  if (!email || !email?.trim() || typeof email !== "string") return false;
  else {
    if (!email.includes("@") || !email.includes(".")) return false;
    else {
      if (email.indexOf("@") === 0 || email.indexOf("@") === -1) return false;
      if (email.indexOf(".") === 0 || email.indexOf(".") === -1) return false;
    }
  }
  return true;
}

module.exports = validateEmail;
