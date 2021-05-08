function Person(){
    this.age=10
    this.name='lily'
}
var a = new Person()
var b = new Person()
console.log(a.__proto__.age)
