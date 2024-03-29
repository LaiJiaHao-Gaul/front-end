function deepClone(obj:object){
  let newObj = null
  if(obj instanceof Object){
    newObj = {};
  }
  if(obj instanceof Array){
    newObj = []
  }
  for(let index in obj){
    if(typeof obj[index] === 'object'){
      newObj[index] = deepClone(obj[index])
    } else {
      newObj[index] = obj[index]
    }
  }
  return newObj
}
const obj1 = {
  a: 1,
  b: { c: '☆' },
  d: { e: '☆' }
}
const newObj = deepClone(obj1)
newObj.b.c = '★'
newObj.d.e = '★'
console.log(obj1)
console.log(newObj)

//拷贝数组
// const arr1 = [{ a: '☆' }, { b: { c: '☆' } }]
// const arr2 = deepClone(arr1)
// arr2[0].a = '★'
// arr2[1].b = '★'
// console.log(arr1)
// console.log(arr2)

// const obj1 = {
//   a: 1,
//   b: { c: '☆' },
//   d: { e: '☆' }
// }
// const obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.b.c = '★'
// obj2.d.e = '★'
// console.log(obj1)
// console.log(obj2)

// const arr1 = [{ a: '☆' }, { b: { c: '☆' } }]
// const arr2 = JSON.parse(JSON.stringify(arr1))
// arr2[0].a = '★'
// arr2[1].b = '★'
// console.log(arr1)
// console.log(arr2)