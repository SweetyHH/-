function maxValue(s, k) {
  // write code here
  let max = "";
  if (s.length == k) { return +s }
  for (var i = 0; i <= s.length - k; i++) {
    if (+s.slice(i, i + k) > +max) {
      max = s.slice(i, i + k)
    }
  }
  return max

}

console.log(maxValue("123124453", 3))
