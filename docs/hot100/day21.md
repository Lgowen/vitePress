# 搜索旋转排序数组 #

**33. 搜索旋转排序数组**

```js
// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {

        const mid = left + ((right - left) >> 1)
        if (nums[mid] === target) return mid

        if (nums[mid] >= nums[left]) {
            // [left, target, mid]
            if (nums[left] <= target && nums[mid] >= target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // [mid, target, right]
            if (nums[mid] <= target && nums[right] >= target) {
                 left = mid + 1
            } else {
                 right = mid - 1
            }
        }
    }

    return -1
};

```