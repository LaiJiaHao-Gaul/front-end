/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
*/

/*
思路:用一个额外数组空间解决
*/
let arr = [1, 1, 2, 3, 4, 4, 2, 5, 6, 5, 6, 7, 9, 8, 7, 8, 9]

var singleNumber2 = function (nums) {
  let arr = []
  for (let i of nums) {
    if (arr.indexOf(i) === -1) {
      arr.push(i)
    } else if (arr.indexOf(i) !== -1) {
      arr.splice(arr.indexOf(i), 1)
    }
  }
  return arr[0]
}

/*
无额外空间解决思路
用两个 for 循环解决,但是题目要求线性时间复杂度.
用异或形式解决
*/

var singleNumber = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i]
  }
  return nums[0]
}
