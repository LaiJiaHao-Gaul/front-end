// function Dog(){}
// let dog = new Dog()
// console.log(dog);
// console.log(dog.__proto__===Dog.prototype);
//可以发现被返回的对象的[[prototype]]属性指向了构造函数 Dog 的 Dog.prototype



// function Dog(name, age) {
// 	this.name = name;
// 	this.age = age; //Dog { name: 'cheems', age: 3 }
// 	console.log(this);

// }
// let dog = new Dog("cheems", 3);
// console.log(dog);//Dog { name: 'cheems', age: 3 }
//这里可以发现其实 new 操作会偷偷地 return this;
//既然他偷偷返回 this,那我直接返回一个对象,会发生什么呢?
// function Dog(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	return { name: "doge", age: 5 }//我直接返回了一个对象
// }
// let doge =new Dog("cheems",3); //这里传入参数改变 name 和 age,返回的到底是哪个对象呢?
// console.log(doge);//Doge { name: "doge", age: 5 }
//返回了一个 name 为 doge 的对象,也就是我主动返回的对象
//可见,如果构造函数的返回值是一个对象,那么就会返回这个对象.否则偷偷返回 this
//而主动返回的对象的[[prototype]]并不会和创建的新对象一样指向构造函数的 prototype.

//那么如果我返回的不是对象而是值呢?
function Dog(name, age) {
	this.name = name;
	this.age = age;
	return 1//我直接返回了一个数字而非对象
}
let doge =new Dog("cheems",3); //这里传入参数改变 name 和 age,返回的到底是哪个对象呢?
console.log(doge) //Dog { name: 'cheems', age: 3 }
//可见构造函数返回一个值而非对象的时候,依旧返回隐性返回的对象.

//至此总结一下 
//  function New(fn)  fn 为构造函数
//  首先我们要新建一个对象,并且把对象的原型链指向构造函数的 prototype
//  fn 执行时需要显式绑定 this .
//  如果他的构造函数返回值是个对象,就返回他这个对象,否则返回我创建的对象.

//开始模拟
function New(fn,...arg){
    if(typeof fn !== 'function'){
        throw Error(fn+'is not a function')
    }
    const newObj = Object.create(fn.prototype)
    let res=fn.apply(newObj,arg)
    return res instanceof Object?res:newObj
}











