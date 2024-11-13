import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u666E\u901A\u6570\u7EC4 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day18.md","lastUpdated":1731465675962}',o={};function e(c,n,u,l,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u666E\u901A\u6570\u7EC4" tabindex="-1">\u666E\u901A\u6570\u7EC4 <a class="header-anchor" href="#\u666E\u901A\u6570\u7EC4" aria-hidden="true">#</a></h1><p><strong>53. \u6700\u5927\u5B50\u6570\u7EC4\u548C</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u8BF7\u4F60\u627E\u51FA\u4E00\u4E2A\u5177\u6709\u6700\u5927\u548C\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\uFF08\u5B50\u6570\u7EC4\u6700\u5C11\u5305\u542B\u4E00\u4E2A\u5143\u7D20\uFF09\uFF0C\u8FD4\u56DE\u5176\u6700\u5927\u548C\u3002</span>

<span class="token comment">// \u5B50\u6570\u7EC4 \u662F\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u8FDE\u7EED\u90E8\u5206\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [-2,1,-3,4,-1,2,1,-5,4]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A6</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u8FDE\u7EED\u5B50\u6570\u7EC4 [4,-1,2,1] \u7684\u548C\u6700\u5927\uFF0C\u4E3A 6 \u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [5,4,-1,7,8]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A23</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSubArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length

    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">let</span> preSum <span class="token operator">=</span> maxSum <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preSum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            preSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            preSum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>preSum<span class="token punctuation">,</span> maxSum<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxSum
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>56. \u5408\u5E76\u533A\u95F4</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u4EE5\u6570\u7EC4 intervals \u8868\u793A\u82E5\u5E72\u4E2A\u533A\u95F4\u7684\u96C6\u5408\uFF0C\u5176\u4E2D\u5355\u4E2A\u533A\u95F4\u4E3A intervals[i] = [starti, endi] \u3002\u8BF7\u4F60\u5408\u5E76\u6240\u6709\u91CD\u53E0\u7684\u533A\u95F4\uFF0C\u5E76\u8FD4\u56DE \u4E00\u4E2A\u4E0D\u91CD\u53E0\u7684\u533A\u95F4\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u9700\u6070\u597D\u8986\u76D6\u8F93\u5165\u4E2D\u7684\u6240\u6709\u533A\u95F4 \u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aintervals = [[1,3],[2,6],[8,10],[15,18]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[1,6],[8,10],[15,18]]</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u533A\u95F4 [1,3] \u548C [2,6] \u91CD\u53E0, \u5C06\u5B83\u4EEC\u5408\u5E76\u4E3A [1,6].</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aintervals = [[1,4],[4,5]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[1,5]]</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u533A\u95F4 [1,4] \u548C [4,5] \u53EF\u88AB\u89C6\u4E3A\u91CD\u53E0\u533A\u95F4\u3002</span>

<span class="token comment">/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sortedArr <span class="token operator">=</span> intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> sortedArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sortedArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cur <span class="token operator">=</span> sortedArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span>
            pre <span class="token operator">=</span> cur
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
