// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n > 1并且m > 1）
// ，每段绳子的长度记为 k[0], k[1]...k[m - 1] 。
// 请问 k[0] * k[1] *...* k[m - 1] 可能的最大乘积是多少？

// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/jian-sheng-zi-lcof


//贪心： 

var cuttingRope = function (n) {
  let a = Math.floor(n / 3);
  let b = n % 3;
  if (n <= 3) {
    return n == 3 ? 2 : 1;
  } else {
    if (b == 0) {
      return Math.pow(3, a)
    }
    if (b == 2) {
      return Math.pow(3, a) * 2
    }
    if (b == 1) {
      return Math.pow(3, a - 1) * 2 * 2
    }
  }

};

