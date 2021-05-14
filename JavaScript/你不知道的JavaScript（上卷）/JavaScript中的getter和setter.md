# JavaScript中的 getter 和 setter

知识总结来源： 《你不知道的JavaScript 上卷》

当提起 访问描述符 就是指的 Getter 和 Setter 了

对象默认的[[Put]]和[[Get]]操作分别可以控制属性值的设置和获取。

我们可以给某单个属性上使用getter和setter部分改写默认操作。

getter和setter都是隐藏函数，getter会在获取属性值时调用，setter会在设置属性值时调用。

当我们给一个属性定义getter和setter或者两者都设置时，这个属性会被定义为**访问描述符**。JavaScript会忽略访问描述符的value和writable特性，取而代之的是关注set和get（还有configurable和enumerable）特性。

理论说太多无用，看代码：

``` javascript
var myObject = {
    get a(){
        return 2;
    }
}

Object.defineProperty(
    myOBject, //目标对象
    'b', //目标对象的属性名
    {  //描述符
        get:function(){ //注意  这是b的 getter
            return a * 10;  //getter的返回值就是访问属性时得到的返回值
        }
    })
console.log(myObject.a)  //2 访问属性得到了getter函数的返回值
console.log(myObject.b)  //20 访问属性得到了getter函数的返回值
console.log(Object.getOwnPropertyDescriptor(myObject,'a')) //Object
//{
//  get: ,
//  set: undefined, 
//  enumerable: true,
//  configurable: true
//} 
//可见并不关注value和writable

```

以上两种方式都可以定义到getter和setter，我在代码中定义了a和b的getter，因此会在对象中创建一个不包含值的属性a和b，对于这两个属性的访问会自动调用隐藏函数getter，这个函数的返回值会被当做属性访问的返回值。

但其实getter和setter是成对出现的，只定义一个的话通常会产生意料之外的行为。

## setter

setter函数的定义需要注意的是必须定义一个形参，否则是会报错的。

``` javascript

var obj2 = {
    get a(){
        return this._a
    },
    set a(value){
        this._a=value
    }
}
obj2.a=2
console.log(obj2.a)//2  
```

以上是正确的getter和setter定义方式，当然用defineProperty也可以，定义set的时候我没写`this.a=value`是因为这样写在赋值的时候会出现栈溢出，至于为什么栈溢出，读者们自己思考。
