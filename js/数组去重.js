const list = [1,2,1,3,1,4,2,4]
// 操作原数组
// function deduplication(){
//   const set = new Set();
//   let i = 0;
//   while(i < list.length) {
//     if(set.has(list[i])) {
//       list.splice(i, 1);
//     } else {
//       set.add(list[i]);
//       i++;
//     }
//   }
// }
// deduplication();
// console.log(list)


// 返回新数组
function deuplication(arr){
  // return [...new Set(arr)]
  // return arr.reduce((res, item) => {
  //   if(!res.includes(item)) {
  //     res.push(item);
  //   }
  //   return res;
  // }, [])
  const set = new Set();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if(!set.has(arr[i])){
      set.add(arr[i]);
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(deuplication(list))
