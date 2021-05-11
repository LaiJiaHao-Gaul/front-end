// Function.prototype.mybind=function() {
//     const args=Array.prototype.slice.call(arguments)//把类数组arguments变成数组 以便作为之后的参数 
//     const t = args.shift()//取出args数组的第一项并赋值给t
//     const self = this//this此时是调用mybind函数的函数对象  
//     return function(){
//         return self.apply(t,args)
//     }
// }


Function.prototype.bind1 = function(){
    let arg1 = Array.prototype.slice.call(arguments)
    let t = arg1.shift()
    let self = this;
    return function(){
        return self.apply(t,arg1)
    }
}

var obj = {
  name: 'ming',
  age: 21
}
var obj2 = {
  getName: function () {
    console.log(this.age)
  }
}
var obj3=obj2.getName.bind1(obj)