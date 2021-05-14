# JavaScript之判断存在性

知识总结来源： 《你不知道的JavaScript 上卷》

``` javascript
var myObject = {
    a:undefined
}
console.log(myObject.a) //undefined
console.log(myObject.b) //undefined
```

在[JavaScript之[[get]]和[[put]]](#jump)中的第一个例子中有过这段代码，myObject.a返回的结果与myObject.b的返回结果是一样的undefined，但这个undefined到底是我们存储的undefined还是因为属性不存在返回的undefined呢？

## 方法一 in操作符

``` javascript
var obj = {
    a:2
}
console.log('a' in obj)//true
console.log('b' in obj)//false
```

in操作符会检查属性是否在对象及其[[Prototype]]原型链中。

一般不要用in操作符操作数组。

``` javascript
console.log(4 in [2,4,6]) //false
console.log(1 in [2,4,6]) //true
console.log('length' in [2,3,5]) //true 数组会有长度属性。
```

in操作符实际上检查的是某个属性名是否存在，因此对数组操作时，其实数组包含的属性名是下标,长度等属性名。

## 方法二 hasOwnProperty(..)

``` javascript
var obj = {
    a:undefined
}

console.log('a' in obj)//true
console.log('b' in obj)//false

console.log(obj.hasOwnProperty('a'))//true
console.log(obj.hasOwnProperty('b'))//false 
```

hasOwnProperty(..)只会检查属性是否在myObject对象中，不会检查[[Prototype]]链
