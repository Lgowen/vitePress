# 字符串 #

**1. 剑指 Offer 05. 替换空格(easy)**

```javascript
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let str = ""; // 创建空字符出啊
  const len = s.length; // 获取字符串长度
  // 遍历字符串
  for (let i = 0; i < len; i++) {
    // 假如当前字符为空格
    if (s[i] === " ") {
      str += "%20"; // 原字符拼接 %20
      continue; // 不走下面逻辑 继续循环
    }
    str += s[i]; // 拼接当前字符
  }
  return str;
};
```

**2. 剑指 Offer 58 - II. 左旋转字符串(easy)**

```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const stringArr = s.split(""); // 字符串转数组
  // 首先反转0 到 n - 1的字符
  let left = 0;
  let right = n - 1;
  const lastIndex = s.length - 1;
  while (left < right) {
    [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
    left++;
    right--;
  }

  // 反转n 到 s.length - 1的字符
  left = n;
  right = lastIndex;
  while (left < right) {
    [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
    left++;
    right--;
  }

  // 完整字符反转
  left = 0;
  right = lastIndex;
  while (left < right) {
    [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
    left++;
    right--;
  }

  return stringArr.join(""); // 数组转字符串
};
```
