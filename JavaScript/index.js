function Person(){
    this.name = "kaola";
    this.age = 24;
    this.func1 = function(){
        
    }
}
//实例化这个类
var bei = new Person();
//使用for-in遍历这个对象
for(keys in bei){
    console.log(bei[keys])
}