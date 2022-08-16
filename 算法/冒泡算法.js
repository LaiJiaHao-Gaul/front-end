//冒泡排序 命名:为什么叫"冒泡排序"?
//  自然界中 大的泡泡往往先冒出来,在排序的时候,先把大的先排好,因此叫做冒泡排序.
//思路 首先要有一个 Switch 方法,用于交换两个元素的位置.方便以后调用.
//要有循环,从位置 1 开始,一直与左边的元素比较,(tips:数组的第一个元素位置是 0,而我们从位置 1 开始是为了一直与左边的元素比较.)
//  判断(是否大于左边元素) 
//     是:则进入下一次循环
//     否:则(小于左边元素)交换位置.
//边界条件
//  因为每一次循环都会让最大的数被交换到数组的最后面,这个数已知是排序好了的,下次排序不该遍历到该数,因此需要一个记录一个 maxcount,并在每一个 for 循环整体结束的时候对该值进行自减操作.作为循环遍历的终点,同时当该数<1的时候,结束循环.

//实现交换元素位置. 先传数组,后传索引
function switchLocation (arr,index) {
    let temp=arr[index];
    arr[index]=arr[index-1]
    arr[index-1]=temp;
    return arr
}

// const arr = [29,10,14,37,13,12,11,1]
const arr = [29,28,5,1,5,2,4,5,3,66,7]
console.log('old arr',arr)
function bubbleSort(arr){
    let maxcount=arr.length-1;
    while(maxcount>=1){
        for(let i=1;i<=maxcount;i++){//注意 从 1 开始,因为是和左边元素对比
            if(arr[i]<arr[i-1]){
                switchLocation(arr,i)
            }
        }
        maxcount--;
    }
    return arr
}
bubbleSort(arr)
console.log('new arr',arr)
