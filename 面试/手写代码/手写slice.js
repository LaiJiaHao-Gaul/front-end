/**
 * slice 方法表现:
 * 1 不改变原数组,但引用类型数据地址可能也会被复制 tips:需要 浅拷贝 一个备份
 * 如果不传值 直接浅拷贝数组
 * 如果只传 start 值, 则返回 index 为start开始的所有数组
 * 
 * 
 * 
 * 
 * 
 * 
 */

Array.prototype.my_slice=function(start=0,end){
    const newArr = []
    let len = this.length
    start = start === 0?start:start
    end = end === undefined?len:end
    start = start<0?start+len:start
    start = Math.max(0,start);
    end = end<0?end+len:end;
    end = Math.min(end,len)
    for(var i = start;i<end;i++){
        newArr.push(this[i])
    }
    return newArr
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.my_slice()); // [0,1,2,3,4,5,6,7,8,9]
console.log(arr.my_slice(1)); // [1,2,3,4,5,6,7,8,9]
console.log(arr.my_slice(1, 4)); // [1,2,3]
console.log(arr.my_slice(1, 20)); // [1,2,3,4,5,6,7,8,9]
console.log(arr.my_slice(5, 1)); // []
console.log(arr.my_slice(-1)); // [9]
console.log(arr.my_slice(-1, -5)); // []
console.log(arr.my_slice(-1, -22)); // []
console.log(arr.my_slice(-22, -1)); // [0,1,2,3,4,5,6,7,8]
console.log(arr.my_slice(-22)); // [0,1,2,3,4,5,6,7,8,9]
console.log(arr.my_slice(-5, -1)); // [5,6,7,8]
console.log(arr.my_slice(1, -12)); // []
console.log(arr.my_slice(1, -2)); //  [1,2,3,4,5,6,7]

