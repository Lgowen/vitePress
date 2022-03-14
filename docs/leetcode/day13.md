# 双指针 #

**剑指 Offer 21. 调整数组顺序使奇数位于偶数前面**

```js

// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {

    let left = 0 // 初始化left指针
    let right = nums.length - 1 // 初始化right指针

    while (left < right) {
        
        // 当左指针为偶数且右指针为奇数时调换位置 同时指针继续运动
        if (nums[left] % 2 === 0 && nums[right] % 2 === 1) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
        
        // 假如左指针为奇数则继续运动
        if (nums[left] % 2 === 1) {
            left++
        }


        // 假如右指针为奇数则继续运动
        if (nums[right] % 2 === 0) {
            right--
        }

        // while (left < right && nums[left] % 2 === 1) {
        //     left++
        // }

        // while (left < right && nums[right] % 2 === 0) {
        //     right--
        // }

        // [nums[left], nums[right]] = [nums[right], nums[left]]


    }

    return nums
};


```