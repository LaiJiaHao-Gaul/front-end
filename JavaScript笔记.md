# JavaScript笔记

    本文作用如标题，会标明笔记的来源，如果有要学习的，直接去链接处学习。

## 作用域

该知识点总结来源：[JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)

JavaScript 采用 **词法作用域** (lexical scoping),也就是**静态作用域**。

### 静态作用域 和 动态作用域 的区别

因为 JavaScript 采用的是词法作用域，函数的作用域在函数**定义的时候决定**。

而与词法作用域相对的是动态作用域，函数的作用域是在函数**调用的时候决定**。

``` JavaScript

var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

///输出结果为1
```

可见该函数的作用域在函数**定义的时候就已经决定了**

无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。

## LHS查询 和 RHS查询

来源： 《你不知道的JavaScript(上卷)》 第一章。

分析一个操作是LHS查询还是RHS查询可以从目的分析：  
如果查找的目的是 对变量进行复制，那么就会使用LHS查询；  
如果目的是 获取变量的量，就会使用RHS查询。

LHS查询失败不报错，会隐式创建全局变量，而不成功的RHS引用会抛出ReferenceError异常。

ReferenceError 与 作用域判别失败 相关，而 TypeError则代表作用域判别成功，而对结果的操作是非法或不合理的。

严格模式禁止自动或隐式地创建全局变量。