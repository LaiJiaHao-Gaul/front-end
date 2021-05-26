var myundefined = undefined,
    mynum = 10,
    mystring = 'babadsds',
    myboolean = true,
    mysymbol = Symbol('aaa'),
    myarr = [],
    myobj = {};

function myfunc(){
    return 'dsdsd'
}

function getType(obj){
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
// console.log(typeof myundefined)
// console.log(typeof mynum)
// console.log(typeof mystring)
// console.log(typeof myboolean)
// console.log(typeof mysymbol)
// console.log(typeof myfunc)
// console.log(typeof myarr)
// console.log(typeof myobj)

// 原生typeof返回值
//undefined
//number
//string
//boolean
//symbol
//function
//object （与预期不同）
//object （与预期不同）


// console.log(
//   Object.prototype.toString.call(myundefined).slice(8, -1).toLowerCase()
// )
// console.log(Object.prototype.toString.call(mynum).slice(8, -1).toLowerCase())
// console.log(Object.prototype.toString.call(mystring).slice(8, -1).toLowerCase())
// console.log(
//   Object.prototype.toString.call(myboolean).slice(8, -1).toLowerCase()
// )
// console.log(Object.prototype.toString.call(mysymbol).slice(8, -1).toLowerCase())
// console.log(Object.prototype.toString.call(myfunc).slice(8, -1).toLowerCase())
// console.log(Object.prototype.toString.call(myarr).slice(8, -1).toLowerCase())
// console.log(Object.prototype.toString.call(myobj).slice(8, -1).toLowerCase())


// console.log(Object.prototype.toString.call(myundefined))
// console.log(Object.prototype.toString.call(mynum))
// console.log(Object.prototype.toString.call(mystring))
// console.log(Object.prototype.toString.call(myboolean))
// console.log(Object.prototype.toString.call(mysymbol))
// console.log(Object.prototype.toString.call(myfunc))
// console.log(Object.prototype.toString.call(myarr))
// console.log(Object.prototype.toString.call(myobj))

console.log('undefined : ' + getType(myundefined))
console.log("number : " + getType(mynum))
console.log('string : ' + getType(mystring))
console.log('boolean : ' + getType(myboolean))
console.log('symbol : ' + getType(mysymbol))
console.log('function : ' + getType(myfunc))
console.log('array : ' + getType(myarr))
console.log('object ： ' + getType(myobj))

// 正确的返回值
// undefined
// number
// string
// boolean
// symbol
// function
// array
// object