```javascript
const obj = {
  [Symbol('a')]: '1111',
  set: new Set([1,2,3]),
  map: new Map([['a', 1], ['b', 2]]),
  a: 1,
  b: '2',
  c: true,
  d: [{
    d1: 1
  }, {
    d2: 2
  }],
  e: {
    e1: 1,
    e2: 2
  },
  f: function() {
    console.log('function', 123);
  }
}
```
```javascript
/**
 * 方案一: 
 * 不可枚举属性无法拷贝
 * 循环引用无法处理
 */
function deepClone(obj){
  return JSON.parse(JSON.stringify(obj))
}
/**
 * 方案二
 */
function deepClone(obj){
  if(typeof obj !== 'object' && Object.is(obj, null)){
    return obj;
  }
  let cloneObj;
  if(Array.isArray(obj)){
    cloneObj = [];
    for(let i = 0; i < obj.length; i++) {
      cloneObj.push[deepClone(obj)]
    }
  } else if(obj instanceof Map){
    cloneObj = new Map([...obj])
  } else if(obj instanceof Set){
    cloneObj = new Set([...obj])
  } else {
    cloneObj = {}
    Reflect.ownKeys.forEach((key) => {
      cloneObj[key] = deepClone(obj[key])
    })
  }
  return cloneObj;
}
```

```javascript
const fObj = deepClone(obj);
console.log(fObj);

fObj.f = function() {
  console.log('function', 456);
}
obj.f();
fObj.f();

fObj.d[0].d1 = 111;
console.log(fObj.d[0].d1);
console.log(obj.d[0].d1);

fObj.e.e1 = 222;
console.log(fObj.e.e1);
console.log(obj.e.e1);

fObj.set.add(4);
console.log(fObj.set);
console.log(obj.set);

fObj.map.set('a', 333);
console.log(fObj.map);
console.log(obj.map);

Reflect.ownKeys(fObj).forEach(key => {
  obj[key] = 1;
})
console.log(fObj);
console.log(obj);
```
