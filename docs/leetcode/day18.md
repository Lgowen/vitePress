# 普通数组 #

**53. 最大子数组和**

```js

// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

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

**56. 合并区间**

```js

// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sortedArr = intervals.sort((a, b) => a[0] - b[0])
    let pre = sortedArr[0]
    const res = []

    for (let i = 1; i < sortedArr.length; i++) {
        const cur = sortedArr[i]
        if (pre[1] >= cur[0]) {
            pre[1] = Math.max(pre[1], cur[1])
        } else {
            res.push(pre)
            pre = cur
        }
    }

    res.push(pre)
    return res
};

```




