// function Dog() {}
// let dog = new Dog()
// console.log(dog) // Dog {}
// console.log(dog.__proto__ === Dog.prototype) // true

//此处说明new调用Dog函数，dog返回值为构造函数为Dog的空对象， 并且dog的实例原型 === Dog的构造函数原型


// 1. 出现了原型链连接

//------------------

// function Dog(name, age) {
//   this.name = name
//   this.age = age
//   console.log(this)
// }
// let dog = new Dog('cherry', 3)
// console.log(dog)

// 2. this = dog 构造函数调用时， 即使不设置返回值 默认返回this


// function Dog(name,age){
//     this.name = name;
//     this.age = age;
//     return {name:"doge",age:5};
// }
// let dog = new Dog("cheems",3);
// console.log(dog); // { name: 'doge', age: 5 }
// console.log(dog.__proto__ === Dog.prototype) // false
//当构造函数被new运算符执行时，如果构造函数返回值是一个对象（必须是对象类型），那么就会返回这个对象。否则返回在前面例子中提到创建的新对象。需要注意返回既定的对象的[[Prototype]]并不会和创建的新对象一样指向构造函数的prototype
//更直白的说，如果显式return一个对象，那么就会返回这个对象。
// 否则返回this（this也就是用new构造方法得到的新对象）
// 显式return一个对象时，这个对象的[[Prototype]]不会和new得到的对象一样指向构造函数的Prototype 例如：
// function Dog(name,age){
//     this.name = name;
//     this.age = age;
// }
// let dog = new Dog("cheems",3);
// console.log(dog); // { name: 'doge', age: 5 }
// console.log(dog.__proto__ === Dog.prototype) // true

//---------------------------

//总结 new运算符执行的操作：

//1. 创建一个新对象，即{}
//2. 让这个对象的[[Prototype]]属性指向构造函数的prototype
//3. 构造函数内部的this被绑定到这个对象
//4. 如果构造函数返回值是一个对象，那么就会返回这个额对象，否则返回创建的对象。

// 根据以上 模拟new运算符的实现

// function New(fn){
//     if(typeof fn !== 'function'){
//         throw Error(fn + 'is not a function')
//     }
//     let newObj = {}
//     newObj.__proto__ = fn.prototype;
//     let arg = Array.prototype.slice.call(arguments,1)
//     let res = fn.apply(newObj,arg);
//     return res instanceof Object?res:newObj;
// }

// function New(fn,...arg){
//     if(typeof fn !=='function'){
//         throw Error(fn+' is not a function')
//     }
//     let newObj = {}
//     newObj.__proto__ = fn.prototype
//     let res = fn.apply(newObj,arg)
//     // res是fn把newObj当做this执行后的返回值
//     return res instanceof Object?res:newObj
//     // 判断res是不是Object类型，是的话返回res，否则返回newObj
// }

function New(fn,...arg){
    let newObj = Object.create(fn.prototype)
    let res = fn.call(newObj,arg)
    return res instanceof Object?res:newObj
}