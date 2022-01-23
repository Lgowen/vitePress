**1. 剑指 Offer 03. 数组中重复的数字(easy)**

```javascript
// 找出数组中重复的数字。

// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = new Map(); // 创建哈希表
  for (const num of nums) {
    const mapNum = map.get(num); // 从哈希表取值
    if (mapNum >= 0) return mapNum; // 假如值存在则直接返回
    map.set(num, num); // 将值放入哈希表建议映射关系
  }
};
```

**2. 剑指 Offer 53 - I. 在排序数组中查找数字 I(easy)**

```javascript
// 统计一个数字在排序数组中出现的次数。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力哈希解法
var search = function (nums, target) {
  const map = {}; // 创建对象保存数据以做计数
  for (const num of nums) {
    const mapNum = map[num];
    map[num] = mapNum ? mapNum + 1 : 1;
  }
  return map[target] ?? 0;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分加哈希
var search = function (nums, target) {
  const middleIndex = Math.floor(nums.length / 2) - 1; // 找中间位置
  const middleNum = nums[middleIndex]; // 获取中间值
  target > middleNum ? "假如目标值大于中间值则目标值在中间值右边" : "反之左边"; // 这里做递归查找index
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] > target || nums[right] < target) return 0; // 边界处理 假如最小值都大于target值 或者 最大值都小于target值则无解

  while (nums[left] < target) left++; // 寻找第一个出现的target
  while (nums[right] > target) right--; // 寻找最后一个出现的target

  return right - left + 1; // 计算出现的次数
};
```

**3. 剑指 Offer 53 - II. 0 ～ n-1 中缺失的数字(easy)**

```javascript
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
//
// 示例 1:

// 输入: [0,1,3]
// 输出: 2

// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // [0, 1, 3]
  // 0 2 Math.floor((0 + 2) / 2) = 1 middle:1 === nums[middle]:1 left++ left = 1
  // 1 2 Math.floor((1 + 2) / 2) = 1 middle:1 === nums[middle]:1 left++ left = 2
  // 2 2 Math.floor((2 + 2) / 2) = 2 middle:2 !== nums[middle]:3 right-- right = 1
  // 不符合left <= right 跳出循环

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (middle === nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};
```
