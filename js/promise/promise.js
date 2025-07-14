const p = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

// ==================================
// 不论当前的Promise处于什么状态，finally立即返回一个pedding状态的 Promise
Promise.resolve(100)
  .finally(() => {
      console.log('finally')
      return 200
  })
  .then(res => {
    console.log(res)
    return 300
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    console.log(err)
    return 3
  })
  .then((res) => {
    console.log(res)
  })
// ==================================
