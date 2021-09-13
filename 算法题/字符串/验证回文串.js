// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串
// 说明：本题中，我们将空字符串定义为有效的回文串。


var isPalindrome = function (s) {
  //预处理
  let a = s.toLowerCase().match(/[A-z0-9]+/g)
  if (!a) { return true }
  let str = a.join("")
  let left = 0;
  let right = str.length - 1
  while (left < right) {
    if (str[left] == str[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true

};

let b = "race a car"
console.log(isPalindrome(b))