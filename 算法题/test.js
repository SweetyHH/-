
// // var n = readInt()
// // var boss = []
// // var add = []
// // while ((line = read_line()) != '') {
// //   let arr = line.split(' ');
// //   boss.push(arr[0])
// //   add.push(arr[1])

// // }

// var boss = [[1000, 100], [100, 100], [200, 700]]
// var findmin = function (boss) {
//   boss = boss.sort(function (a, b) {
//     return a[0] - b[0]
//   })
//   console.log(boss)
//   let min = boss[0][0]//100
//   let power = min + boss[0][1]
//   for (let i = 1; i < boss.length; i++) {


//     if (power < boss[i][0]) {
//       min = (boss[i][0] - power) + min


//       power = power + boss[i][1]


//     } else {
//       power = power + boss[i][1]

//     }
//     console.log("min", min)
//     console.log("power", power)
//   }
//   return min
// }

// console.log(findmin(boss))



var findallGop = function (arr, start, end) {
  let res = []
  let str = ""
  console.log(arr)
  for (let i = start; i <= end; i++) {

    if (arr[i] == "I" && str.length == 0) {
      str = str + arr[i]
      console.log(arr[i], str, res)
    }
    if (arr[i] !== "I" && str[0] == "I") {
      str = str + arr[i]
      console.log(arr[i], str, res)

    }
    if (arr[i] == "I" && str[0] == "I" && str !== "I") {
      res.push(str)
      str = "I"
      console.log(arr[i], str, res)


    }


  }
  return res
}

let arr = "IBBPIP".split("")

console.log(findallGop(arr, 0, 7))