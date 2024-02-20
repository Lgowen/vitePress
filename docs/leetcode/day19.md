# 回溯 #

**46. 全排列**

```js

// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const stack = []
    const res = []
    

    function dfs(stack) {
        if (stack.length === nums.length) {
            res.push(stack.slice())
        }

        for (let i = 0; i < nums.length; i++) {
            if (stack.includes(nums[i])) continue
            stack.push(nums[i])
            dfs(stack)
            stack.pop()
        }
    }

    dfs(stack)
    return res
};

```

**78. 子集**

```js
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const path = []
    const res = []


    function dfs(startIndex) {

        res.push([...path])

        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1)
            path.pop()
        }
    }


    dfs(0)
    return res
};

```


**39. 组合总和**

```js
// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。
// 示例 2：

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]
// 示例 3：

// 输入: candidates = [2], target = 1
// 输出: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []

    function dfs(target, combine, idx) {
        if (idx === candidates.length) return 

        if (target === 0) {
            res.push(combine)
            return
        }

        dfs(target, combine, idx + 1)

        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
        }
    }

    dfs(target, [], 0)
    return res
};

```


**79. 单词搜索**

```js

// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// 输出：true

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// 输出：false


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    const len1 = board.length
    const len2 = board[0].length


    function dfs(i, j, k) {
        if (i < 0 || i >= len1 || j < 0 || j >= len2 || board[i][j] !== word[k]) return false
        if (k === word.length - 1) return true


        board[i][j] = ''
        const res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1)
        board[i][j] = word[k]

        return res
    }

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (dfs(i, j, 0)) return true
        }
    }

    return false
};

```



