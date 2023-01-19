
// You should implement your task here.

const { sort } = require("semver");

module.exports = function towelSort (matrix) {
  return sortM(matrix);
}

const sortM = (matrix) => {
  if (matrix == undefined) return [];
  let ans = [];
  let even = false;
  let mm;
  let j;
  for (let i = 0; i < matrix.length; i ++){
    mm = matrix[i];
    if (even) {
      even = false;
      for (j = mm.length-1; j >= 0; j--){
        ans.push(mm[j]);
      }
    }
    else {
      even = true;
      for (j = 0; j < mm.length; j++){
        ans.push(mm[j]);
      }
    }

  }
  return ans;
}

console.log(sortM([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ]));
