/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    matrix.reverse()
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix.length;j++){
            let temp = matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }
    return matrix
};
// @lc code=end
/*
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
[
    [7,8,9],
    [4,5,6],
    [1,2,3]
]
[
    [7,4,1],
    [8,5,2],
    [9,6,3]
]
*/
