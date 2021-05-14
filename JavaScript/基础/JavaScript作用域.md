# JavaScript 作用域

该知识点总结来源：[JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)

JavaScript 采用 **词法作用域** (lexical scoping),也就是**静态作用域**。

## 静态作用域 和 动态作用域 的区别

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
