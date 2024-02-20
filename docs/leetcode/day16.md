# 滑动窗口 #

**3. 无重复字符的最长子串**

```js

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    const len = s.length
    if (len === 1) return 1

    let slow = 0
    let res = 0
    const map = new Map()

    for (let fast = 0; fast < len; fast++) {
        const cur = s[fast]
        const isExist = map.has(cur)
        const lastIndex = map.get(cur)

        if (isExist && slow <= lastIndex) {
            slow = lastIndex + 1
        }

        map.set(cur, fast)
        res = Math.max(res, fast - slow + 1)
    }

    return res
};

```