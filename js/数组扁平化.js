function arrFlat(arr) {
  // const result = [];
  // arr.forEach(item => {
  //   if(!Array.isArray(item)) {
  //     result.push(item);
  //   } else {
  //     result.push(...arrFlat(item));
  //   }
  // });
  // return result;


  // return arr.reduce((result, item) => {
  //   if(!Array.isArray(item)) {
  //     result.push(item);
  //   } else {
  //     result.push(...arrFlat(item))
  //   }
  //   return result;
  // }, []);
  return arr.flat(Infinity);
}

// console.log(arrFlat([1, [2, 3, [4], 5], 6]));

function arrFlat2(arr, dep = Infinity) {
  if(dep === 0) return arr;
  return arr.reduce((result, item) => {
    if(!Array.isArray(item)) {
      result.push(item);
      return result;
    }
    if(dep === Infinity) {
      result.push(...arrFlat2(item, Infinity));
      return result;
    }
    result.push(...arrFlat2(item, --dep));
    return result;
  }, [])
}
const res = arrFlat2([1, [2, 3, [4, 5, [7, [8, 9]]]], 6], 1)
console.log(res);
