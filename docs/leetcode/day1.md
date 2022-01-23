<!-- # 剑指offer (革命尚未成功,同志仍需努力) -->

<!-- ## Day1 (栈与队列（简单）) -->

**1. 剑指 Offer 30. 包含 min 函数的栈(easy)**

```javascript
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
// 调用 min、push 及 pop 的时间复杂度都是 O(1)。

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minStack = []; // 创建最小值的stack
  this.mainStack = []; // 创建整体的stack
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.mainStack.push(x); // 往主栈推入值
  const minStackLen = this.minStack.length;
  if (!minStackLen) {
    // 判断包含每轮最小值的栈中是否有值，没有则直接推入
    this.minStack.push(x);
  } else {
    const lastIndex = minStackLen - 1;
    // 有则取最小值与推入值进行比较，再推入其小的那一个
    const minData = Math.min(this.minStack[lastIndex], x);
    this.minStack.push(minData);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop(); // 出栈
  this.mainStack.pop(); // 出栈
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // 取栈顶
  const lastIndex = this.mainStack.length - 1;
  return this.mainStack[lastIndex];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  // minStack的栈顶值为每一轮最小值，故取其值
  const lastIndex = this.minStack.length - 1;
  return this.minStack[lastIndex];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

**2. 剑指 Offer 09. 用两个栈实现队列(easy)**

```javascript
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

var CQueue = function () {
  this.enterStack = [];
  this.outerStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.enterStack.push(value); // 入队栈
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.outerStack.length) {
    // 假如出队栈中存在数据，则直接pop
    return this.outerStack.pop();
  } else {
    // 假如出队栈中没有数据，则将先进入入队栈的数据放入出队栈
    while (this.enterStack.length) {
      const outerData = this.enterStack.pop();
      this.outerStack.push(outerData);
    }
    // 放完后（也有可能入队栈中无数据）
    if (!this.outerStack.length) {
      // 出队栈中无数据
      return -1;
    } else {
      return this.outerStack.pop();
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```
