// dom操作
let list = document.getElementById('list')
let container = document.createDocumentFragment()
for(let i=0;i<10;i++){
    let node = document.createElement('li')
    node.innerText=`${i}${i}${i}`
    container.appendChild(node);
}
list.appendChild(container)

