function arrayIntersection(arr1, arr2) {
  let res = [];
  let arr1_length = arr1.length;
  let arr2_length = arr2.length;

  if (arr1_length < arr2_length) {
    for (let i = 0; i < arr1_length; i++) {
      if (arr2.includes(arr1[i])) {
        res.push(arr1[i]);
      }
    }
  } else {
    for (let i = 0; i < arr2_length; i++) {
      if (arr1.includes(arr2[i])) {
        res.push(arr2[i]);
      }
    }
  }
  return res;
}

module.exports = arrayIntersection;
