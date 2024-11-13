import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day21.md","lastUpdated":1731465675958}',o={};function e(c,n,l,u,r,k){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4" tabindex="-1">\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4 <a class="header-anchor" href="#\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4" aria-hidden="true">#</a></h1><p><strong>33. \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4</strong></p><div class="language-js"><pre><code><span class="token comment">// \u6574\u6570\u6570\u7EC4 nums \u6309\u5347\u5E8F\u6392\u5217\uFF0C\u6570\u7EC4\u4E2D\u7684\u503C \u4E92\u4E0D\u76F8\u540C \u3002</span>

<span class="token comment">// \u5728\u4F20\u9012\u7ED9\u51FD\u6570\u4E4B\u524D\uFF0Cnums \u5728\u9884\u5148\u672A\u77E5\u7684\u67D0\u4E2A\u4E0B\u6807 k\uFF080 &lt;= k &lt; nums.length\uFF09\u4E0A\u8FDB\u884C\u4E86 \u65CB\u8F6C\uFF0C\u4F7F\u6570\u7EC4\u53D8\u4E3A [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]\uFF08\u4E0B\u6807 \u4ECE 0 \u5F00\u59CB \u8BA1\u6570\uFF09\u3002\u4F8B\u5982\uFF0C [0,1,2,4,5,6,7] \u5728\u4E0B\u6807 3 \u5904\u7ECF\u65CB\u8F6C\u540E\u53EF\u80FD\u53D8\u4E3A [4,5,6,7,0,1,2] \u3002</span>

<span class="token comment">// \u7ED9\u4F60 \u65CB\u8F6C\u540E \u7684\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u6574\u6570 target \uFF0C\u5982\u679C nums \u4E2D\u5B58\u5728\u8FD9\u4E2A\u76EE\u6807\u503C target \uFF0C\u5219\u8FD4\u56DE\u5B83\u7684\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE -1 \u3002</span>

<span class="token comment">// \u4F60\u5FC5\u987B\u8BBE\u8BA1\u4E00\u4E2A\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(log n) \u7684\u7B97\u6CD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002</span>


<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> mid

        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// [left, target, mid]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> target <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// [mid, target, right]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> target <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                 right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
