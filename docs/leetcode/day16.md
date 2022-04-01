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

function longestPalindrome(s) {
    let left = 0
    let right = 0

    for (let i = 0; i < s.length; i++) {
        findMaxStr(i, i) // 奇数
        findMaxStr(i, i + 1) // 偶数
    }

    function findMaxStr(i, j) {

        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++
        }
        
        // 当前i 和 j终止的地方比上一次长的话就替换指针位置
        if (j - i - 1 > right - left - 1) {
            left = i
            right = j
        }

    }

    return s.slice(left + 1, right) // 裁剪字符串
};

```


**事件循环**

```js

setTimeout(() => {
    Promise.resolve().then(() => {
		console.log(88)
	})
    console.log(1)
}, 1)

setTimeout(() => {
    console.log(2)
}, 0)

Promise.resolve(() => {
	console.log(3)
    return 5
}).then((val) => {
   console.log(4, val)
    return 6
}).catch(() => {
    console.log(5)
}).finally((val) => {
    console.log(6, val)
})

console.log(7)

// 由于不同浏览器的最低延迟时间不同，以上的定时器执行顺序也有可能不同 （chrome和Safari的最小延迟为1ms，firefox和ie的最小延迟是0）
// 这也解释了为什么在chrome浏览器下 以上的两个定时器会先打印1 而不是2

// Promise.resolve(() => { console.log(3); return 5}) Promise.resolve了一个函数 所以在.then(val => console.log(4, val); return 6) 这里接收到的val是其resolve的函数
// 1. Promise.resolve() -> 将promise的状态从pending改为fullfilled 因此会将.then()中的回调注册事件队列中去（微任务）
// 2. 主执行栈console.log(7) -> 打印7
// 3. 此时执行栈为空 故从任务队列中看是否有等待被放入执行栈中执行的微任务 
// 4. 拿出第一个任务：.then中的回调函数 打印 4 (() => console.log(3); return 5) 执行完后会将.finally()中的回调放入微任务队列中 tips: finally中的回调函数没有形参
// 5. 此时执行栈为空 从微任务队列中取出.finally()中的回调函数 -> 打印 6 undefined 
// 6. 这时候微任务队列中也为空 即本轮事件循环结束

// 开始第二轮
// 1. 从宏任务队列中取出定时器1，Promise.resolve().then() 将其回调函数注册进入微任务队列
// 2. 打印1
// 3. 执行栈为空 任务队列中存在微任务 取其出来执行 打印88
// 4. 执行栈为空 微任务队列为空 该轮事件循环结束

// 开始第三轮
// 1. 从宏任务队列中取出定时器2 执行打印2
```