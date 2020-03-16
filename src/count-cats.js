module.exports = function countCats(matrix) {
  let arr = matrix.flat();
  console.log(arr);
  let result = arr.filter(item => item == '^^');
  return result.length;
  };