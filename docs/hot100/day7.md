
# 和为 K 的子数组 #

**560. 和为 K 的子数组**

```js
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = { 0: 1 }
    let prefixNum = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        prefixNum += nums[i]

        if (map[prefixNum - k]) {
            count += map[prefixNum - k]
        }

        if (map[prefixNum]) {
            map[prefixNum]++
        } else {
            map[prefixNum] = 1
        }
    }

    return count
    
};

```