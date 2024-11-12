# 括号 #

**22. 括号生成**

```js
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []

    function dfs(l, r, str) {
        if (str.length === n * 2) {
            res.push(str)
            return
        }

        if (l > 0) {
            dfs(l - 1, r, str + '(')
        }

        if (l < r) {
            dfs(l, r - 1, str + ')')
        }
    }

    dfs(n, n, '')
    return res
};

```


**20. 有效的括号**

```js
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 示例 1：

// 输入：s = "()"

// 输出：true

// 示例 2：

// 输入：s = "()[]{}"

// 输出：true

// 示例 3：

// 输入：s = "(]"

// 输出：false

// 示例 4：

// 输入：s = "([])"

// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    const map = new Map([
        ['}', '{'],
        [']', '['],
        [')', '(']
    ])

    for (const str of s) {
        if (map.has(str)) {
            if (!stack.length || map.get(str) !== stack[stack.length - 1]) return false
            stack.pop()
        } else {
            stack.push(str)
        }
    }

    return !stack.length
};

```