# JavaScript原型与原型链

知识总结来源： [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)

``` javascript
function Person(){}
Person.prototype.name = 'Jack'
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) //'Jack'
console.log(person2.name) //'Jack'
```

上面的代码片段很简单，很容易分析出来，name属性不是对象person1自身拥有的，而是在Person函数的prototype上的，在我们访问person1.name的时候，如果从对象自身找不到，那么就会去\[[prototype]]链上找，这一点我在其他文章讲过，那么\[[prototype]]到底是什么呢？




如果是接触过面向类的语言的编程人员，在学习JavaScript的时候，很难不把JavaScript也当成面向类的语言，但JavaScript实际上纯粹是面向对象的，为什么这么说？

在面向类的语言中，类可以被实例化多次，并且每个实际相互间是独立的，是完全没有联系的，但是在JavaScript中，用构造函数创建的每一个对象（我们称之为对象，而非实例），它们的\[[Prototype]]关联的是同一个对象，是相互关联的。看代码

``` javascript
function Person(){

}
Person.prototype.name = 'Jack';
var person1 = new Person()
var person2 = new Person()
person1.__proto__.age = 10;
console.log(person2.age) //10  可见每个对象都通过它们的原型相互关联
```

上面例子中我们可以发现只改变了person1.\_\_proto__，却直接改变了person2.age，这是因为它们是同一个构造函数构造的，关联的其实是同一个对象，“实例”化之后依旧是相关联的，这不符合面向类的思想，因此，不得不提出的是，JavaScript是面向对象的语言，并不面向类。

``` javascript
function Person(){}

var person1 = new Person()

function pullback(obj){
    if(!(obj===null)){
        console.log(obj)
        pullback(Object.getPrototypeOf(obj))
    }else{
        console.log(obj)
    }
}

pullback(person1)
//Person {}
//Object {name: "Jack", constructor: }
//Object {...}
//true
```

在上面我做了一个实验，实验证明原型链的终点是null

注意几点:

- prototype是函数才有的属性
- 通过Object.getPrototypeOf(对象) 可以获得一个对象的原型，也就是这个obj.\_\_proto__
- 对象可以通过__proto__访问得到对象的原型

