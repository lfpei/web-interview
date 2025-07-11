// 使用apply/call
Function.prototype.myBind = function(ctx, ...args) {
  const fn = this;
  return function(...newArgs) {
    if(new.target) {
      return new fn(...args, ...newArgs)
    }
    // fn.call(ctx, ...args, ...newArgs);
    fn.apply(ctx, [...args, ...newArgs]);
  }
}
/**
 * 不使用call, apply
 */
Function.prototype.myBind1 = function (ctx, ...args) {
  ctx = Object.is(ctx, null) || Object.is(ctx, void(0)) ? globalThis : Object(ctx);
  const fn = this;
  const key = Symbol();
  Object.defineProperty(ctx, key, {
    value: fn,
    enumerable: false
  });
  return function (...newArgs){
    if(new.target) {
      return new fn(...args, ...newArgs)
    }
    ctx[key](...args, ...newArgs)
    delete ctx[key]
  }
}

const fn = function (...args) {
  console.log('params', args)
  console.log('this', this)
}

// const newFn = fn.myBind1(null, 1, 2); // params [ 1, 2, 5 ] this global
// console.log(newFn(5))

// const newFn = fn.myBind1(undefined, 1, 2); // params [ 1, 2, 5 ] this global
// console.log(newFn(5))

// const newFn = fn.myBind1({}, 1, 2); // params [ 1, 2, 5 ] this {}
// console.log(newFn(5))

// const newFn = fn.myBind1(1, 2, 3) // params [ 2, 3, 5 ] this [Number: 1]
// console.log(newFn(5))

// const newFn = fn.myBind1('213', 2, 3) // params [ 2, 3, 5 ] this [String: '213']
// console.log(newFn(5))

const newFn = fn.myBind1(function (){}, 2, 3) // params [ 2, 3, 5 ] this [Function (anonymous)]
console.log(newFn(5))

// const newFn = fn.myBind1(1, 2, 3)
// console.log(new newFn(5)) // params [ 2, 3, 5 ] this fn {} fn {}
