import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u6700\u957F\u8FDE\u7EED\u5E8F\u5217 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day13.md","lastUpdated":1731465675958}',o={};function e(c,n,u,l,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u6700\u957F\u8FDE\u7EED\u5E8F\u5217" tabindex="-1">\u6700\u957F\u8FDE\u7EED\u5E8F\u5217 <a class="header-anchor" href="#\u6700\u957F\u8FDE\u7EED\u5E8F\u5217" aria-hidden="true">#</a></h1><p><strong>128. \u6700\u957F\u8FDE\u7EED\u5E8F\u5217</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u672A\u6392\u5E8F\u7684\u6574\u6570\u6570\u7EC4 nums \uFF0C\u627E\u51FA\u6570\u5B57\u8FDE\u7EED\u7684\u6700\u957F\u5E8F\u5217\uFF08\u4E0D\u8981\u6C42\u5E8F\u5217\u5143\u7D20\u5728\u539F\u6570\u7EC4\u4E2D\u8FDE\u7EED\uFF09\u7684\u957F\u5EA6\u3002</span>

<span class="token comment">// \u8BF7\u4F60\u8BBE\u8BA1\u5E76\u5B9E\u73B0\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n) \u7684\u7B97\u6CD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [100,4,200,1,3,2]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A4</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u6700\u957F\u6570\u5B57\u8FDE\u7EED\u5E8F\u5217\u662F [1, 2, 3, 4]\u3002\u5B83\u7684\u957F\u5EA6\u4E3A 4\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [0,3,7,2,5,8,4,6,0,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A9</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestConsecutive</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> setList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        setList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>setList<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> curLength <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token keyword">let</span> curNum <span class="token operator">=</span> num
            <span class="token keyword">while</span> <span class="token punctuation">(</span>setList<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>curNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                curLength<span class="token operator">++</span>
                curNum<span class="token operator">++</span>
            <span class="token punctuation">}</span>
            maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> curLength<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> maxLength
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
