/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     for(let i =nums.length-1;i>-1;i--){
//         if(nums[i]===0){
//             nums.push(nums.splice(i,1)[0])
//         }
//     }
//     return nums
// };
var moveZeroes = function(nums) {
    let index = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[index++]=nums[i]
        }
    }
    while(index<nums.length){
        nums[index++]=0
    }
    return nums
};
// @lc code=end

