function formatPhoneNumber(arr) {
  let a = arr.slice(0, 3);
  let b = arr.slice(3, 6);
  let c = arr.slice(6);
  return `(${a.join("")}) ${b.join("")}-${c.join("")}`;
}

module.exports = formatPhoneNumber;
