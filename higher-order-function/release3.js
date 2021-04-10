function reject(array, fn) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push(array[i]);
    }
  }
  return fn(arr);
}

reject([1, 2, 3, 4], function (val) {
  console.log(val);
});
