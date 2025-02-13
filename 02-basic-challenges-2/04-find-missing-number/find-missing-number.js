function findMissingNumber(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arr_sum = arr.reduce((res, cur, arr) => cur + res);
  if (!arr) return undefined;
  if (n === 0) return 1;
  return sum - arr_sum;
}

module.exports = findMissingNumber;
