// 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。

// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/restore-ip-addresses


// 一个合法的 IP 地址必须为四段，即 x.x.x.x 的格式。
// 所以可以用一个 p 表示当前 IP 的段数，p == 4 为结束条件。
// 每当 p == 4 时，判断已经匹配的字符串长度是否和 s 的长度相等，如果相等则是正确答案。
// 每个段的第一个字符如果是 0，说明这段已经结束了。
// 如果 3 个字符串拼在一起大于 255，则必须放弃这段字符串。
// 通过以上 5 个条件，我们可以用递归来做。

// 设 3 个变量：

// start，表示已经匹配的字符串索引
// p，表示已经有多少个段
// path，已经匹配的字符串

var restoreIpAddresses = function (s) {
  const len = s.length
  if (len < 4 || len > 12) return []
  const result = []

  function dfs(start, p, path) {
    if (p == 4) {
      if (start == len) result.push(path)
      return
    }

    let c = ''
    for (let i = start; i < start + 3; i++) {
      c += s[i]
      if (c > 255) break
      dfs(i + 1, p + 1, path + c + (p == 3 ? '' : '.'))
      if (s[start] == 0) break
    }
  }

  dfs(0, 0, '')
  return result
};

console.log(restoreIpAddresses("123122412"))