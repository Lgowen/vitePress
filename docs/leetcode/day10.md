# 动态规划 #

**1. 剑指 Offer 46. 把数字翻译成字符串**


```js

// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"


// dp[i] = dp[i - 2] + dp[i - 1] -> 假如第i - 2和第i - 1两位数字能连续翻译的话
// dp[i] = dp[i - 1] -> 假如第i - 2和第i - 1两位数字不能连续翻译的话

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    const str = num.toString() // 转字符串
    const len = str.length // 获取长度

    let pre = 1 // 初始化dp[0] -> 因为翻译前0个数字的方法有一种
    let cur = 1 // 初始化dp[1] -> 因为翻译前1个数字的方法有一种

    for (let i = 2; i < len + 1; i++) {
        const temp = Number(str[i - 2] + str[i - 1])
        if (temp >= 10 && temp <= 25) {
            const newPre = cur
            cur = pre + cur
            pre = newPre
        } else {
            pre = cur
        }
    }

    return cur // dp[i]
};
```


**2. 剑指 Offer 48. 最长不含重复字符的子字符串**

```js

// 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if (len === 1) return 1
    let i = 0 // 
    let j = 1 // 滚动的索引 -> dp[j] 以j结尾的数字能获取的最大值
    const map = {} // map保存每个字母最新出现的索引位置
    let max = 0  // 初始化最大值
    let temp = 1 // 初始化中间值 -> dp[j - 1]
    map[s[0]] = 0

    while (j <  len) {
        
        i = map[s[j]] // 获取该字符最近出现的位置

        i = i === undefined ? -1 : i // 没出现的给个初始值

        map[s[j]] = j // 设置当前字符的位置
        
        // dp[j] = dp[j - 1] < j - i ? dp[j - 1] + 1 : j - i
        // 假如某个字符没有出现过 则当前最大值+1 否则当前最大值为两次出现字符的位置之差
        temp = temp < j - i ? temp + 1 : j - i
        
        max = Math.max(temp, max) // 每次取该轮最大值与前面的最大值相比较
        j++
    }

    return max
};
```