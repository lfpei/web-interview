> Equality (==) 操作符

```javascript
console.log([] == []);
console.log([] != []);
console.log({} == {});
console.log('0' == 0);
console.log(NaN == NaN);
console.log(+0 == -0);
console.log(1 == []);
console.log(1 == [1]);
console.log(0 == []);
console.log(true == 2);
console.log(false == '0')
```

> false true false true false true false true true false true

## 代码解析
[Mdn Equality (==)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

### 相同类型
- `Object`: 比较地址值
- `String`: 比较每个字符是否相同
- `Number`: 数字是否相同，**注意** `+0` 和 `-0`返回true, `NaN` 和 `NaN` 返回false
- `Boolean`: 都为true或者都为false返回true，反之false
- `Symbol`: 比较地址值
- `BigInt`: 比较值
- `null` 或者 `undefined`: 两个互为相等关系
- 一个为`object`一个为原始类型`primitive`, 需要将`Object`转为原始类型
### 不同类型
- 一个为 `Symbol` 另一个不是返回false
- `Boolean`类型先将其转换为`Number`, true是1, false是0, 然后再进行比较
- 字符串和数字比较， 先将字符串转为数字，转换失败则为NaN
