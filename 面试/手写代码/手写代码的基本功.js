//数组常用函数

//改变原始数组

//splice
//splice(开始删除元素的索引，删除的数量，增加的元素...)
// var arr = [1,2,3,4,5]
// arr.splice(0,3,'123')
// console.log(arr)

//slice(不改变原数组，创建新数组)
//slice方法将数组中一部分元素浅复制存入新的数组对象，并且返回这个数组对象。
//slice(开始复制的元素的索引，结束的索引(该索引的元素不包含在结果中))
// -------------------------
// var arr = [1,2,3,4,{a:'nice'}]
// var arr2 = arr.slice(1,4)
// console.log(arr2)//[2,3,4]
// console.log(arr.slice(-1)[0])//快速取得数组最后一项

//---------------------------

// let arr = [1,2,3,4]
// console.log(arr.join('-')) // 1-2-3-4
// console.log(arr.join(',')) // 1,2,3,4 数组拼接成字符串，传入参数为拼接字符。
// console.log(arr.toString()) //1,2,3,4 数组转换为字符串，默认

//----------------------------

// let arr = [1,2,3,4]
// let arr2 = [5,6,7]
// let item = '1231'
// let num = 99

// let arr3 = arr.concat(arr2) //[1,2,3,4,5,6,7] 合并数组方法
// let arr4 = arr.concat(item) //[1,2,3,4,'1231']
// let arr5 = arr.concat(num) // [1,2,3,4,99]

//--------------------------------


// let arr=[32131,213123,1231312,12312321]
// console.log(arr.indexOf(12312321))//寻找传入值得索引并返回，无则返回-1

// -----------------------------

// let arr = [123,312312,213131,true,false] 
// console.log(arr.includes(123)) // true    includes 检查数组是否包含传入参数，返回布尔值。
// console.log(arr.includes(true)) // true 
// console.log(arr.includes(false)) // true 

// -------------------------------

// 字符串常用函数

// let str = 'thank you! boss'
// let newStr = str.substr(6,3)//substr截取字符串，从索引6开始，截取3个 不影响原字符串
// console.log(str) //没改变原字符串，
// console.log(newStr) //返回值为从索引值6 长度为3的字符串，

// -----------------------------

// let str = 'thank you! boss!'
// let newStr = str.substring(6,9)  //substring截取字符串
// console.log(str) // 'thank you! boss!' 没改变原字符串
// console.log(newStr) // 'you' 返回值为 从索引6开始 到索引9（不包括9

// ------------------------------

//对象的常用函数

// Object.prototype.hasOwnProperty(prop)
// //该方法仅在目标属性为对象自身属性时返回true，而当该属性是从原型链中继承而来或根本不存在时，返回false
// var o = {prop:1}
// o.hasOwnProperty('prop')//true
// o.hasOwnProperty('toString')//false
// o.hasOwnProperty('formString')//false

// ------------------------------

//Object.create方法 创建 新对象，并为其设置原型。

// var parent = {hi: 'Hello'};
// var o = Object.create(parent, {
//     prop: {
//         value: 1
//     }
// });
// o.hi; // 'Hello'
// // 获得它的原型
// Object.getPrototypeOf(parent) === Object.prototype; // true 说明parent的原型是Object.prototype
// Object.getPrototypeOf(o); // {hi: "Hello"} // 说明o的原型是{hi: "Hello"}
// o.hasOwnProperty('hi'); // false 说明hi是原型上的
// o.hasOwnProperty('prop'); // true 说明prop是原型上的自身上的属性。

// var obj = Object.create(null); // 创建空对象
// console.log(typeof obj.toString5) // undefined

// --------------------------------

// 类数组对象的转换方法
// function abb(){
//     let arr = [...arguments]
//     console.log(arguments instanceof Array)
//     console.log(arr instanceof Array)
// }
// abb(1,2,3,5)

// let arrayLike = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3
// }
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
// console.log(arr2 instanceof Array) // true
