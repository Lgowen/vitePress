import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day3.md","lastUpdated":1731465675958}',o={};function e(c,n,u,k,l,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20" tabindex="-1">\u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20 <a class="header-anchor" href="#\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20" aria-hidden="true">#</a></h1><p><strong>215. \u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u6574\u6570\u6570\u7EC4 nums \u548C\u6574\u6570 k\uFF0C\u8BF7\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C k \u4E2A\u6700\u5927\u7684\u5143\u7D20\u3002</span>

<span class="token comment">// \u8BF7\u6CE8\u610F\uFF0C\u4F60\u9700\u8981\u627E\u7684\u662F\u6570\u7EC4\u6392\u5E8F\u540E\u7684\u7B2C k \u4E2A\u6700\u5927\u7684\u5143\u7D20\uFF0C\u800C\u4E0D\u662F\u7B2C k \u4E2A\u4E0D\u540C\u7684\u5143\u7D20\u3002</span>

<span class="token comment">// \u4F60\u5FC5\u987B\u8BBE\u8BA1\u5E76\u5B9E\u73B0\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n) \u7684\u7B97\u6CD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: [3,2,1,5,6,4], k = 2</span>
<span class="token comment">// \u8F93\u51FA: 5</span>
<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: [3,2,3,1,2,4,5,5,6], k = 4</span>
<span class="token comment">// \u8F93\u51FA: 4</span>

<span class="token keyword">let</span> <span class="token function-variable function">findKthLargest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">quickSelect</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token function-variable function">quickSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">quick</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">quick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> index

    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        index <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">quick</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">quick</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> middle <span class="token operator">=</span> arr<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> left<span class="token punctuation">]</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> left
    <span class="token keyword">let</span> j <span class="token operator">=</span> right
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j<span class="token operator">--</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">!==</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> i
<span class="token punctuation">}</span>

<span class="token comment">// \u4EA4\u6362</span>
<span class="token keyword">let</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i <span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
<span class="token punctuation">}</span>

</code></pre></div>`,3)]))}var m=s(o,[["render",e]]);export{d as __pageData,m as default};
