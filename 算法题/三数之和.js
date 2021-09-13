// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]

var threeSum = function (nums) {
  if (nums.length < 3) return []
  //排序
  nums.sort((a, b) => a - b);

  let res = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) { break }
    if (i > 0 && nums[i - 1] == nums[i]) { continue }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left + 1] == nums[left]) {
          ++left
        }
        while (left < right && nums[right - 1] == nums[right]) {
          --right
        }
        ++left
        --right
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        --right
      } else {
        ++left
      }

    }

  }

  return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))