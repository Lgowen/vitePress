# 回文 #

**5. 最长回文子串**

```js
// 给你一个字符串 s，找到 s 中最长的 回文子串

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   const len = s.length

  if (len === 1) return s

  let left = 0
  let right = 0

  function handleSearch(l, r) {

    while (l >= 0 && r < len && s[l] === s[r] ) {
      l--
      r++
    }

    if (r - l > right - left) {
      right = r
      left = l
    }
  }

  for (let i = 0; i < len; i++) {
    handleSearch(i, i)
    handleSearch(i, i + 1)
  }


  return s.slice(left + 1, right)
};
```

**647. 回文子串**

```js
// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

// 回文字符串 是正着读和倒过来读一样的字符串。

// 子字符串 是字符串中的由连续字符组成的一个序列。

// 示例 1：

// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const len = s.length
    if (len === 0) return 0

    let count = 0



    function handleStr(l, r) {
        while (l >= 0 && r < len && s[l] === s[r]) {
            l--
            r++
            count++
        }
    }

    for (let i = 0; i < len; i++) {
        handleStr(i, i)
        handleStr(i, i + 1)
    }

    return count
};

```