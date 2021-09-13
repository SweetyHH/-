// // 给定不同面额的硬币 coins 和一个总金额 amount。
// 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 - 1



// dp[i]=min(dp[i-coins[0]],dp[i-coins[1]],...)+1
coins1 = [1, 2, 3, 5];
amount1 = 55;

var charges = function (coins, amount) {

  let dp = new Array(amount + 1).fill(Infinity);
  //dp[i]表示amount为i时的最少硬币个数

  dp[0] = 0;
  for (var j = 1; j <= amount; j++) {
    for (let coin of coins) {

      if (j - coin >= 0) {
        dp[j] = Math.min(dp[j - coin] + 1, dp[j]);
      }
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount];

}

console.log(charges(coins1, amount1))