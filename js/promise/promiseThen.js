// Having a non-function as either parameter
Promise.resolve(0)
    .then()
    .then(false)
    .then(console.log);

Promise.reject(1).then(2, 2).then(console.log, console.log);

// 输出
