# 二叉树 #

**236. 二叉树的最近公共祖先**

```js

// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return findRoot(root, p, q)
};

const findRoot = (root, p, q) => {
    //
    if (!root) return null

    if (root === p || root === q) return root // 假如有一个节点的值跟目标值相同的话 可以证明节点就是最近公共祖先了

    const left = findRoot(root.left, p, q) // 从左子树去找
    const right = findRoot(root.right, p, q) // 从右子树去找

    if (left && right) return root // 如果该节点的左子树存在目标值 右子树也存在目标值 则该节点是最近公共祖先

    return left ? left : right // 假如左右子树只存在其中一个值的话 就返回存在的那个节点即是唯一公共祖先了 否则就是没有公共祖先就是null
}

// 时间复杂度: O(n)  N为二叉树的节点数
// 空间复杂度: O(n)  N为二叉树的节点数

```


**543. 二叉树的直径**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxLength = 0
    
    function dfs(root) {
        if (!root) return 0
        
        let leftMaxLength = dfs(root.left)

        let rightMaxLength = dfs(root.right)

        maxLength = Math.max(maxLength, leftMaxLength + rightMaxLength) // 最后返回的长度为左子树的最大深度+右子树的最大深度

        return Math.max(leftMaxLength, rightMaxLength) + 1 // 从最底层往上加 每一层加1 取左子树和右子树较深的那一个作为该root的最大深度
    }
    
    dfs(root)
    
    return maxLength
};

// 时间复杂度: O(n)  N为二叉树的节点数
// 空间复杂度: O(Height)  Height为二叉树的深度


```