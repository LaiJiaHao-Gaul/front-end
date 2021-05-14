# JavaScript之属性描述符

总结来源： 《你不知道的JavaScript 上卷》

``` javascript
var myObject = {
    a:2
}

console.log(Object.getOwnPropertyDescriptor(myObject,'a'));
//Object {
//  value: 2,
//  writable: true,
//  enumerable: true,
//  configurable: true
//}
```

Object的getOwnPropertyDescriptor方法可以得到对象属性对应的属性描述符（也被称为数据描述符，因为它只保存一个数据值），该方法的第一个参数是对象，第二个参数是属性。

属性描述符不仅有一个2，还包含三个特性：

- writable(可写)
- enumerable（可枚举）
- configurable（可配置）

以上三个值默认都是true。

属性描述符修改方法 Object.defineProperty(..) 可以添加一个新属性或者修改一个已有属性（前提是该属性的configurable为true也就是可配置的）并对特性进行设置。

``` javascript
var myObject = {};

Object.defineProperty(myObject,'a',{
    value:2,
    writable:true,
    configurable:true,
    enumerable:true
})

console.log(myObject.a) //2
```

## writable决定属性是否可写

当writable为false时为不可写，不可写时对属性值的修改会静默失败（silently failed），严格模式下会出错TypeError。

``` javascript
var myObject = {};

Object.defineProperty(myObject,'a',{
    value:2,
    writable:false,
    configurable:true,
    enumerable:true
})

myObject.a=4

console.log(myObject.a) //2 可见修改失败并且没有报错且静默失败了
```

严格模式：

``` javascript
"use strict"
var myObject = {};

Object.defineProperty(myObject,'a',{
    value:2,
    writable:false,
    configurable:true,
    enumerable:true
})

myObject.a=4

console.log(myObject.a) //try.html:24 Uncaught TypeError: 
//Cannot assign to read only property 'a' of object '#<Object>'
//可见严格模式下会报TypeError
```

## Configurable决定属性描述符是否可以配置

Configurable为true则可配置，为false则不可配置，设置为false之后再也无法改变该属性的任何属性描述符，也就是无法再设置为true，是单向操作，无法撤销。

当Configurable为false时尝试修改就会出错TypeError，但有一个例外，即使Configurable为false，我们依旧可以把writable的状态由true改为false，但无法从false改为true。

Configurable为false时还会禁止删除这个属性，删除操作静默失败。

## Enumerable决定属性是否会出现在对象的属性枚举中

Enumerable决定属性是否会出现在对象的属性枚举中，比如for..in循环，enumerable为false则不会出现在枚举中，但仍然可以正常的访问它。
