# 各种很有趣的编程方式

``` javascript
var a = 1;
(function func(val){
    console.log(val.a)
})(window)
```

在这个例子中 window作为参数会作为val被传入立即执行的func函数。
