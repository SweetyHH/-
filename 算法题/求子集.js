
let arr = ['1', '2', '3']
// let arr = read_line().split(" ")
// console.log("1 2 3".split(" "))
for (let i = 0; i < arr.length; i++) {
  arr[i] = +arr[i]
}
console.log(arr)
var subset = function (arr) {
  let res = []
  let len = arr.length
  for (let i = 0; i < (1 << len); i++) {
    let arr2 = []
    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) {
        arr2.push(arr[j])
      }
    }
    res.push(arr2)

  }
  return res
}
// var subset = function (nums) {
//   let res = []
//   count(nums, [], 0)
//   function count(arr, temp, start) {
//     res.push(temp.slice(0))
//     for (let i = start; i < arr.length; i++) {
//       temp.push(nums[i])
//       count(arr, temp, i + 1)
//       temp.pop()

//     }
//   }
//   return res
// }
console.log(subset([1, 2, 3]))
