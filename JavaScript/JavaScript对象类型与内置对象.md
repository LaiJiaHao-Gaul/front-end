# JavaScript之对象类型与内置对象

总结来源： 《你不知道的JavaScript 上卷》

对象是JavaScript的基础，JavaScript中有六种主要类型：

- string（简单基本类型）
- number（简单基本类型）
- boolean（简单基本类型）
- null（简单基本类型）
- undefined（简单基本类型）
- object（对象）

上面说的六种中，前五种本身并不是对象。null在用typeof null时会返回object是因为bug，实际上null本身是基本类型。  
无论什么对象在底层都表示为二进制，在JavaScript中二进制前三位都为0的话会被判断为object类型，null的二进制表示全是0，自然前三位也是0，所以执行typeof时会返回“object”。

JavaScript中还有一些**对象子类型**，通常被称为**内置对象**，我们可以称之为**复杂基本类型**。

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error
  
虽说被称为内置对象，但其实只是一些内置函数，这些内置函数可以当做构造函数(new)来使用，从而可以构造一个对应子类型的新对象。

那么简单基本类型和复杂基本类型有什么区别呢？它们之间又有什么关系呢？看代码：

``` javascript
var str = "I am a string";
console.log(typeof str) //string
console.log(str instanceof String) //false

var newString = new String("i am a string");
console.log(typeof newString) // object
console.log(newString instanceof String) //true
```

可见构造方式不同，检查类型时得到的结果也会不同。

再看：

``` javascript
var str = "I am a string";

console.log(str.length) //13

console.log(str.charAt(3)) //m
```

我们把字符串称之为简单基本类型，上面例子中的"I am a string"是字面量，是一个不可变的值，它本身不该包含方法，但是JavaScript引擎在我们对简单基本类型执行操作时会自动帮我们完成一些操作，在上面的例子中，JavaScript自动把字符串字面量转换成一个String对象，不过这个行为是暂时的，也就是完成操作之后对"I am a string"用typeof检查依旧会得出string而不是object。这些操作在数值字面量、布尔字面量来说也适用。

null和undefined没有对应的构造形式，它们只有文字形式。Date只有构造形式，没有文字形式。