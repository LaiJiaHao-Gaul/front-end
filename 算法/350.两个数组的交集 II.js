/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     let nums3=[]
//     if(nums1.length<nums2.length){
//         for(i of nums1){//[4,9,5]
//             for(let j=0;j<nums2.length;j++){//[9,4,9,8,4]
//                 if(i === nums2[j]){
//                     nums3.push(i)
//                     nums2.splice(j,1)
//                     j--;
//                     break
                    
//                 }
//             }
//         }
//     }else{
//         for(i of nums2){
//             for(let j=0;j<nums1.length;j++){
//                 if(i === nums1[j]){
//                     nums3.push(i)
//                     nums1.splice(j,1)
//                     j--;
//                     break
//                 }
//             }
//         }
//     }
//     return nums3
// };
// var intersect = function(nums1, nums2) {
//     let nums3 = [],
//     i = 0,
//     j = 0;
//     nums1.sort((a,b)=>a-b)
//     nums2.sort((a,b)=>a-b)
//     while(i<nums1.length&&j<nums2.length){
//         if(nums1[i]===nums2[j]){
//             nums3.push(nums1[i])
//             i++;
//             j++;
//         }else if(nums1[i]<=nums2[j]){
//             i++
//         }else{
//             j++
//         }
//     }
//     return nums3;
// };
// @lc code=end

