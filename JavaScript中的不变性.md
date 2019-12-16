# JavaScript的不变性

总结来源： 《你不知道的JavaScript 上卷》

先声明，我们实现的属性或者对象不可变都是浅不变性，也就是说，他们只会印象目标对象和它的直接属性。如果目标对象引用了其他对象（数组、对象、函数等），其他对象的内容不受不变性影响，仍是可变的。

### 方法一 对象常量

结合使用 writable:false 和 configurable:false 就可以创建一个真正的常量属性（不可修改、重定义或者删除）。

``` javascript
var myObject = {};

Object.defineProperty(myObject,'a',{
    value:2,
    writable:false,
    configurable:false
})

//接下来无论是改变属性还是删除属性都会导致报错TypeError。
```

### 方法二 禁止拓展 Object.preventExtensions(..)

Object.preventExtensions(..)可以禁止一个对象添加新属性并且保留已有属性。

``` javascript
var myObject = {
    a:2
};

Object.preventExtensions(myObject);

myObject.b = 3;
myObject.a = 1;
console.log(myObject.b)//undefined
console.log(myObject.a)//1 可改 但不可增加新属性
delete myObject.a;
console.log(myObject.a)//undefined  可删

```

### 方法三 密封 Object.seal(..)

Object.seal(..)会创建一个“密封”的对象，这个方法会在一个现有对象上调用Object.preventExtensions(..)并把所有现有属性标记为configurable:false。

所以密封之后不能添加新属性，也不能重新配置和删除任何现有属性（可以改变属性的值）

``` javascript
var myObject = {
    a:2
};

Object.seal(myObject);

myObject.b = 3;
myObject.a = 1;
console.log(myObject.b)//undefined 无法添加新的属性
console.log(myObject.a)//1 可改
delete myObject.a;
console.log(myObject.a)//1 无法删除
```

### 方法四 冻结 Object.freeze(..)

Object.freeze(..)会创建一个冻结对象，这个方法会对现有对象调用Object.seal(..)并把所有 数据修改权限 属性 标记为 writable:false， 这样就无法修改它们的值了。

**再次强调，以上的方法都不会影响 对象内部 对 其他对象的引用**