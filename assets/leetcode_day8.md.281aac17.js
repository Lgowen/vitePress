import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const u='{"title":"\u52A8\u6001\u89C4\u5212 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day8.md","lastUpdated":1731465675962}',o={};function e(c,n,l,r,k,m){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 10- I. \u6590\u6CE2\u90A3\u5951\u6570\u5217</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165 n \uFF0C\u6C42\u6590\u6CE2\u90A3\u5951\uFF08Fibonacci\uFF09\u6570\u5217\u7684\u7B2C n \u9879\uFF08\u5373 F(N)\uFF09\u3002\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A</span>

<span class="token comment">// F(0) = 0,   F(1) = 1</span>
<span class="token comment">// F(N) = F(N - 1) + F(N - 2), \u5176\u4E2D N &gt; 1.</span>
<span class="token comment">// \u6590\u6CE2\u90A3\u5951\u6570\u5217\u7531 0 \u548C 1 \u5F00\u59CB\uFF0C\u4E4B\u540E\u7684\u6590\u6CE2\u90A3\u5951\u6570\u5C31\u662F\u7531\u4E4B\u524D\u7684\u4E24\u6570\u76F8\u52A0\u800C\u5F97\u51FA\u3002</span>

<span class="token comment">// \u7B54\u6848\u9700\u8981\u53D6\u6A21 1e9+7\uFF081000000007\uFF09\uFF0C\u5982\u8BA1\u7B97\u521D\u59CB\u7ED3\u679C\u4E3A\uFF1A1000000008\uFF0C\u8BF7\u8FD4\u56DE 1\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 2</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 5</span>
<span class="token comment">// \u8F93\u51FA\uFF1A5</span>

<span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token comment">// f(n) = f(n - 1) + f(n - 2)</span>
<span class="token keyword">var</span> <span class="token function-variable function">fib</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n

    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token number">0</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token punctuation">(</span>pre <span class="token operator">+</span> cur<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">1000000007</span>
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cur
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. \u5251\u6307 Offer 10- II. \u9752\u86D9\u8DF3\u53F0\u9636\u95EE\u9898</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u4E00\u53EA\u9752\u86D9\u4E00\u6B21\u53EF\u4EE5\u8DF3\u4E0A1\u7EA7\u53F0\u9636\uFF0C\u4E5F\u53EF\u4EE5\u8DF3\u4E0A2\u7EA7\u53F0\u9636\u3002\u6C42\u8BE5\u9752\u86D9\u8DF3\u4E0A\u4E00\u4E2A n \u7EA7\u7684\u53F0\u9636\u603B\u5171\u6709\u591A\u5C11\u79CD\u8DF3\u6CD5\u3002</span>

<span class="token comment">// \u7B54\u6848\u9700\u8981\u53D6\u6A21 1e9+7\uFF081000000007\uFF09\uFF0C\u5982\u8BA1\u7B97\u521D\u59CB\u7ED3\u679C\u4E3A\uFF1A1000000008\uFF0C\u8BF7\u8FD4\u56DE 1\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 2</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 7</span>
<span class="token comment">// \u8F93\u51FA\uFF1A21</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 0</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>

<span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token comment">// \u5047\u8BBE\u8DF3\u4E0An\u7EA7\u53F0\u9636\u9700\u8981f(n)\u6B21</span>
<span class="token comment">// \u5047\u5982\u6700\u540E\u5269\u4E0B1\u7EA7\u53F0\u9636\uFF0C\u90A3\u4E48\u9700\u8981\u8DF3\u7684\u53F0\u9636\u6570\u4E3An - 1, \u90A3\u4E48\u8DF3\u4E0An - 1\u53F0\u9636\u9700\u8981f(n - 1)\u6B21</span>
<span class="token comment">// \u5047\u5982\u6700\u540E\u5269\u4E0B2\u7EA7\u53F0\u9636\uFF0C\u90A3\u4E48\u9700\u8981\u8DF3\u7684\u53F0\u9636\u6570\u4E3An - 2, \u90A3\u4E48\u8DF3\u4E0An - 1\u53F0\u9636\u9700\u8981f(n - 2)\u6B21</span>
<span class="token comment">// f(n) = f(n - 1) + f(n - 2)</span>
<span class="token keyword">var</span> <span class="token function-variable function">numWays</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token punctuation">(</span> pre <span class="token operator">+</span> cur <span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">1000000007</span>
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> cur
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre></div><p><strong>3. \u5251\u6307 Offer 63. \u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u5047\u8BBE\u628A\u67D0\u80A1\u7968\u7684\u4EF7\u683C\u6309\u7167\u65F6\u95F4\u5148\u540E\u987A\u5E8F\u5B58\u50A8\u5728\u6570\u7EC4\u4E2D\uFF0C\u8BF7\u95EE\u4E70\u5356\u8BE5\u80A1\u7968\u4E00\u6B21\u53EF\u80FD\u83B7\u5F97\u7684\u6700\u5927\u5229\u6DA6\u662F\u591A\u5C11\uFF1F</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: [7,1,5,3,6,4]</span>
<span class="token comment">// \u8F93\u51FA: 5</span>
<span class="token comment">// \u89E3\u91CA: \u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA\uFF0C\u6700\u5927\u5229\u6DA6 = 6-1 = 5 \u3002</span>
<span class="token comment">//      \u6CE8\u610F\u5229\u6DA6\u4E0D\u80FD\u662F 7-1 = 6, \u56E0\u4E3A\u5356\u51FA\u4EF7\u683C\u9700\u8981\u5927\u4E8E\u4E70\u5165\u4EF7\u683C\u3002</span>
<span class="token comment">// 1. [7]: minCoat: 7 maxProfit: 0</span>
<span class="token comment">// 2. [7, 1]: minCoat: 1 maxProfit: 0</span>
<span class="token comment">// 3. [7, 1, 5]: minCoat: 1 maxProfit: Max(0, 5 - 1)</span>
<span class="token comment">// 4. [7, 1, 5, 3]: minCoat: 1 maxProfit: Max(4, 3 - 1)</span>
<span class="token comment">// 5. [7, 1, 5, 3, 6]: minCoat: 1 maxProfit: Max(4, 6 - 1)</span>
<span class="token comment">// 6. [7, 1, 5, 3, 6, 4]: minCoat: 1 maxProfit: Max(5, 4 - 1)</span>
<span class="token comment">// MaxProfit: 5</span>
<span class="token comment">// minCoat: 1</span>

<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: [7,6,4,3,1]</span>
<span class="token comment">// \u8F93\u51FA: 0</span>
<span class="token comment">// \u89E3\u91CA: \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u6CA1\u6709\u4EA4\u6613\u5B8C\u6210, \u6240\u4EE5\u6700\u5927\u5229\u6DA6\u4E3A 0\u3002</span>
<span class="token comment">/**
 * @param {number[]} prices
 * @return {number}
 */</span>
<span class="token comment">// 1. [7]: minCoat: 7 maxProfit: 0</span>
<span class="token comment">// 2. [7, 6]: minCoat: 6 maxProfit: 0</span>
<span class="token comment">// 3. [7, 6, 4]: minCoat: 4 maxProfit: 0</span>
<span class="token comment">// 4. [7, 6, 4, 3]: minCoat: 3 maxProfit: 0</span>
<span class="token comment">// 5. [7, 6, 4, 3, 1]: minCoat: 1 maxProfit: 0</span>
<span class="token comment">// MaxProfit: 0</span>
<span class="token comment">// minCoat: 1</span>

<span class="token comment">// \u8BBEdp[i]\u4E3A\u524Di\u65E5\u7684\u6700\u5927\u5229\u6DA6\uFF0C\u5219dp[i-1]\u4E3A\u524Di-1\u65E5\u7684\u6700\u5927\u5229\u6DA6</span>
<span class="token comment">// \u524Di\u65E5\u7684\u6700\u5927\u5229\u6DA6 = \u524Di-1\u65E5\u7684\u6700\u5927\u5229\u6DA6 \u548C \u7B2Ci\u65E5\u5356\u51FA\u53BB\u7684\u5229\u6DA6\uFF08\u7B2Ci\u65E5\u7684\u4EF7\u683C - \u524D i - 1 \u4E2D\u7684\u6700\u4F4E\u4E70\u5165\u4EF7\u683C\uFF09 \u4E2D\u7684\u6700\u5927\u503C</span>
<span class="token comment">// dp[i] = Max(dp[i - 1], price - Min(1 ~ i - 1))</span>
<span class="token comment">// \u6700\u5927\u5229\u6DA6\u53EF\u62BD\u53D6\u53D8\u91CF maxProfit</span>
<span class="token comment">// \u6700\u4F4E\u4E70\u5165\u53EF\u62BD\u53D6\u53D8\u91CF minCost</span>

<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> maxProfit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u524Di - 1\u65E5\u7684\u6700\u5927\u5229\u6DA6</span>
    <span class="token keyword">let</span> minCost <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u6700\u5927\u503C \u4EE5\u4FDD\u8BC1\u9996\u6B21\u6BD4\u8F83\u6700\u5C0F\u503C\u4E3Aprices[0]</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> price <span class="token keyword">of</span> prices<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minCost <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minCost<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u503C\u4E0E\u6700\u4F4E\u4E70\u5165\u503C\u76F8\u6BD4\u5F97\u5230\u5F53\u524D\u8F6E\u6B21\u6700\u4F4E\u4E70\u5165\u4EF7</span>
        maxProfit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxProfit<span class="token punctuation">,</span> price <span class="token operator">-</span> minCost<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// </span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxProfit <span class="token comment">// \u6700\u540E\u8FD4\u56DE\u6700\u5927\u5229\u6DA6</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,7)]))}var d=s(o,[["render",e]]);export{u as __pageData,d as default};
