**1. 面试题32 - I. 从上到下打印二叉树（BFS）**

```javascript

// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回： [3,9,20,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (!root) return [] // 假如根节点不存在 返回空数组
    const queue = [root] // 将根节点放入队列
    const arr = [] // 创建返回的数组
    while (queue.length) {
        // 假如队列中有节点
        const head = queue.shift() // 将队列中的第一位取出
        arr.push(head.val) // 将该节点的值放入数组
        head.left && queue.push(head.left) // 假如该节点有左子树 则将左子树入队
        head.right && queue.push(head.right) // 假如该节点有右子树 则将右子树入队
    }

    return arr // 返回数组
};

```

**2. 剑指 Offer 32 - II. 从上到下打印二叉树 II**

```javascript

// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    const queue = [root]
    const arr = []
    
    while (queue.length) {
        const curLevel = [] // 保存当前层级的节点
        // 重点在于 i = queue.length 进行遍历
        for(let i = queue.length; i > 0; i--) {
            const head = queue.shift() // 节点出队
            curLevel.push(head.val)
            head.left && queue.push(head.left) // 该操作能够保证每重新跑一次for循环时curLevel能放满该层节点
            head.right && queue.push(head.right) // 该操作能够保证每重新跑一次for循环时curLevel能放满该层节点
        }
        arr.push(curLevel) // 每轮循环后推入数组
    }
    
    return arr
};
```


**3. 剑指 Offer 32 - III. 从上到下打印二叉树 III**
```javascript

// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    const queue = [root]
    const arr = []
    let level = 1
    while (queue.length) {
        const curLevel = []
        for(let i = queue.length; i > 0; i--) {
            const head = queue.shift()
            level % 2 === 1 ? curLevel.push(head.val) : curLevel.unshift(head.val) // 判断当前层级是奇数还是偶数来决定当前层级节点的排序方式
            head.left && queue.push(head.left)
            head.right && queue.push(head.right)
        }
        level++
        arr.push(curLevel)
    }
    return arr
};

```