// let s = "A man, a plan, a canal: Panama"
let s = 'hello '
let str=(s.toLowerCase().match(/[a-z0-9]/g)||[]).join('')
// let res = str.join('')===str.reverse().join('')
let mid = Math.floor((str.length)/2)
for(let i=0,j=str.length-1;i<mid;i++,j--){
  if(str[i]!==str[j]){
    return false
  }
}

console.log(str)