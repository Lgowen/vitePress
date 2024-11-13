import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u4E0B\u4E00\u4E2A\u6392\u5217 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day22.md","lastUpdated":1731465675958}',o={};function e(c,n,u,l,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u4E0B\u4E00\u4E2A\u6392\u5217" tabindex="-1">\u4E0B\u4E00\u4E2A\u6392\u5217 <a class="header-anchor" href="#\u4E0B\u4E00\u4E2A\u6392\u5217" aria-hidden="true">#</a></h1><p><strong>31. \u4E0B\u4E00\u4E2A\u6392\u5217</strong></p><div class="language-js"><pre><code><span class="token comment">// \u6574\u6570\u6570\u7EC4\u7684\u4E00\u4E2A \u6392\u5217  \u5C31\u662F\u5C06\u5176\u6240\u6709\u6210\u5458\u4EE5\u5E8F\u5217\u6216\u7EBF\u6027\u987A\u5E8F\u6392\u5217\u3002</span>

<span class="token comment">// \u4F8B\u5982\uFF0Carr = [1,2,3] \uFF0C\u4EE5\u4E0B\u8FD9\u4E9B\u90FD\u53EF\u4EE5\u89C6\u4F5C arr \u7684\u6392\u5217\uFF1A[1,2,3]\u3001[1,3,2]\u3001[3,1,2]\u3001[2,3,1] \u3002</span>
<span class="token comment">// \u6574\u6570\u6570\u7EC4\u7684 \u4E0B\u4E00\u4E2A\u6392\u5217 \u662F\u6307\u5176\u6574\u6570\u7684\u4E0B\u4E00\u4E2A\u5B57\u5178\u5E8F\u66F4\u5927\u7684\u6392\u5217\u3002\u66F4\u6B63\u5F0F\u5730\uFF0C\u5982\u679C\u6570\u7EC4\u7684\u6240\u6709\u6392\u5217\u6839\u636E\u5176\u5B57\u5178\u987A\u5E8F\u4ECE\u5C0F\u5230\u5927\u6392\u5217\u5728\u4E00\u4E2A\u5BB9\u5668\u4E2D\uFF0C\u90A3\u4E48\u6570\u7EC4\u7684 \u4E0B\u4E00\u4E2A\u6392\u5217 \u5C31\u662F\u5728\u8FD9\u4E2A\u6709\u5E8F\u5BB9\u5668\u4E2D\u6392\u5728\u5B83\u540E\u9762\u7684\u90A3\u4E2A\u6392\u5217\u3002\u5982\u679C\u4E0D\u5B58\u5728\u4E0B\u4E00\u4E2A\u66F4\u5927\u7684\u6392\u5217\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6570\u7EC4\u5FC5\u987B\u91CD\u6392\u4E3A\u5B57\u5178\u5E8F\u6700\u5C0F\u7684\u6392\u5217\uFF08\u5373\uFF0C\u5176\u5143\u7D20\u6309\u5347\u5E8F\u6392\u5217\uFF09\u3002</span>

<span class="token comment">// \u4F8B\u5982\uFF0Carr = [1,2,3] \u7684\u4E0B\u4E00\u4E2A\u6392\u5217\u662F [1,3,2] \u3002</span>
<span class="token comment">// \u7C7B\u4F3C\u5730\uFF0Carr = [2,3,1] \u7684\u4E0B\u4E00\u4E2A\u6392\u5217\u662F [3,1,2] \u3002</span>
<span class="token comment">// \u800C arr = [3,2,1] \u7684\u4E0B\u4E00\u4E2A\u6392\u5217\u662F [1,2,3] \uFF0C\u56E0\u4E3A [3,2,1] \u4E0D\u5B58\u5728\u4E00\u4E2A\u5B57\u5178\u5E8F\u66F4\u5927\u7684\u6392\u5217\u3002</span>
<span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u627E\u51FA nums \u7684\u4E0B\u4E00\u4E2A\u6392\u5217\u3002</span>

<span class="token comment">// \u5FC5\u987B \u539F\u5730 \u4FEE\u6539\uFF0C\u53EA\u5141\u8BB8\u4F7F\u7528\u989D\u5916\u5E38\u6570\u7A7A\u95F4\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,2,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[1,3,2]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [3,2,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[1,2,3]</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,1,5]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[1,5,1]</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nextPermutation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> l <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">]</span>
        l<span class="token operator">++</span>
        r<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
