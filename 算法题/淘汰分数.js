
var findnum = function (n, x, y, nums) {
  let maxscore = 6
  let minscore = 1

  let fixpeople = 0
  for (var m = minscore; m < maxscore; m++) {
    for (var i = 0; i < n; i++) {
      if (nums[i] >= m) {
        fixpeople++

      }

    }
    if (x <= fixpeople <= y && x <= (n - fixpeople) <= y) {
      return m
    }
  }
  return -1
}

let x1 = 2
let y1 = 3
let nums1 = [1, 2, 3, 4, 5, 6]
console.log(findnum(6, 2, 3, nums1))