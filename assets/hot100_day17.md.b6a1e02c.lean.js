import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5408\u5E76\u533A\u95F4 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day17.md","lastUpdated":1731465675958}',o={};function e(c,n,u,l,r,k){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5408\u5E76\u533A\u95F4" tabindex="-1">\u5408\u5E76\u533A\u95F4 <a class="header-anchor" href="#\u5408\u5E76\u533A\u95F4" aria-hidden="true">#</a></h1><p><strong>56. \u5408\u5E76\u533A\u95F4</strong></p><div class="language-js"><pre><code><span class="token comment">// \u4EE5\u6570\u7EC4 intervals \u8868\u793A\u82E5\u5E72\u4E2A\u533A\u95F4\u7684\u96C6\u5408\uFF0C\u5176\u4E2D\u5355\u4E2A\u533A\u95F4\u4E3A intervals[i] = [starti, endi] \u3002\u8BF7\u4F60\u5408\u5E76\u6240\u6709\u91CD\u53E0\u7684\u533A\u95F4\uFF0C\u5E76\u8FD4\u56DE \u4E00\u4E2A\u4E0D\u91CD\u53E0\u7684\u533A\u95F4\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u9700\u6070\u597D\u8986\u76D6\u8F93\u5165\u4E2D\u7684\u6240\u6709\u533A\u95F4 \u3002</span>

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

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
