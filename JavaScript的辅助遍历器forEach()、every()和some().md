# JavaScript的辅助遍历器forEach()、every()和some()

知识总结来源： 《你不知道的JavaScript 上卷》

### forEach()

``` javascript
var arr = ['33','44','55']

function foo(item,index){
    console.log('item：'+ item)
    console.log('index:'+ index)
}
arr.forEach(foo)
/* 
item：33
index:0
item：44
index:1
item：55
index:2
*/
```

可见forEach()方法接收一个回调函数并且把它应用到每个元素上，对回调函数的传参时，第一个参数是数组项的值，第二个参数是数组项的索引。 上面的代码写的很清楚啦。

### every()

``` javascript
var arr = ['33','44','55']

function foo(item,index){
    return item<=54;
}
function bar(item,index){
    return item*=3;
}
console.log(arr.every(foo)) //false
arr.every(bar)
console.log(arr) //Array(3) ["33", "44", "55"] 原数组没有变化
```

every函数会一直执行到回调函数返回false，并且不会改变原数组！

### some()

``` javascript
var arr = ['33','44','55']

function foo(item,index){
    return item<=54;
}
function bar(item,index){
    return item*=3;
}
console.log(arr.some(foo)) //true
arr.some(bar)
console.log(arr) //Array(3) ["33", "44", "55"] 原数组没有变化
```

some函数会一直执行到回调函数返回true，并且不会改变原数组！