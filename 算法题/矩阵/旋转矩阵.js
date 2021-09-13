// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rotate-image

// matrix[i][j] == 旋转后 ===> matrix[j][n + 1 - i];


var rotate = function (matrix) {
  let n = matrix.length;
  const newmatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(newmatrix)//js创建二维数组的方式

  for (var i = 0; i < n; ++i) {
    for (var j = 0; j < n; ++j) {
      newmatrix[j][n - 1 - i] = matrix[i][j]
    }
  }
  return newmatrix;
};


// 输入= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// 输出：[[7, 4, 1], [8, 5, 2], [9, 6, 3]];

// 输入：matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
// 输出：         [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]



console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));