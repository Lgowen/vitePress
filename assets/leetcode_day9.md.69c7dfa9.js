import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u52A8\u6001\u89C4\u5212 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day9.md","lastUpdated":1731465675962}',o={};function e(c,n,l,u,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 42. \u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u6700\u5927\u548C</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u6216\u8FDE\u7EED\u591A\u4E2A\u6574\u6570\u7EC4\u6210\u4E00\u4E2A\u5B50\u6570\u7EC4\u3002\u6C42\u6240\u6709\u5B50\u6570\u7EC4\u7684\u548C\u7684\u6700\u5927\u503C\u3002</span>

<span class="token comment">// \u8981\u6C42\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n)\u3002</span>

<span class="token comment">// \u793A\u4F8B1:</span>

<span class="token comment">// \u8F93\u5165: nums = [-2,1,-3,4,-1,2,1,-5,4]</span>
<span class="token comment">// \u8F93\u51FA: 6</span>
<span class="token comment">// \u89E3\u91CA: \u8FDE\u7EED\u5B50\u6570\u7EC4 [4,-1,2,1] \u7684\u548C\u6700\u5927\uFF0C\u4E3A 6\u3002</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token comment">// [-2, 1, -2, 4, 3, 5, 6, 1, 5]</span>
<span class="token comment">// dp[n] = dp[n - 1] + nums[i] (dp[n - 1] &gt; 0)</span>
<span class="token comment">// dp[n] = nums[i] (dp[n - 1] &lt;= 0)</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSubArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">let</span> maxSum <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// \u521D\u59CB\u5316\u6700\u5927\u503C \u53D6dp[0]</span>
    <span class="token keyword">let</span> preSum <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token comment">// \u83B7\u53D6dp\u957F\u5EA6</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        preSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>preSum <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> 
        <span class="token comment">//  preSum = preSum &lt; 0 ? nums[i] : preSum + nums[i]</span>
        maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> preSum<span class="token punctuation">)</span> <span class="token comment">// \u53D6\u524D\u4E00\u6B21\u7684\u6700\u5927\u503C\u4E0E\u672C\u6B21\u7684\u6700\u5927\u503C\u4E2D\u8F83\u5927\u7684\u90A3\u4E2A\u503C</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxSum <span class="token comment">// \u8FD4\u56DE\u8BE5\u503C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre></div><p><strong>2. \u5251\u6307 Offer 47. \u793C\u7269\u7684\u6700\u5927\u4EF7\u503C</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u5728\u4E00\u4E2A m*n \u7684\u68CB\u76D8\u7684\u6BCF\u4E00\u683C\u90FD\u653E\u6709\u4E00\u4E2A\u793C\u7269\uFF0C\u6BCF\u4E2A\u793C\u7269\u90FD\u6709\u4E00\u5B9A\u7684\u4EF7\u503C\uFF08\u4EF7\u503C\u5927\u4E8E 0\uFF09\u3002\u4F60\u53EF\u4EE5\u4ECE\u68CB\u76D8\u7684\u5DE6\u4E0A\u89D2\u5F00\u59CB\u62FF\u683C\u5B50\u91CC\u7684\u793C\u7269\uFF0C\u5E76\u6BCF\u6B21\u5411\u53F3\u6216\u8005\u5411\u4E0B\u79FB\u52A8\u4E00\u683C\u3001\u76F4\u5230\u5230\u8FBE\u68CB\u76D8\u7684\u53F3\u4E0B\u89D2\u3002\u7ED9\u5B9A\u4E00\u4E2A\u68CB\u76D8\u53CA\u5176\u4E0A\u9762\u7684\u793C\u7269\u7684\u4EF7\u503C\uFF0C\u8BF7\u8BA1\u7B97\u4F60\u6700\u591A\u80FD\u62FF\u5230\u591A\u5C11\u4EF7\u503C\u7684\u793C\u7269\uFF1F</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: </span>
<span class="token comment">// [</span>
<span class="token comment">//   [1,3,1],</span>
<span class="token comment">//   [1,5,1],</span>
<span class="token comment">//   [4,2,1]</span>
<span class="token comment">// ]</span>
<span class="token comment">// \u8F93\u51FA: 12</span>
<span class="token comment">// \u89E3\u91CA: \u8DEF\u5F84 1\u21923\u21925\u21922\u21921 \u53EF\u4EE5\u62FF\u5230\u6700\u591A\u4EF7\u503C\u7684\u793C\u7269</span>

<span class="token comment">/**
 * @param {number[][]} grid
 * @return {number}
 */</span>
<span class="token comment">// dp[x][y] \u8868\u793A\u80FD\u62FF\u5230 = Max(dp[x][y - 1], dp[x - 1][y]) + grid[i][j]</span>
<span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(MN)</span>
<span class="token comment">// \u7A7A\u95F4\u590D\u6742\u5EA6: O(1)</span>
<span class="token comment">// [</span>
<span class="token comment">//   [1,3,1],</span>
<span class="token comment">//   [1,5,1],</span>
<span class="token comment">//   [4,2,1]</span>
<span class="token comment">// ]</span>
<span class="token comment">// [</span>
<span class="token comment">//   [1, 4, 5],     [1, 4, 5]                    [1, 4, 5]                      [1, 4, 5]                     [1, 4, 5]</span>
<span class="token comment">//   [2, , ],   -&gt;  [2, Max(2 + 5, 4 + 5), ] -&gt;  [2, 9, Max(9 + 1, 5 + 1)]  -&gt;  [2, 9, 10]                 -&gt; [2, 9, 10]                   </span>
<span class="token comment">//   [6, , ]        [6, , ]                      [6, ,  ]                       [6, Max(6 + 2, 9 + 2),  ]     [6, 11, Max(10 + 1, 11 + 1) = 12] </span>
<span class="token comment">// ]</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxValue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> x <span class="token operator">=</span> grid<span class="token punctuation">.</span>length <span class="token comment">// x\u8F74\u957F\u5EA6</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token comment">// y\u8F74\u957F\u5EA6</span>
    <span class="token keyword">let</span> maxProfit <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// \u521D\u59CB\u5316\u7B2C\u4E00\u5217dp</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u521D\u59CB\u5316\u7B2C\u4E00\u884Cdp</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> y<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4ECEdp[1][1]\u5F00\u59CB\u8D70 \u51CF\u5C11\u4E86\u5FAA\u73AF</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> y<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> grid<span class="token punctuation">[</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// \u8FD4\u56DE\u5230\u8FBE\u53F3\u4E0B\u89D2\u7684\u503C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
