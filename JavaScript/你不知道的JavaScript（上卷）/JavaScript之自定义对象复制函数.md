# JavaScript之自定义对象复制函数

知识总结来源： 《你不知道的JavaScript 上卷》

``` javascript

function mixin(sourceObj,targetObj){
    for(var i in sourceObj){
        if(!(i in targetObj)){
            targetObj[i]=sourceObj[i]
        }
    }
    return targetObj
}
var obj = {
    a:2,
    b:3, 
    foo: function(){
        console.log('ljh nb')
    }
}
var obj2 = {}

mixin(obj,obj2)
console.log(obj2) //Object {a:2,b:3}
obj2.foo=function(){
    console.log('ljh sb')
}

```

自定义mixin函数复制对象,复制出来的对象与源对象在复制之后就没有什么“关系”了，也就是改变obj2.b并不影响obj.b。

但是这种复制遇到函数的时候，只能得到函数对象的引用，JavaScript无法可靠的复制函数对象。
