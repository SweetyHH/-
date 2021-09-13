// https://www.nowcoder.com/question/next?pid=28665343&qid=1371127&tid=46658351

var minoperation = function (nums) {
  let n = nums.length
  let count = 0
  for (var i = 0; i < n; i++) {
    if (nums[i] < 1) {
      count = count + (1 - nums[i])
    }
    if (nums[i] > n) {
      count = count + (nums[i] - n)
    }
  }

  return count
}


console.log(minoperation([-1, 2, 3, 10, 100]))