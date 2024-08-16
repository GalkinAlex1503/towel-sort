
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if (matrix === undefined) return [];
    if (matrix === null) return [];
  for (let i = 0; i < matrix.length; i++) {
      let line = matrix[i];
      if (i%2 === 1)    line.reverse();
      for (let x of line) {
          result.push(x);
      }
  }
  return result;
}
