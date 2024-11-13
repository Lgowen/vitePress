import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const i='{"title":"\u6700\u5927\u5B50\u6570\u7EC4 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day11.md","lastUpdated":1731465675958}',o={};function e(c,n,u,l,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u6700\u5927\u5B50\u6570\u7EC4" tabindex="-1">\u6700\u5927\u5B50\u6570\u7EC4 <a class="header-anchor" href="#\u6700\u5927\u5B50\u6570\u7EC4" aria-hidden="true">#</a></h1><p><strong>152. \u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u8BF7\u4F60\u627E\u51FA\u6570\u7EC4\u4E2D\u4E58\u79EF\u6700\u5927\u7684\u975E\u7A7A\u8FDE\u7EED </span>
<span class="token comment">// \u5B50\u6570\u7EC4</span>
<span class="token comment">// \uFF08\u8BE5\u5B50\u6570\u7EC4\u4E2D\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u6570\u5B57\uFF09\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5B50\u6570\u7EC4\u6240\u5BF9\u5E94\u7684\u4E58\u79EF\u3002</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: nums = [2,3,-2,4]</span>
<span class="token comment">// \u8F93\u51FA: 6</span>
<span class="token comment">// \u89E3\u91CA: \u5B50\u6570\u7EC4 [2,3] \u6709\u6700\u5927\u4E58\u79EF 6\u3002</span>
<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: nums = [-2,0,-1]</span>
<span class="token comment">// \u8F93\u51FA: 0</span>
<span class="token comment">// \u89E3\u91CA: \u7ED3\u679C\u4E0D\u80FD\u4E3A 2, \u56E0\u4E3A [-2,-1] \u4E0D\u662F\u5B50\u6570\u7EC4\u3002</span>


<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProduct</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> preMin <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> preMax <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> temp1 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> temp2 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp1 <span class="token operator">=</span> preMin <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        temp2 <span class="token operator">=</span> preMax <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        preMin <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>temp1<span class="token punctuation">,</span> temp2<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        preMax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>temp1<span class="token punctuation">,</span> temp2<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>preMax<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>53. \u6700\u5927\u5B50\u6570\u7EC4\u548C</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u8BF7\u4F60\u627E\u51FA\u4E00\u4E2A\u5177\u6709\u6700\u5927\u548C\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\uFF08\u5B50\u6570\u7EC4\u6700\u5C11\u5305\u542B\u4E00\u4E2A\u5143\u7D20\uFF09\uFF0C\u8FD4\u56DE\u5176\u6700\u5927\u548C\u3002</span>

<span class="token comment">// \u5B50\u6570\u7EC4</span>
<span class="token comment">// \u662F\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u8FDE\u7EED\u90E8\u5206\u3002</span>

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
</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{i as __pageData,d as default};
