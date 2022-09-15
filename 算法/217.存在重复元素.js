/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;i<nums.length;j++){
//             console.log('i\n',i)
//             console.log('j\n',j)
//             if(nums[i]===nums[j]){
//                 return true
//             }
//         }
//     }
//     return false
// };
// var containsDuplicate = function(nums) {
//     nums.sort((a,b)=>a-b)
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===nums[i+1]){
//             return true
//         }
//     }
//     return false
// };
var containsDuplicate = function(nums) {
    let arr2 =[...new Set(nums)]
    if(arr2.length !== nums.length){
        return true
    }
    return false
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = containsDuplicate;
// @after-stub-for-debug-end