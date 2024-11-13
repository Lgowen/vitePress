import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day5.md","lastUpdated":1731465675958}',o={};function e(c,n,l,u,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" tabindex="-1">\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 <a class="header-anchor" href="#\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" aria-hidden="true">#</a></h1><p><strong>300. \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u627E\u5230\u5176\u4E2D\u6700\u957F\u4E25\u683C\u9012\u589E\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u3002</span>

<span class="token comment">// \u5B50\u5E8F\u5217 \u662F\u7531\u6570\u7EC4\u6D3E\u751F\u800C\u6765\u7684\u5E8F\u5217\uFF0C\u5220\u9664\uFF08\u6216\u4E0D\u5220\u9664\uFF09\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u800C\u4E0D\u6539\u53D8\u5176\u4F59\u5143\u7D20\u7684\u987A\u5E8F\u3002\u4F8B\u5982\uFF0C[3,6,2,7] \u662F\u6570\u7EC4 [0,3,1,6,2,2,7] \u7684</span>
<span class="token comment">// \u5B50\u5E8F\u5217\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [10,9,2,5,3,7,101,18]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A4</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u662F [2,3,7,101]\uFF0C\u56E0\u6B64\u957F\u5EA6\u4E3A 4 \u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [0,1,0,3,2,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A4</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [7,7,7,7,7,7,7]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLIS</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length

    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>dp<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
