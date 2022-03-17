# 搜索与回溯算法 #

```js

// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

// 示例 1：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    function dfs(i, j, k) {
        // 边界条件判断
        if (i < 0 || i >= x || j < 0 || j >= y || board[i][j] !== word[k]) return false

        // k的值正好与word中最后一个字母的索引值相同表示找到了完整通路
        if (k === word.length - 1) return true

        // 标记当前的值
        board[i][j] = ''
        
        // 递归当前字母上下左右四个方向看是否有通路
        let res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1)
        
        // 把值赋值回去 以保证下一次地图上字母的完整性
        board[i][j] = word[k]

        return res
    }

    const x = board.length
    const y = board[0].length 
    

    // 判断每一个位置的字母是否能找到完整路径
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (dfs(i, j, 0)) return true
        }
    }

    return false
};


```

**剑指 Offer 13. 机器人的运动范围**

```js

// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    // visited 用来记录走过的格子，避免重复
    const visited = Array(m).fill(0).map(_ => Array(n).fill(false));

    // 辅助函数，计算位数和
    function sum(n) {
        let res = 0;
        while (n) {
            res += n % 10;
            n = Math.floor(n / 10)
        }
        return res;
    }
    // dfs
    function dfs(x, y) {
        // 对应开头所说的三个终止条件，超过k值、到达边界、走过的格子
        if (sum(x) + sum(y) > k || x >= m || y >= n || visited[x][y]) return 0;
        else {
            // 记录当前格子已经走过，返回当前计数 1 + 后续其他两个方向的总和
            visited[x][y] = true
            return 1 + dfs(x + 1, y) + dfs(x, y + 1);
        }
    }
    
    return dfs(0, 0);
};

```