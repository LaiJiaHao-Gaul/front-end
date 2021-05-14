# JavaScript之 如何给任何想遍历的对象定义@@iterator

知识总结来源： 《你不知道的JavaScript 上卷》

如标题所说我们希望给想遍历的对象定义@@iterator，但在这之前，我们得先了解@@iterator.

``` javascript
var arr = [1,3,5,6]

for(var i of arr){
    console.log(
        i
    )
}
//1
//3
//5
//6
```

在我们对数组执行for of遍历操作的时候，实际上就是在访问@@iterator。

我们试试手动遍历数组。

``` javascript
var arr = [1,3,5,6]
var itrt = arr[Symbol.iterator]();

itrt.next() //Object {value: 1, done: false}
itrt.next() //Object {value: 3, done: false}
itrt.next() //Object {value: 5, done: false}
itrt.next() //Object {value: 6, done: false}
itrt.next() //Object {value: undefined, done: true}

```

根据上面的代码，我们可以看出 可以通过使用数组的 Symbol.iterator方法，该方法似乎会返回一个对象，对象有一个next方法，该方法返回一个对象 包含value 和 done 表示数据和是否遍历完成。

根据观察得出的结论，尝试去给对象定义一个@@iterator。

``` javascript
var obj = {
    a:2,
    b:3
}

Object.defineProperty(
    obj,
    Symbol.iterator,
    {
        enumerable:false,
        writable:false,
        configurable:true,
        value:function(){
            var _this = this,
                index = 0,
                keys = Object.keys(obj);
            return {
                next:function(){
                    return {
                        value:_this[keys[index++]],
                        done: (index > keys.length)
                    }
                }
            }
        }
    }
)
var it = obj[Symbol.iterator]()
it.next() // Object {value: 2, done: false}
it.next() // Object {value: 3, done: false}
it.next() // Object {value: undefined, done: true}
```

这段代码不算好写，记住看着调用方式去写就会好很多。
