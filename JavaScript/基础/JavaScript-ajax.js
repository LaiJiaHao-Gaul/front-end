// '/data/test.json
//get请求
// const xhr = new XMLHttpRequest()
// xhr.open('GET','./data/test.json',true)
// xhr.onreadystatechange=()=>{
//     if(xhr.readyState===4){
//         if(xhr.status===200){
//             alert(xhr.responseText)
//         }
//     }
// }
// xhr.send(null)

// post请求
// const xhr = new XMLHttpRequest()
// xhr.open('POST', 'http://localhost:8000/api/user/login', true)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText)
//     }
//   }
// } 
// xhr.setRequestHeader('Content-Type', 'application/json')
// const postData = {
//   username: 'zhangsan',
//   password: '123'
// }
// xhr.send(JSON.stringify(postData))

//fetch方法发请求
//axios发请求