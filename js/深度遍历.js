const obj = {
  a: {
    b: {
      c: '',
    },
  },
  d: '',
  e: {
    f: {
      g:{
        h:{

        }
      }
    }
  },
}

obj.h = obj.e.f

function dfs(obj){
  const result = [];
  const set = new Set();
  // function _dfs(_obj){
  //   for (const key in _obj) {
  //     result.push(key);
  //     set.add(_obj)
  //     if(typeof _obj[key] === 'object' && !set.has(_obj[key])) {
  //       _dfs(_obj[key])
  //     }
  //   }
  // }
  // _dfs(obj);
  // 循环遍历
  const keys = Object.keys(obj);
  set.add(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result.push(key);
    const stack = []
    if(typeof obj[key] === 'object' && !set.has(obj[key])) stack.push(obj[key])
    while(stack.length > 0){
      const data = stack.pop()
      set.add(data);
      for (const key in data) {
        result.push(key)
        if(typeof data[key] === 'object' && !set.has(data[key])){
          stack.push(data[key])
          break;
        }
      }
    }
  }
  return result;
}

console.log(dfs(obj))
