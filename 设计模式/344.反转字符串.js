/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let times = Math.floor(s.length/2),
        len = s.length;
    for(let i=0;i<times;i++){
        temp = s[i]
        s[i]=s[s.length-1-i]
        s[s.length-1-i]=temp
    }
};
// @lc code=end
