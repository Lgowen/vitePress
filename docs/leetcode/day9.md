# 动态规划 #

**1. 剑指 Offer 42. 连续子数组的最大和**

```javascript
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
// [-2, 1, -2, 4, 3, 5, 6, 1, 5]
// dp[n] = dp[n - 1] + nums[i] (dp[n - 1] > 0)
// dp[n] = nums[i] (dp[n - 1] <= 0)
var maxSubArray = function(nums) {  
    let maxSum = nums[0] // 初始化最大值 取dp[0]
    const len = nums.length // 获取dp长度
    for (let i = 1; i < len; i++) {
        const preSum = nums[i - 1] // 获取dp[n - 1]的值
        preSum > 0 && (nums[i] += preSum) // 假如前n - 1的连续和最大值为负数时 则继续相加当前位是没有意义的 否则才继续相加
        maxSum = Math.max(maxSum, nums[i]) // 取前一次的最大值与本次的最大值中较大的那个值
    }

    return maxSum // 返回该值
};


```


**2. 剑指 Offer 47. 礼物的最大价值**

```javascript
// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

// 示例 1:

// 输入: 
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

/**
 * @param {number[][]} grid
 * @return {number}
 */
// dp[x][y] 表示能拿到 = Max(dp[x][y - 1], dp[x - 1][y]) + grid[i][j]
// 时间复杂度: O(MN)
// 空间复杂度: O(1)
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// [
//   [1, 4, 5],     [1, 4, 5]                    [1, 4, 5]                      [1, 4, 5]                     [1, 4, 5]
//   [2, , ],   ->  [2, Max(2 + 5, 4 + 5), ] ->  [2, 9, Max(9 + 1, 5 + 1)]  ->  [2, 9, 10]                 -> [2, 9, 10]                   
//   [6, , ]        [6, , ]                      [6, ,  ]                       [6, Max(6 + 2, 9 + 2),  ]     [6, 11, Max(10 + 1, 11 + 1) = 12] 
// ]
var maxValue = function(grid) {
    const x = grid.length // x轴长度
    const y = grid[0].length // y轴长度
    let maxProfit = 0

    // 初始化第一列dp
    for (let i = 1; i < x; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    // 初始化第一行dp
    for (let j = 1; j < y; j++) {
        grid[0][j] += grid[0][j - 1]
    }
    // 从dp[1][1]开始走 减少了循环
    for (let i = 1;i < x; i++) {
        for (let j = 1; j < y; j++) {
            grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j])
        }
    }
    
    return grid[x - 1][y - 1] // 返回到达右下角的值
};

```