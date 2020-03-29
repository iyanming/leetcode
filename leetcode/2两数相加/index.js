/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode('head'); // 头结点
    let temp = res;
    let sum = 0; // 某位上的和
    let add = 0; // 进位
    while(l1 || l2) {
        let numFirst = l1 ? l1.val : 0;
        let numSec = l2 ? l2.val : 0;
        sum = numFirst + numSec + add;
        // 下一个节点val为sum取余后的值
        temp.next = new ListNode(sum % 10); 
        temp = temp.next;
        add = parseInt(sum / 10);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    // 特殊情况是(4) + (6)，结果应该是 0 -> 1
    if(add > 0){temp.next = new ListNode(add)}  
    return res.next;
};