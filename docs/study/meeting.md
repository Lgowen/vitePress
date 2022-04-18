# 学习之路 #

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


    //  const len1 = nums1.length
    // const len2 = nums2.length

    // const dp = new Array(len2 + 1).fill(0) // 创建一维数组

    // let max = 0

    // for (let i = 1; i <= len1; i++) {
    //     for (let j = len2; j >= 1; j--) {
    //         if (nums1[i] === nums2[j]) {
    //             dp[j] = dp[j - 1] + 1
    //         } else {
    //             dp[j] = 0
    //         }
    //         max = Math.max(max, dp[j])
    //     }
    // }

    // return max
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

**全排列**

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


const permute = (nums) => {
    const res = [] // 存放结果
    const track = [] // 存放每一条路径
    backTrack(track, nums)

    function backTrack(track) {
        // 假如路径长度与nums长度相同 则该条路径寻找完毕
        if (track.length === nums.length) {
            res.push(track.slice()) // 因为用的是同一个track(引用值) 所以当符合要求时推入结果数组中的应该是一个副本 不然该引用值在一直改变 最后得到的全是空的列表
            // 由始至终track只有一份 深度优先遍历回到根节点成为空列表
            return
        }

        for (let i = 0; i < nums.length; i++) {
            
            // 假如当前路径存在该值(避免重复选择)
            // 没有显示记录选择列表
            if (track.includes(nums[i])) {
                continue
            }
            // 做选择
            track.push(nums[i]) // 选择当前的节点

            backTrack(track) // 回溯路径

            track.pop()
            // 撤销选择
        }

    }

    return res // 返回结果
};

```



**N叉树的前序遍历（深度优先）**

```js
var preorder = function(root) {
    const res = [];
    if (root == null) {
        return res;
    }

    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        for (let i = node.children.length - 1; i >= 0; --i) {
            stack.push(node.children[i]);
        }
    }
    return res;
};

```

**N叉树的层序遍历（广度优先）**


```js
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (root == null) return res;
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    let level = [];
    while (size--) {
      let cur = queue.shift();
      level.push(cur.val);
      for (let node of cur.children) {
        if (node) queue.push(node);
      }
    }
    res.push(level);
  }
  return res;
};

```

**N叉树的最大深度**

```js

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (!root) return 0
    let level = 0

    const queue = [root]

    while (queue.length) {
        let len = queue.length
        level++
        while (len--) {
            const node = queue.shift()
            for (const item of node.children) {
                if (item) queue.push(item)
            }
        }
    }

    return level

};
```


**大数相加**

```js

function bigNumberSum(str1, str2) {
    // 字符串转数组且反转 从个位数开始相加
    const arr1 = str1.split('').reverse()
    const arr2 = str2.split('').reverse()

    let flag = 0
    const res = []
    const len = Math.max(str1.length, str2.length)

    for (let i = 0; i < len; i++) {
        // 避免取的是undefined
        const num1 = Number(arr1[i]) || 0
        const num2 = Number(arr2[i]) || 0
        let sum = num1 + num2 + flag // 两个共同位置的数相加再加上进位
        if (sum >= 10) {
            sum = sum % 10 // 假如大于10取余数
            flag = 1 // 存在进位
        } else {
            flag = 0 // 不存在进位
        }
        res.push(sum)
    }
    if (flag) res.push(flag)

    return res.reverse().join('')
    
}

```

**打家劫舍**


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    // 假如只有一间房 那么就偷这间
    // 假如有两间房 因为不能偷相邻的房间 那就偷两间房里钱多的那间
    // 假如大于两间房 设它为第k间
    // 有两个选择
    // S(n) = Max(S(n - 2) + H(n), S(n - 1))
    // S(0) = H(0)
    // S(1) = Max(S(0), H(1))
    // S(2) = Max(S(0) + H(2), S(1))
    // S(3) = Max(S(1) + H(3), S(2))



    const len = nums.length
    if (len === 1) return nums[0]
    if (len === 2) return Math.max(nums[0], nums[1])

    let num1 = nums[0] // 前k-1
    let num2 = Math.max(nums[0], nums[1]) // 前k-2 + k

    for (let i = 2; i < len; i++) {
        const cur = num2
        num2 = Math.max(num1 + nums[i], num2) // 要么隔着偷 要么偷中间的 取最大值 累加
        num1 = cur
    }

    return num2
};

```



**括号匹配**


```js

function isValid(s) {

    const len = s.length

    if (len % 2 === 1) return false // 字符串奇数的情况

    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])

    const stack = []

    for (const str of s) {
        // 判断是不是左括号
        
        if (map.has(str)) {
            // 假如当前是右括号

            if (!stack.length || stack[stack.length - 1] !== map.get(str)) return false

            stack.pop()
        } else {
            // 假如当前是左括号
            stack.push(str)
        }
    }

    return !stack.length
}

```


**环形链表**

```js

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false


    // map
    const map = new Map() // 存放已经走过的节点
    
    while (head.next) {
        if (map.get(head.next)) return true 
        // 这里有一个踩坑点 假如map记录的是节点的值的话 很有可能出现重复值 但它们是不的同节点 所以这里map存的是节点的引用
        map.set(head, true) 
        head = head.next
    }

    return false

    // 快慢指针
    let slow = head
    let fast = head.next

    while (fast.next.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
};

```




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


**二叉树的最大深度**

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
var maxDepth = function(root) {
    if (!root) return 0

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    // let max = 0
    // findDepth(root)
    
    // function findDepth(root) {
    //     if (!root) return 0

    //     const left = findDepth(root.left)

    //     const right = findDepth(root.right)

    //     const middleMax = Math.max(left, right)
        
    //     max = Math.max(max, middleMax)

    //     return Math.max(left, right) + 1
    // }

    // return max + 1
};

```


**删除链表重复节点**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if (!head) return head

    let cur = head
    
    // 当当前节点的下一个节点存在时
    while (cur.next) {
        // 假如下一个节点的值与当前节点的值相等的话
        // 就把当前节点的下一个节点指向改为再下一个
        // 否则指针往前移动
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }

    return head
};
```


**二叉树的所有路径(和)**

```js

function findPath(root) {
    const res = [] // 所有路径
    function dfs(root, path) {
        if (root) {
            path += String(root.val)
            if (!root.left && !root.right) {
                res.push(path)
            }
            else {
                dfs(root.left, path)
                dfs(root.right, path)
            }
        }
    }

    dfs(root, '')
    return res.reduce((pre, cur) => Number(pre) + Number(cur))
}


var root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 4,
        left: null,
        right: null
    }
}

```