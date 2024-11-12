# 删除链表的倒数第 N 个结点 #

**19. 删除链表的倒数第 N 个结点**

```js
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const init = new ListNode(0, head)

    let slow = init
    let fast = init

    while (n--) {
        fast = fast.next
    }

    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return init.next
    
};

```