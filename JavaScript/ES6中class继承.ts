class Father {
    name:string
    constructor(name:string) {
        this.name=name
    }
    sayHi(){
        console.log(`${this.name} say:'Hi'`)
    }
}

class Son extends Father{
    age:number
    constructor(name:string,age:number){
        super(name)
        this.age=age
    }
    getAge(){
        console.log(`${this.name} age is ${this.age}`)
    }
}

let ming = new Son('ming',21)
ming.sayHi()
ming.getAge()
