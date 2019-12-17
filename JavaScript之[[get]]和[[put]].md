# JavaScript之[[Get]]和[[Put]]

知识总结来源： 《你不知道的JavaScript 上卷》

[[Get]]和[[Put]]是对象默认的内置操作，可以理解为算法函数。

## [[Get]]

``` javascript
var myObject = {
    a:2
}

console.log(myObject.a)//2
```

myObject的行为看起来像是在myObject中查找名字为a的属性，实际上实现了[[Get]]操作。

[[Get]]的行为描述：对象默认的内置[[Get]]操作首先在对象中查找是否有名称相同的属性，如果找到就会返回这个属性的值，如果没有找到，就会执行另外一种非常重要的行为，遍历[[Prototype]]链，遍历完依旧没有找到，则返回undefined。

分析代码：

``` javascript
var myObject = {
    a:undefined
}
console.log(myObject.a) //undefined
console.log(myObject.b) //undefined
```

我们能看见相同的返回结果，但是两次操作在底层的查找行为是否一致呢？明显是不一致的。
myObject.a不需要遍历原型链，而myObject.b是遍历完原型链返回的undefined。

## [[Put]]

而[[Put]]操作一般是由“给对象的属性赋值”触发，而[[Put]]被触发时的实际行为，取决于许多因素，最重要的因素是这个对象中是否已经存在这个属性。

如果存在这个属性：[[Put]]算法的大致操作如下：  
1. 查看属性是否是<span id = "jump">访问描述符</span>？如果是并且存在setter就调用setter方法。
2. 属性的数据描述符中 writable 是否是false？是false的话在非严格模式下会静默失败，严格模式下TypeError。
3. 如果不是访问描述符 切 writable为true，则将该值设置为属性的值。
   
如果不存在这个属性，[[Put]]操作会更加复杂...日后再说



[访问描述符](#jump)：[JavaScript中的getter和setter](https://github.com/PythonerNunu/front-end/blob/master/JavaScript%E4%B9%8B[[get]]%E5%92%8C[[put]].md)