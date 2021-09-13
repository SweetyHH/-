var jiecheng = function (n) {
  if (n <= 1) {
    return 1
  } else {
    return jiecheng(n - 1) * n
  }
}

console.log(jiecheng(8) / (jiecheng(4) * jiecheng(5)))