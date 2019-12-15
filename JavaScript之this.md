# JavaScript之this

总结来源： 《你不知道的JavaScript 上卷》

this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

``` javascript
var Tom = {name:'Tom'},
    Jack = {name : 'Jack'};

function callMyname () {
    console.log(this.name)
}

callMyname.call(Jack) //Jack
callMyname.call(Tom) //Tom
```

call和apply方法的第一个参数都可以显式绑定this。

JavaScript中this的绑定规则：

## 默认绑定

默认绑定：直接使用不带任何修饰的函数引用进行调用，就会使用默认绑定。

``` javascript
function foo(){
    console.log(this)
}
var a = 2 ;

foo() //2
```

## 隐式绑定

细品以下代码：

``` javascript
function foo(){
    console.log(this.a)
}

var obj2 = {
    a:42,
    foo:foo
};

var obj1 = {
    a:2,
    obj2:obj2
};

obj1.obj2.foo(); //42
```

``` javascript
function foo(){
    console.log(this.a)
}

var obj2 = {
    a:42,
    foo:foo
};

var obj1 = {
    a:2,
    obj2:obj2.foo
};

obj1.obj2(); //2
```

``` javascript
function foo(){
    console.log(this.name)
}
var name = 'global'
var a = {
    name : 'a'
}
setTimeout(foo,1000) //global 谨慎回调函数丢失this而把this绑定到全局对象或者undefined上
setTimeout(foo.bind(a),1000)  //a
```

this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

需要考虑调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象。

对象属性引用连中只有上一层或者说最后一层在调用位置用起作用。

## 显式绑定

就是用 call/apply/bind 方法强制把this绑定在我们希望的对象上。

## new绑定

``` javascript
function Dog(foot,mouse,shout){
    this.foot = foot;
    this.mouse = mouse;
    this.shout = shout
    this.logThis = function(){
        console.log(this)
    }
}
var wangcai = new Dog(4,1,'嘻嘻嘻');
console.log(wangcai.foot)//4
console.log(wangcai.mouse)//1
console.log(wangcai.shout)//嘻嘻嘻
```

使用new来调用函数，或者说发生构造函数调用时，会自动执行以下操作：

1、创建（或者说构造）一个全新的对象。  
2、这个新对象会被执行[[Prototype]]连接。
3、这个新对象会绑定到函数调用的this。
4、如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。


## 优先级

new > call/apply/bind > 调用位置上下文 > 默认绑定

## 箭头函数

箭头函数里this是和调用链中最最外层保持一致的。

``` javascript
const test = () => {
    console.log(this)
}

const a = {
    test:test
}

const b = {
    foo:a
}

test('Tom')//window
b.foo.test()//window
```

以上。