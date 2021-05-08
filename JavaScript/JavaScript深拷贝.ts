function deepClone(obj: Object) {
    let newObj=null;
  if (obj instanceof Object) {
    newObj = {}
  }
  if(obj instanceof Array){
    newObj = []
  }

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (typeof obj[i] === 'object') {
        newObj[i] = deepClone(obj[i])
      } else {
        newObj[i] = obj[i]
      }
    }
  }
  return newObj
}
// 拷贝对象
const obj1 = {
  a: 1,
  b: { c: '☆' },
  d: { e: '☆' }
}
const obj2 = deepClone(obj1)
obj2.b.c = '★'
obj2.d.e = '★'
console.log(obj1)
console.log(obj2)

//拷贝数组
const arr1 = [{ a: '☆' }, { b: { c: '☆' } }]
const arr2 = deepClone(arr1)
arr2[0].a = '★'
arr2[1].b = '★'
console.log(arr1)
console.log(arr2)

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