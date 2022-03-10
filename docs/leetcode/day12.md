**剑指 Offer 25. 合并两个排序的链表**

```js

// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


function mergeTwoLists(l1, l2) {
    const head = new ListNode(0) // 初始化新的头节点
    let cur = head // 新建初始节点
    while (l1 && l2) {
        // 两个指针指向的当前值进行比较 将小的那个值作为cur的下一个节点
        // 两个指针交替向前进行
        // cur的指向每次也是指向下一个节点
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    // l1 或 l2为空时跳出循环
    // 将剩下的有值的链表作为cur的下一个节点

    cur.next = l1 ? l1 : l2

    return head.next  // 最后返回新的头节点的下一个节点 即cur
}

// 时间: O(M + N)
// 空间: O(1)

```


**剑指 Offer 52. 两个链表的第一个公共节点**

```js

// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
// 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。


// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// 输出：Reference of the node with value = 2
// 输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    
    let pA = headA // 新建链表A
    let pB = headB // 新建链表B

    // 两个链表节点不相等时
    while (pA !== pB) {
        pA = pA ? pA.next : headB // 假如pA存在则继续往下 否则从headB从头再来对比
        pB = pB ? pB.next : headA // 假如pB存在则继续往下 否则从headA从头再来对比
    }

    // 当前两个链表相等 即重合时 则其中值为第一个公共节点
    return pA
};


// 时间: O(M + N)
// 空间: O(1)

```