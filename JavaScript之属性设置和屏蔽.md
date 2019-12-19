# JavaScript之属性设置和屏蔽

知识总结来源： 《你不知道的JavaScript 上卷》

我们获取一个对象属性的时候(\[[Get]])，实际上JavaScript会检查对象内部有没有这个属性，如果没有，则遍历该对象的\[[Prototype]]，直至找到返回该属性，或者查找完整个\[[Prototype]]找不到，就返回undefined。

那么我们思考一下：当我们对一个对象属性赋值的时候，如果我们当前对象内部并没有该属性，但该对象的\[[Prototype]]链上有，会发生什么，用代码感受一下：

``` javascript
var obj={
    a:2,
    b:3
}
var obj2 = Object.create(obj)

obj2.a =10;
console.log(obj2.a)  //10
console.log(obj2.__proto__.a) //2
console.log(obj2) // Object {a:10}
```

赋值行为是成功的，并且把obj2.a赋值在obj2对象中，并且可以看见我们访问obj2.a的时候访问到了10，也就是“先访问对象本身，如果得到了值就返回，没得到才去遍历\[[Prototype]]链”的结论也是正确的。我们访问obj2.a的时候会"屏蔽"obj2的\[[Prototype]]上层的a，这种行为我们称之为“屏蔽”

继续思考：如果我们把obj2的\[[Prototype]]上层的a设置为只读的(writable:false)，然后对obj2.a进行赋值，会发生什么呢？

``` javascript
var obj={
    b:3
}
Object.defineProperty(
    obj,
    'a',
    {
        configurable:true,
        writable:false,
        enumerable:true,
        value:2
    }
)
var obj2 = Object.create(obj)

obj2.a =10; //赋值成功了吗 表现与之前是否一致呢？
console.log(obj2.a) //2  可见赋值失败 
console.log(obj2.__proto__.a) //2 可见原型链上层的对象内部a也没变

```

这时候的赋值失败，我们更愿意称之为：没有发生屏蔽。

再思考： 如果\[[Prototype]]链上层存在a，但它是一个setter，我们对obj.a赋值会发生什么？

``` javascript
var obj={
    b:3,
    get a(){
        return this._a
    },
    set a(value){
        return this._a = 1
    }
}

var obj2 = Object.create(obj)

obj2.a = 10 ; //赋值会成功吗？
console.log(obj2.a) // 1  赋值失败，可见赋值行为最终只会调用setter函数
console.log(obj2)//Object {_a:1} 确实证明setter被调用
```

事实证明，如果obj2的\[[Prototype]]链上层的a是setter的话，对obj2.a进行赋值并没有用，赋值只会调用\[[Prototype]]上层的这个setter。