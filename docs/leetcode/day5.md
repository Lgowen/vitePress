# 查找算法 #

**1. 剑指 Offer 04. 二维数组中的查找(Medium)**

```javascript
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// 示例:
// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 从二维数组的左下角开始循环
var findNumberIn2DArray = function (matrix, target) {
  let x = matrix.length - 1;
  let y = 0;

  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) {
      x--;
    } else {
      y++;
    }
  }

  return false;
};
```

**2. 剑指 Offer 11. 旋转数组的最小数字(easy)**

```javascript
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const middleIndex = Math.floor((right - left) / 2) + left; // +left防止越界
    const middle = numbers[middleIndex];
    if (middle < numbers[right]) {
      // 假如中间值小于最右边的值 说明最小值是它自己或者在左边
      right = middleIndex;
    } else if (middle > numbers[right]) {
      // 假如中间值大于最右边的值 说明最小值在右边
      left = middleIndex + 1;
    } else {
      // 假如中间值等于最后边的值 说明存在重复数字
      right--;
    }
  }
  // 当left === right时跳出循环
  return numbers[left];
};
```

**3. 剑指 Offer 50. 第一个只出现一次的字符(easy)**

```javascript
// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:

// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:

// 输入：s = ""
// 输出：' '

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) return " "; // 空字符直接返回' '
  const len = s.length;
  if (len === 1) return s; // 长度为一的字符直接返回该字符
  const map = new Map(); // 哈希表存值
  const arr = []; // 用数组维护字符的顺序
  for (const str of s) {
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    } else {
      map.set(str, 1);
      !arr.includes(str) && arr.push(str); // 避免重复往数组中推入相同的key
    }
  }
  for (const key of arr) {
    if (map.get(key) === 1) return key; // 遍历数组从哈希表中寻找key对应value为1的key 碰到直接返回
  }

  return " "; // 否则返回 ' '
};
```
