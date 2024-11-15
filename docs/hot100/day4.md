# 最大正方形 #

**221. 最大正方形**

```js

// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const len1 = matrix.length
    const len2 = matrix[0].length
    const dp = new Array(len1).fill(0).map(() => new Array(len2).fill(0))
    let maxSquare = 0
    for (let i = 0; i < len1; i++) {
        for(let j = 0; j < len2; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
                maxSquare = Math.max(maxSquare, dp[i][j])
            }
        }
    }
    return maxSquare * maxSquare
};
```