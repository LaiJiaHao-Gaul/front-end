# JavaScript之浅复制

总结来源： 《你不知道的JavaScript 上卷》

ES6定义了Object.assign(..)方法实现浅复制。

浅复制Object.assign(..)：底层的实现就是键值对适用=操作符来赋值，所以源对象属性（比如writable）的一些特性不会被赋值到目标对象。
