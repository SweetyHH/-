function converter(obj) {
  /* 功能实现 */
  let arr = Object.keys(obj)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = toHump(arr[i])
  }
  object.defineProperties(obj, descriptors);


  return obj
}



function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}

function toLine(name) {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase()

}
// console.log(converter({ "a_bc_def": 1 })); // 返回 {"aBcDef": 1}

console.log(toHump("a_bc_def"))
console.log(toLine("aBcDef"))
// let obj1 = { "a_bc_def": 1 }
// console.log(Object.keys(obj1))