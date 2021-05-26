# JavaScript之闭包

总结来源： 《你不知道的JavaScript 上卷》

书上对“闭包”的定义：当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

理解这个定义，得注意到 “所在的词法作用域” 指的是 定义的位置。

再次引申之前讲过的**JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候决定**。

示例代码：

``` javascript
function foo(){
    var a = 2;

    function bar(){
        console.log(a); 
    }

    return bar;
}

var baz=foo(); //foo()返回了bar函数，并赋值给baz

baz(); //2 这个函数调用实际上只是通过不同的标识符引用调用了foo内部的函数bar
```

细品这段代码的同时再去看上面的定义，就能够体会到闭包定义说的“即使函数是在当前词法作用域之外执行，也可以记住并访问所在的词法作用域。”

**无论函数在哪里被调用，它都会记住自己被定义时所在的词法作用域。**

1、闭包可以防止变量被外部影响  
2、闭包形成私有作用域  
3、 闭包的作用域不会被销毁  
闭包是利用垃圾回收机制，通过对作用域保留引用从而避免作用域被销毁，从而保持私有参数和变量。同时因为JavaScript用的是词法作用域，所以内部函数只会访问到私有变量，从而防止变量和参数的"意外污染"。 、

垃圾回收机制可能会在其他文章总结。

具体怎么利用垃圾回收机制的呢。 还是看上面代码片段，可以看见
` var baz=foo() `  这个语句其实就能通过保持引用防止垃圾回收。

防止垃圾回收就可以让我们保持我们的变量，例如：

``` javascript
function foo(){
    var a = 0;
    function bar(){
        console.log(a)
    }

    function change(){
        a++;
        console.log('a++')
    }
    return {
        bar : bar,
        change : change
    }
}

var baz = foo();

baz.bar(); //0
baz.change(); //a++
baz.bar(); //1
```

如果不通过闭包保持引用，作用域被垃圾回收了发生什么呢？ 看如下代码：

``` javascript
function foo(){
    var a = 0;
    function bar(){
        console.log(a++)
    }
    return bar()
}
foo()//0
foo()//0
```

可见在第二次执行foo函数的时候，第一次的函数作用域已经被垃圾回收机制回收了，变量a在第二次调用的时候又被重新定义。可是如果把变量a放在global中又有可能发生意想不到的错误。
