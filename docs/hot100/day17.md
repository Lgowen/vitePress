# 合并区间 #

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