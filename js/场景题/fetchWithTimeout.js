// 设置可超时的fetch请求
function fetchWithTimeout(url, options, timeout = 5000) {
  console.time('fetch')
  if(typeof options === 'number'){
    timeout = options;
    options = {};
  }
  const abortController = new AbortController();
  const signal = abortController.signal;
  return new Promise((resolve, reject) => {
    let timeId = setTimeout(() => {
      abortController.abort();
      clearTimeout(timeId);
      console.timeEnd('fetch')
      reject('fetch fail timeout')
    }, timeout);
    if(!options.signal){
      options.signal = signal;
    } else {
      options.signal.addEventListener("abort", () => {
        reject(signal.reason);
      });
      options.signal = AbortSignal.any([options.signal, signal])
    }
    fetch(url, options).then((res)=>{
      resolve(res)
      clearTimeout(timeId);
    }, (err)=>{
      reject(err)
      clearTimeout(timeId);
    })
  })
}

fetchWithTimeout("http://localhost:3000", 3000).then((res)=>{
  console.log('---------', res)
}).catch((err) => {
  console.log('=========', err)
})
