
# 岛屿数量 #

**200. 岛屿数量**

```js
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const len1 = grid.length
    const len2 = grid[0].length
    let count = 0

    function dfs(i, j) {
        if (i < 0 || i >= len1 || j < 0 || j >= len2 || grid[i][j] === '0') return 
        grid[i][j] = '0'
        dfs(i + 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i - 1, j)
    }

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(i, j)
            }
        }
    }

    return count
};

```