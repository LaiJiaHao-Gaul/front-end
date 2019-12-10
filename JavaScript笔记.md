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

