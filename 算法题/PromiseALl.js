const timer = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

const promise1 = () => {
  return timer(2000).then(() => {
    console.log(1);
    return 1
  })
}

const promise2 = () => {
  return timer(3000).then(() => {
    console.log(2);
    return 2
  })
}

const promise3 = () => {
  return timer(1000).then(() => {
    console.log(3);
    return 3
  })
}

function promiseAll(promises) {
  // 补全代码
  let results = []
  let promisecount = 0
  let promiselength = promises.length
  return new Promise(function (resolve, reject) {
    for (let val of promises) {
      Promise.resolve(val).then(function (res) {
        promisecount++
        results.push(res)
        if (promisecount === promiselength) {
          return resolve(results)
        }
      }, function (err) {
        return reject(err)
      })
    }
  })
}

promiseAll([promise1, promise2, promise3]).then(data => {
  console.log("全部执行完成");
  console.log(data);
});