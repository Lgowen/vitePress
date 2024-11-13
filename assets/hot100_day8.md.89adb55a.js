import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5B8C\u5168\u5E73\u65B9\u6570 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day8.md","lastUpdated":1731465675958}',o={};function e(c,n,l,k,r,u){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u5B8C\u5168\u5E73\u65B9\u6570" tabindex="-1">\u5B8C\u5168\u5E73\u65B9\u6570 <a class="header-anchor" href="#\u5B8C\u5168\u5E73\u65B9\u6570" aria-hidden="true">#</a></h1><p><strong>279. \u5B8C\u5168\u5E73\u65B9\u6570</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 n \uFF0C\u8FD4\u56DE \u548C\u4E3A n \u7684\u5B8C\u5168\u5E73\u65B9\u6570\u7684\u6700\u5C11\u6570\u91CF \u3002</span>

<span class="token comment">// \u5B8C\u5168\u5E73\u65B9\u6570 \u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u5176\u503C\u7B49\u4E8E\u53E6\u4E00\u4E2A\u6574\u6570\u7684\u5E73\u65B9\uFF1B\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5176\u503C\u7B49\u4E8E\u4E00\u4E2A\u6574\u6570\u81EA\u4E58\u7684\u79EF\u3002\u4F8B\u5982\uFF0C1\u30014\u30019 \u548C 16 \u90FD\u662F\u5B8C\u5168\u5E73\u65B9\u6570\uFF0C\u800C 3 \u548C 11 \u4E0D\u662F\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 12</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3 </span>
<span class="token comment">// \u89E3\u91CA\uFF1A12 = 4 + 4 + 4</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 13</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2</span>
<span class="token comment">// \u89E3\u91CA\uFF1A13 = 4 + 9</span>

<span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> min <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">*</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j <span class="token operator">*</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> min <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
