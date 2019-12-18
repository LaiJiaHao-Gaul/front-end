# JavaScript之可枚举性

知识总结来源： 《你不知道的JavaScript 上卷》

``` javascript
var obj = {}

Object.defineProperty(
    obj,
    'a',
    {
        value:2,
        enumerable:true
    }
)

Object.defineProperty(
    obj,
    'b',
    {
        value:3,
        enumerable:false
    }
)

console.log(obj.a)//2
console.log(obj.b)//3

for(var i in obj){
    console.log(i,obj[i]); //a 2  并没有把b遍历出来
}

```

属性描述符（数据描述符）的enumerable决定“属性是否可以出现在对象属性的遍历中”。

还有一种方式可以区分属性是否可枚举：propertyIsEnumerable(..)

``` javascript
var obj = {}

Object.defineProperty(
    obj,
    'a',
    {
        value:2,
        enumerable:true
    }
)

Object.defineProperty(
    obj,
    'b',
    {
        value:3,
        enumerable:false
    }
)

console.log(obj.propertyIsEnumerable('a'))  // true
console.log(obj.propertyIsEnumerable('b'))  // false
```

propertyIsEnumerable(..)会检查给定的属性名是否直接存在于对象中（而不是在原型链上）并且满足enumerable:true.

Object.keys(..)会返回一个数组，**包含所有可枚举属性**。  
Object.getOwnPropertyNames(..)会返回一个数组，**包含所有属性，无论它们是否可枚举**。

in 和 hasOwnProperty(..)的区别在于是否查找[[Prototype]]链。
Object.keys(..)和Object.getOwnPropertyNames(..)都不查找[[Prototype]]链，只查找对象直接包含的属性。