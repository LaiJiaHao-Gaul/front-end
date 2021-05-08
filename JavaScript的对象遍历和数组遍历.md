# JavaScript之 对象遍历和数组遍历

知识总结来源： 《你不知道的JavaScript 上卷》

## 对象遍历  for...in

``` javascript
var obj = {
    a:'ljh',
    b:'ljw',
    c:'hxy'
}
//对象遍历 for..in
for(var i in obj){
    console.log(i)
}
// a
// b
// c
//可见得到的是属性名而非属性值
for(var i in obj){
    console.log(obj[i])
}
//ljh
//ljw
//hxy
// 得我们自己手动获取

```

## 数组遍历 for..of

es6之前的方法->通过遍历数组下标来指向值，而非直接遍历值。例如：

``` javascript
var arr = ['aaa','bbb','ccc']

//数组遍历
for(var i=0;i<arr.length;i++){
    console.log(i)
}

//0
//1
//2

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//aaa
//bbb
//ccc
```

然而在es6 有了for..of 就可以直接遍历数组的值

``` javascript
var arr = ['aaa','bbb','ccc']

//数组遍历
for(var i of arr){
    console.log(i)
}
//aaa
//bbb
//ccc 直接得到了值。

```
