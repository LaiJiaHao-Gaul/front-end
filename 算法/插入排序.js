//插入排序 需要两个循环 
//   外层循环从1++左向右,内层循环从右向左length-1 --
//预定义一个把元素从左往右挪的操作.(arr[i+1]=arr[i])
//内层循环判断
//      如果 < arr[j] 则 arr[j] 向右挪
//      否则 arr[j+1]赋值为该元素
//边界条件, 1: 自身是最小元素的情况
// const arr = [37,50,27,18,16,5,41,26,46,15,39,3]
const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
const arr2 = [...arr]
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (temp < arr[j]) {
            arr[j + 1] = arr[j]
            if (j === 0) {
                arr[0] = temp
            }
            j--
        }
        if (temp > arr[j]) {
            arr[j + 1] = temp
        }

    }

    return arr
}
const newArr = insertSort(arr)
console.log(arr2)
console.log(newArr);


