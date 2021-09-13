
function longestCommonPrefix(strs) {
  if (!strs.length) return ""
  if (strs.length == 1) return strs[0]
  //先排序 很关键 字符串排序的结果省事很多
  strs.sort()
  console.log(strs)
  let res = ""
  let first = strs[0]
  let end = strs[strs.length - 1]

  for (let i = 0; i < first.length; i++) {
    if (first[i] === end[i]) {
      res = res + first[i]
    } else {
      break
    }
  }
  return res
}


console.log(longestCommonPrefix(["abca", "abc", "abca", "abc", "abcc"]))
