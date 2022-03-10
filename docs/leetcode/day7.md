# 搜索与回溯算法 #

**1. 剑指 Offer 26. 树的子结构**

```javascript
// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

// B是A的子结构， 即 A中有出现和B相同的结构和节点值。

// 例如:
// 给定的树 A:

//      3
//     / \
//    4   5
//   / \
//  1   2
// 给定的树 B：

//    4 
//   /
//  1
// 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

// 示例 1：

// 输入：A = [1,2,3], B = [3,1]
// 输出：false
// 示例 2：

// 输入：A = [3,4,5,1,2], B = [4,1]
// 输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (!A || !B) return false // 非空判断

    // 三种情况: A包含B、A的左子树包含B、A的右子树包含B
    return contain(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

// 判断A是否包含B
var contain = function(A, B) {
    if (!B) return true // 假如走到这里时B已经为空了 证明B已经遍历到底了还没有失败 所以证明A包含B

    if (!A) return false // 假如走到这里A已经为空了 证明不会再有A能够包含B了

    if (A.val !== B.val) return false // 假如它们的值不相等

    // 判断两棵树是否为包含关系要判断左右子树
    return contain(A.left, B.left) && contain(A.right, B.right)
}

```

**2. 剑指 Offer 27. 二叉树的镜像**
```javascript
// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

//  

// 示例 1：

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 迭代
var mirrorTree = function(root) {
    if (!root) return null // 非空判断
    const queue = [root] // 队列存放
    while (queue.length) {
        for(let i = queue.length; i > 0; i--) {
            // 交换左右子树
            const head = queue.shift()
            const leftTree = head.left
            head.left = head.right
            head.right = leftTree
            // 队列中推入左右子树
            head.left && queue.push(head.left)
            head.right && queue.push(head.right)
        }
    }

    return root
};

// 递归
var mirrorTree = function(root) {
    if (!root) return null; // 非空判断

    [root.left, root.right] = [root.right, root.left];

    mirrorTree(root.left);

    mirrorTree(root.right);
    
    return root;
};

```

**3. 对称的二叉树**
```javascript

// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

//  

// 示例 1：

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    
    const isSame = (leftRoot, rightRoot) => {
        if (!leftRoot && !rightRoot) return true

        if (!leftRoot || !rightRoot) return false

        return leftRoot.val === rightRoot.val && isSame(leftRoot.left, rightRoot.right) && isSame(leftRoot.right, rightRoot.left)
    }

    return isSame(root.left, root.right)
};
```