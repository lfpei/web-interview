function debounce(fn, wait){
  let timeId = null;
  return function(...args){
    if(timeId) clearTimeout(timeId)
    timeId = setTimeout(()=>{
      fn(...args)
      clearTimeout(timeId);
      timeId = null;
    }, wait);
  }
}
// const func = debounce((res, res2, res3) => {
//   console.log(res, res2, res3);
// }, 1000)
// func(1);
// func(1,2);
// func(1,2,3);
function throttling(fn, wait){
  let timeId = null;
  return function(...args){
    if(timeId) return;
    timeId = setInterval(()=>{
      fn(...args);
      clearInterval(timeId)
      timeId = null;
    }, wait)
  }
}

const func = throttling((res, res2) => {
  console.log(res, res2)
}, 3000)
func(1)
func(1, 2)

