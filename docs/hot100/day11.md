
# 最大子数组 #

**152. 乘积最大子数组**

```js
// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 
// 子数组
// （该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 示例 1:

// 输入: nums = [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: nums = [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0]
    let preMin = nums[0]
    let preMax = nums[0]
    let temp1 = 0
    let temp2 = 0
    for (let i = 1; i < nums.length; i++) {
        temp1 = preMin * nums[i]
        temp2 = preMax * nums[i]
        preMin = Math.min(temp1, temp2, nums[i])
        preMax = Math.max(temp1, temp2, nums[i])
        res = Math.max(preMax, res)
    }
    return res
};
```


**53. 最大子数组和**

```js
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组
// 是数组中的一个连续部分。

// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const len = nums.length
    if (len === 1) return nums[0]
    let preSum = maxSum = nums[0]
    for (let i = 1; i < len; i++) {
        if (preSum > 0) {
            preSum += nums[i]
        } else {
            preSum = nums[i]
        }
        maxSum = Math.max(preSum, maxSum)
    }
    return maxSum
};
```
