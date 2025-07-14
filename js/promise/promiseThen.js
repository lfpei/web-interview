// // Having a non-function as either parameter
Promise.resolve(9)
    .then()
    .then(Promise.resolve(10))
    .then(console.log);

Promise.reject(11).then(12, 13).catch(console.log);

new Promise((resolve) => {
  console.log(0);
  resolve(3);
  console.log(1);
  Promise.resolve(2).then((res) => {
    console.log(res);
  });
}).then((res) => {
  console.log(res);
})

new Promise(resolve => {
  console.log(4);
  setTimeout(() => {
    resolve(7);
    console.log(6);
    Promise.resolve(8).then(res => {
      console.log(res);
    });
  })
  console.log(5);
})
.then(res => {
  console.log(res)
})




/**
 * 注意点：
 * 1. catch 方法其实就是then(undefined, onRejected)
 * 2. 链式调用的时候即使是reject状态，中间的then方法也会放入微队列中，导致catch的回调函数不会立即执行，而是等到前面的微队列执行完毕后才进入微队列
 * 3. thenable 如果是先注册，那么遇到resolve的时候会进入微队列
 * 4. 如果是先完成，那么遇到resolve的时候暂不处理，等执行到then的时候才会进入微队列
 */



// 微队列
// 计时器队列
// 输出 0 1 4 5 2 3 11 9 6 7 8
