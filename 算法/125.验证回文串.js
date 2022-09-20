/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function (s) {
    // let str = (s.toLowerCase().match(/[a-z0-9]/g) || []).join('')
    // let mid = Math.floor((str.length) / 2)
    // for (let i = 0, j = str.length - 1; i < mid; i++, j--) {
    //     if (str[i] !== str[j]) {
    //         return false
    //     }
    // }
    // return true
    let str=s.toLowerCase().match(/[a-z0-9]/g)||[]
    return str.join('')===str.reverse().join('')
};
// @lc code=end

