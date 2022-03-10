# 链表 #

**1. 剑指 Offer 06. 从尾到头打印链表(easy)**

```javascript
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res = []; // 初始化数组
  while (head) {
    // 假如该ListNode不为null
    res.push(head.val); // 将值推入数组
    head = head.next; // 将当前ListNode指向下一个ListNode
  }
  return res.reverse(); // 反转数组
};
```

**2. 剑指 Offer 24. 反转链表(easy)**

```javascript
// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let preNode = null; // 初始化新头节点
  let curNode = head; // 设置head为当前节点
  while (curNode) {
    // 当前节点存在时
    const nextNode = curNode.next; // 先将当前节点的下一个节点保存
    curNode.next = preNode; // 将新头节点赋值给当前节点的下一个节点
    preNode = curNode; // 将新头节点变为当前节点（相当于反转）
    curNode = nextNode; // 将保存好的原本的下一个节点设置为当前节点
  }
  return preNode; // 最后返回新的头节点
};

// null -> 1 -> 2 -> 3
//  pre   cur
// null <- 1    2 -> 3
//        pre  cur
// null <- 1 <- 2    3
//             pre  cur
// null <- 1 <- 2 <- 3
//                  pre cur === null
```

**3. 剑指 Offer 35. 复杂链表的复制(Medium)**

```javascript
// 请实现 copyRandomList 函数，复制一个复杂链表。
// 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  const map = new Map(); // 创建哈希表
  let node = head; // 当前节点
  const newHead = new Node(node.val); // 创建复制节点（不改变以方便后面使用）
  let newNode = newHead; // 拿来拷贝使用的节点
  map.set(node, newNode); // 保存哈希表中表示节点的映射关系

  while (node.next) {
    // 当该节点存在下一个节点时
    newNode.next = new Node(node.next.val); // 为拷贝节点创建下一个节点的拷贝
    node = node.next; // 指针指向下一个节点（用于循环）
    newNode = newNode.next; // 指针指向下一个节点（用于循环）
    map.set(node, newNode); // 同理保存哈希表中表示节点的映射关系
  }

  node = head; // 重置节点
  newNode = newHead; // 重置节点

  while (newNode) {
    // 重新走一遍循环拿random的引用
    newNode.random = map.get(node.random);
    node = node.next;
    newNode = newNode.next;
  }

  return newHead;
};
```
