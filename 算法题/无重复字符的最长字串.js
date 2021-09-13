// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。



// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function (s) {

  let left = 0;
  let right = 0;
  let window = [];
  let maxlen = 0;
  let len
  while (right < s.length) {

    if (window.indexOf(s[right]) == -1) {
      len = window.push(s[right])
      right++
      if (len >= maxlen) { maxlen = len }
    } else {
      window = []
      left++
      right = left
    }


  }
  return maxlen
};

console.log(lengthOfLongestSubstring("pwwkew"))