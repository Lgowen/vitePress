import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5B50\u4E32 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day17.md","lastUpdated":1731465675962}',o={};function e(c,n,u,k,l,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u5B50\u4E32" tabindex="-1">\u5B50\u4E32 <a class="header-anchor" href="#\u5B50\u4E32" aria-hidden="true">#</a></h1><p><strong>560. \u548C\u4E3A K \u7684\u5B50\u6570\u7EC4</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u6574\u6570 k \uFF0C\u8BF7\u4F60\u7EDF\u8BA1\u5E76\u8FD4\u56DE \u8BE5\u6570\u7EC4\u4E2D\u548C\u4E3A k \u7684\u5B50\u6570\u7EC4\u7684\u4E2A\u6570 \u3002</span>

<span class="token comment">// \u5B50\u6570\u7EC4\u662F\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u8FDE\u7EED\u975E\u7A7A\u5E8F\u5217\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,1,1], k = 2</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,2,3], k = 3</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subarraySum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token keyword">let</span> prefixNum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prefixNum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>prefixNum <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count <span class="token operator">+=</span> map<span class="token punctuation">[</span>prefixNum <span class="token operator">-</span> k<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>prefixNum<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">[</span>prefixNum<span class="token punctuation">]</span><span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">[</span>prefixNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> count
    
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
