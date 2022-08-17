//思路:
//  通过循环遍历数组,用[临时变量1]不停地对比,找到最小的数,该最小数与左边某位置的数交换位置


//先实现一个交换方法 根据传入的 数组与索引值交换 arr:Array (array,index,index2)
function switchLocation(arr,index,index2){
    let temp = arr[index]
    arr[index]=arr[index2]
    arr[index2]=temp
}


const arr = [6, 41, 41, 19, 18, 43, 40, 40, 50, 17, 38] // arr.length = 11
const arr2 = [19,38,32,6,26,37,44,4,18,40,31,12,23,22]
//
function mysort(arr) {
    for (var i = 0; i < arr.length; i++) { //i 是最终被换位的元素索引以及循环起步位置
        // console.log('作为被交换元素的索引以及循环起步位置的 i 值为',i);
        let tempValue = arr[i] // 临时数 用来比较
        let tempIndex = i     //临时索引 用来最终交换
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < tempValue) {//arr[j]比临时数小
                tempValue = arr[j]     // 则临时数与临时索引都更新
                tempIndex = j
                switchLocation(arr,i,tempIndex)
                console.log('数字交换位置',arr[i],arr[tempIndex]);
                // console.log('临时索引变成',tempIndex);
                
            }
        }
    }
    return arr
}
mysort(arr2)
console.log(arr2)


// 思路:
//  通过循环遍历数组,用[临时变量1]不停地对比,找到最小的数,该最小数与左边某位置的数交换位置


// 先实现一个交换方法 根据传入的 数组与索引值交换 arr:Array (array,index,index2)
// function switchLocation(arr,index,index2){
//     let temp = arr[index]
//     arr[index]=arr[index2]
//     arr[index2]=temp
// }


// const arr = [6, 41, 41, 19, 18, 43, 40, 40, 50, 17, 38] // arr.length = 11
// const arr2 = [19,38,32,6,26,38,44,4,19,40,32,12,22,22]
// //
// function mysort(arr) {
//     for (var i = 0; i < arr.length-1; i++) { //i 是最终被换位的元素索引以及循环起步位置
//         // console.log('作为被交换元素的索引以及循环起步位置的 i 值为',i);
//         let min=arr[i] // min 用来比较

//         for (var j = i; j < arr.length-1; j++) {
//             if (arr[j] < min) {//arr[j]比min小
//                 let temp = min
//                 min = arr[j]
//                 arr[j]=temp
//                 console.log('数字交换位置',arr[j],min);
//             }
//         }
        
//     }
//     return arr
// }
// mysort(arr2)
// console.log(arr2)