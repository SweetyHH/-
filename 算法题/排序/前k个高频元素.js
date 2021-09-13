// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

// 示例 1:

// 输入: nums = [1, 1, 1, 2, 2, 3], k = 2
// 输出: [1, 2]




var topKFrequent = function (nums, k) {
  let map = {}
  nums.forEach(e => {
    if (map[e]) {

      map[e]++;
    } else {
      map[e] = 1;
    }
  })
  let res = []
  for (let key in map) {
    let size = map[key];
    if (res[size]) {
      res[size].push(+key)
    } else {
      res[size] = [+key]
    }
  }
  let r = [], end = res.length - 1;
  while (k > 0 && end >= 0) {
    // 从后边取出数据
    if (res[end]) {
      r = r.concat(res[end])
      k -= res[end].length
    }
    end--;
  }
  return r;
};


console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3], 2));