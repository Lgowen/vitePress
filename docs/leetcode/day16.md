# 面试题 #

**3. 无重复字符的最长子串**

```js

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

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
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if (len === 1) return 1
    
    const map = new Map()
    let res = 0
    let slow = 0

    for (let fast = 0; fast < len; fast++) {
        const cur = s[fast]
        const isExist = map.has(cur)
        const repeatIndex = map.get(cur)
        if (isExist && repeatIndex >= slow) {
            // 保证慢指针指向的位置是一直向右走的
            slow = repeatIndex + 1 // 当且仅当当前字符串上一次出现的位置在慢指针的右边时才需要改变
        }

        res = Math.max(res, fast - slow + 1) // 更新最大值
        map.set(s[fast], fast) // 设置或更新每一个字符在字符串中的位置
    }


    return res

};

// 时间复杂度: O(n)
// 空间复杂度: O(存入map中字符串的个数)

```


**718. 最长重复子数组**

```js

// 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

// 示例 1：

// 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// 输出：3
// 解释：长度最长的公共子数组是 [3,2,1] 。
// 示例 2：

// 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// 输出：5

// dp[i][j] 表示以nums1[i]结尾 和nums2[j]结尾

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    const dp = new Array(len1 + 1) // 创建一维数组

    for (let j = 0; j <= len1; j++) {
        dp[j] = new Array(len2 + 1).fill(0) // 创建二维数组并且把每一项都填充为0
    }
    
    let res = 0 // 最终返回的结果
    for (let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            // 如果当前项相同
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1 // 则去拿前缀公共长度的值 + 1表示当前最大公共长度
            }
            res = Math.max(res, dp[i][j])
        }
    }

    return res
};

// 时间复杂度: O(M * N)
// 空间复杂度: O(M * N)

```


**5. 最长回文子串**

```js

// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

function longestPalindrome(s) {
    let resLeft = 0;
    let resRight = 0;
    let maxLen = 0;
    const len = s.length
    if (len === 1) return s
    
    let i = 1; //设i为中心的索引 i = 0时的结果没有意义

    while(i < len) {
        let left = i - 1;
        while (left >= 0 && s[i] === s[left]) {
            left--;
        }
        let right = i + 1;
        while (right < s.length && s[i] === s[right]) {
            right++;
        }
        const end = right; //这里的right是右边第一个跟中心s[i]不相等的字符索引，保存下来，等会i直接跳到end处，可减少重复中心的计算
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (maxLen < right - left - 1) {
            maxLen = right - left - 1;
            // 上面循环结束时left和right分别指向的是结果字符串的前后两项 所以结果字符串的首尾位置需要分别+1 -1
            // 这里的resLeft和resRight也可以作为字符串截取api中的参数 即left + 1 和 right
            resLeft = left + 1; 
            resRight = right - 1;
        }
        i = end; 
    }
    return s.substring(resLeft, resRight + 1); // 截取字符串
};

```