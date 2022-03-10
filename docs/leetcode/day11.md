# 双指针 #

**剑指 Offer 18. 删除链表的节点**

```js

// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 注意：此题对比原题有改动

// 示例 1:

// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
// 示例 2:

// 输入: head = [4,5,1,9], val = 1
// 输出: [4,5,9]
// 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    
    if (head.val === val) return head.next

    let pre = head
    let cur = head.next
    
    // 假如当前节点的值不等于目标值时 节点后移
    while (cur && cur.val !== val) {
        pre = cur
        cur = cur.next
    }

    // cur不存在表示链表中不存在要删除的节点 
    // cur存在则把pre节点的下一个节点指向cur的下一个节点则实现删除cur节点
    if (cur) pre.next = cur.next 

    return head

};

// 时间: O(n)
// 空间: O(1)

```


**剑指 Offer 22. 链表中倒数第k个节点**

```js
// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 k = 2.

// 返回链表 4->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let slow = head // 初始化慢指针
    let fast = head // 初始化快指针
    
    // 把快指针设置为慢指针的后k个节点
    // 则当快指针到达尾节点时 慢指针正好是倒数第k个节点
    
    while (fast && k > 0) {
        fast = fast.next
        k--
    }

    while (fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow
};

// 时间: O(n)
// 空间: O(1)

```