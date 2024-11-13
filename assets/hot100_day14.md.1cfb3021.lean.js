import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5B50\u96C6 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day14.md","lastUpdated":1731465675958}',o={};function e(c,n,u,l,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5B50\u96C6" tabindex="-1">\u5B50\u96C6 <a class="header-anchor" href="#\u5B50\u96C6" aria-hidden="true">#</a></h1><p><strong>78. \u5B50\u96C6</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u6570\u7EC4\u4E2D\u7684\u5143\u7D20 \u4E92\u4E0D\u76F8\u540C \u3002\u8FD4\u56DE\u8BE5\u6570\u7EC4\u6240\u6709\u53EF\u80FD\u7684</span>
<span class="token comment">// \u5B50\u96C6</span>
<span class="token comment">// \uFF08\u5E42\u96C6\uFF09\u3002</span>

<span class="token comment">// \u89E3\u96C6 \u4E0D\u80FD \u5305\u542B\u91CD\u590D\u7684\u5B50\u96C6\u3002\u4F60\u53EF\u4EE5\u6309 \u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u89E3\u96C6\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,2,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [0]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[],[0]]</span>


<span class="token comment">/**
 * @param {number[]} nums
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">startIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
