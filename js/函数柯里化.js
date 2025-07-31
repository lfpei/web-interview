function add(...args) {
  return (...args1) => {
    if(args1.length === 0){
      return args.reduce((pre, cur) => pre + cur, 0)
    }
    return add(...args, ...args1);
  }
}

console.log(add(1,2)(3)()); // 6
console.log(add(1)(2)(3)()); // 6
console.log(add(1,2,3)(4, 5)()); // 15
