# 动态规划 #

**1. 剑指 Offer 10- I. 斐波那契数列**

```javascript
// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 示例 1：

// 输入：n = 2
// 输出：1
// 示例 2：

// 输入：n = 5
// 输出：5

/**
 * @param {number} n
 * @return {number}
 */
// f(n) = f(n - 1) + f(n - 2)
var fib = function(n) {
    if (n < 2) return n

    let pre = 0
    let cur = 1
    let next = 0
    
    for (let i = 2; i <= n; i++) {
        next = (pre + cur) % 1000000007
        pre = cur
        cur = next
    }
    return cur
};
```

**2. 剑指 Offer 10- II. 青蛙跳台阶问题**

```javascript
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 示例 1：

// 输入：n = 2
// 输出：2
// 示例 2：

// 输入：n = 7
// 输出：21
// 示例 3：

// 输入：n = 0
// 输出：1

/**
 * @param {number} n
 * @return {number}
 */
// 假设跳上n级台阶需要f(n)次
// 假如最后剩下1级台阶，那么需要跳的台阶数为n - 1, 那么跳上n - 1台阶需要f(n - 1)次
// 假如最后剩下2级台阶，那么需要跳的台阶数为n - 2, 那么跳上n - 1台阶需要f(n - 2)次
// f(n) = f(n - 1) + f(n - 2)
var numWays = function(n) {
    
    let pre = 1
    let cur = 1
    let next = 0
    for (let i = 2; i <= n; i++) {
        next = ( pre + cur ) % 1000000007
        pre = cur
        cur = next
    }

    return cur
};


```


**3. 剑指 Offer 63. 股票的最大利润**

```javascript
// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
// 1. [7]: minCoat: 7 maxProfit: 0
// 2. [7, 1]: minCoat: 1 maxProfit: 0
// 3. [7, 1, 5]: minCoat: 1 maxProfit: Max(0, 5 - 1)
// 4. [7, 1, 5, 3]: minCoat: 1 maxProfit: Max(4, 3 - 1)
// 5. [7, 1, 5, 3, 6]: minCoat: 1 maxProfit: Max(4, 6 - 1)
// 6. [7, 1, 5, 3, 6, 4]: minCoat: 1 maxProfit: Max(5, 4 - 1)
// MaxProfit: 5
// minCoat: 1

// 示例 2:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
/**
 * @param {number[]} prices
 * @return {number}
 */
// 1. [7]: minCoat: 7 maxProfit: 0
// 2. [7, 6]: minCoat: 6 maxProfit: 0
// 3. [7, 6, 4]: minCoat: 4 maxProfit: 0
// 4. [7, 6, 4, 3]: minCoat: 3 maxProfit: 0
// 5. [7, 6, 4, 3, 1]: minCoat: 1 maxProfit: 0
// MaxProfit: 0
// minCoat: 1

// 设dp[i]为前i日的最大利润，则dp[i-1]为前i-1日的最大利润
// 前i日的最大利润 = 前i-1日的最大利润 和 第i日卖出去的利润（第i日的价格 - 前 i - 1 中的最低买入价格） 中的最大值
// dp[i] = Max(dp[i - 1], price - Min(1 ~ i - 1))
// 最大利润可抽取变量 maxProfit
// 最低买入可抽取变量 minCost

var maxProfit = function(prices) {
    let maxProfit = 0; // 前i - 1日的最大利润
    let minCost = Number.MAX_VALUE; // 设置最大值 以保证首次比较最小值为prices[0]

    for(const price of prices) {
        minCost = Math.min(minCost, price); // 当前值与最低买入值相比得到当前轮次最低买入价
        maxProfit = Math.max(maxProfit, price - minCost); // 
        console.log(minCost, maxProfit)
    }

    return maxProfit // 最后返回最大利润
};

```