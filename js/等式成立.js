/**
 * == 运算符——如果某个操作数是原始值，而另一个操作数是对象（object），则该对象将转换为没有首选类型的原始值。
 * 转换原始值会依次调用 [Symbol.toPrimitive]、valueOf 和 toString 方法。
 * [Symbol.toPrimitive] 如果存在则必须返回原始值，但会对象会 TypeError
 * valueOf 和 toString 方法如果其中一个返回对象，则忽略其返回值，从而使用另一个的返回值
 * 如果两者都不存在，或者两者都没有返回原始值，则抛出 TypeError
 */
const a = {
  i: 1,
  [Symbol.toPrimitive]: function(){
    return this.i++;
  }
}

if(a == 1 && a == 2 && a == 3) {
  console.log('a is 1, 2, and 3');
}
