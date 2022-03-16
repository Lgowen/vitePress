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

**剑指 Offer 57. 和为s的两个数字**

```js

// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]
// 示例 2：

// 输入：nums = [10,26,30,31,47,60], target = 40
// 输出：[10,30] 或者 [30,10]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0 // 左边的指针
    if (nums[left] > target) return [] // 最小值都大于target 则没有ans

    let right = nums.length - 1 // 右边的指针

    while (left < right) {
        const leftNum = nums[left] // 左边的值
        const rightNum = nums[right] // 右边的值
        
        // 假如右边的值都大于target值了 都不用再继续算了 算个der
        if (rightNum > target) {
            right--
            continue
        }
        
        const sum = leftNum + rightNum // 算总数

        if (sum === target) return [leftNum, rightNum] // 假如与target值相等就返回
        
        // 否则就继续移动指针
        if (sum > target) {
            right--
        } else {
            left++
        }
        
    }
};

```


**剑指 Offer 58 - I. 翻转单词顺序**

```js


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 1. 调用库函数 Array.prototype.reverse
    return s.trim().split(/\s+/).reverse().join(' ')

    // 2. 实现库函数方法
    const reverse = a => {
        // 两端指针实现 数组项翻转
        const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]
        let l = 0, r = a.length - 1

        while (l < r) swap(a, l++, r--)

        return a
    }

    return reverse(s.trim().split(/\s+/)).join(' ') 
  
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let i = 0, len = s.length, j = len - 1, arr = [];

    // 先去除字符串前面或后面的多余空格
    while(s[i] === ' ')
        i++;
    while(s[j] === ' ')
        j--;
    s = s.slice(i, j + 1);
    
    i = 0;
    j = 0;
    while(j < len) {
        // j 指针找到第一个空格为止
        while(j < len && s[j] !== ' ')
            j++;
        arr.unshift(s.slice(i, j));
        // j 指针找到第一个非空格字符为止
        while(j < len && s[j] === ' ')
            j++;
        i = j;
    }
    return arr.join(' ');
};

```