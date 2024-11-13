import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day20.md","lastUpdated":1731465675958}',o={};function e(c,n,l,u,r,k){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E" tabindex="-1">\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E <a class="header-anchor" href="#\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E" aria-hidden="true">#</a></h1><p><strong>34. \u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6309\u7167\u975E\u9012\u51CF\u987A\u5E8F\u6392\u5217\u7684\u6574\u6570\u6570\u7EC4 nums\uFF0C\u548C\u4E00\u4E2A\u76EE\u6807\u503C target\u3002\u8BF7\u4F60\u627E\u51FA\u7ED9\u5B9A\u76EE\u6807\u503C\u5728\u6570\u7EC4\u4E2D\u7684\u5F00\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\u3002</span>

<span class="token comment">// \u5982\u679C\u6570\u7EC4\u4E2D\u4E0D\u5B58\u5728\u76EE\u6807\u503C target\uFF0C\u8FD4\u56DE [-1, -1]\u3002</span>

<span class="token comment">// \u4F60\u5FC5\u987B\u8BBE\u8BA1\u5E76\u5B9E\u73B0\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(log n) \u7684\u7B97\u6CD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [5,7,7,8,8,10], target = 8</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[3,4]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [5,7,7,8,8,10], target = 6</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[-1,-1]</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [], target = 0</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[-1,-1]</span>


<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchRange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">lowerBound</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> nums<span class="token punctuation">.</span>length <span class="token operator">||</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">lowerBound</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">lowerBound</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> left
<span class="token punctuation">}</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
