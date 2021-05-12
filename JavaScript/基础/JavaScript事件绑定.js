// const btn = document.getElementById('btn')
// btn.addEventListener('click',(event)=>{
//     event.preventDefault();
//     console.log('click')
// })

const container = document.getElementById('container')
container.addEventListener('click',(event)=>{
    event.preventDefault()
    const target=event.target
    if(target.nodeName === 'A'){
        //事件处理
    }else{
        //加载更多逻辑
    }
})