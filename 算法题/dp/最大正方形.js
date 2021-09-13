// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
// 输入：matrix = [["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
// 输出：4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximal-square


var findmaxsquare = function (martrix) {
  if (martrix == null || martrix.length == 0 || martrix[0].length == 0) {
    return 0;
  }

  let rows = martrix.length;  //列
  let columns = martrix[0].length;//行
  let dp = martrix;
  //创建一个和martrix一样大小的二维数组，dp[i][j]代表的值为以martrix[i][j]为右下角点的最大正方形的边长
  let slide = 0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      if (martrix[i][j] == "1") {
        if (i == 0 || j == 0) {
          dp[i][j] = 1;
        } else {

          dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;

        }
        slide = Math.max(slide, dp[i][j]);
      }
    }
  }

  return (slide * slide);
}


console.log(findmaxsquare([["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["0", "1", "1", "1", "1"], ["0", "1", "1", "1", "1"]]))