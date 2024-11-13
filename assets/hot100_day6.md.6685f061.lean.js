import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5BFB\u627E\u91CD\u590D\u6570 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day6.md","lastUpdated":1731465675958}',o={};function e(c,n,l,u,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5BFB\u627E\u91CD\u590D\u6570" tabindex="-1">\u5BFB\u627E\u91CD\u590D\u6570 <a class="header-anchor" href="#\u5BFB\u627E\u91CD\u590D\u6570" aria-hidden="true">#</a></h1><p><strong>287. \u5BFB\u627E\u91CD\u590D\u6570</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u5305\u542B n + 1 \u4E2A\u6574\u6570\u7684\u6570\u7EC4 nums \uFF0C\u5176\u6570\u5B57\u90FD\u5728 [1, n] \u8303\u56F4\u5185\uFF08\u5305\u62EC 1 \u548C n\uFF09\uFF0C\u53EF\u77E5\u81F3\u5C11\u5B58\u5728\u4E00\u4E2A\u91CD\u590D\u7684\u6574\u6570\u3002</span>

<span class="token comment">// \u5047\u8BBE nums \u53EA\u6709 \u4E00\u4E2A\u91CD\u590D\u7684\u6574\u6570 \uFF0C\u8FD4\u56DE \u8FD9\u4E2A\u91CD\u590D\u7684\u6570 \u3002</span>

<span class="token comment">// \u4F60\u8BBE\u8BA1\u7684\u89E3\u51B3\u65B9\u6848\u5FC5\u987B \u4E0D\u4FEE\u6539 \u6570\u7EC4 nums \u4E14\u53EA\u7528\u5E38\u91CF\u7EA7 O(1) \u7684\u989D\u5916\u7A7A\u95F4\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,3,4,2,2]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [3,1,3,4,2]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>
<span class="token comment">// \u793A\u4F8B 3 :</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [3,3,3,3,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findDuplicate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span>
        fast <span class="token operator">=</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> <span class="token number">0</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token keyword">return</span> fast

                slow <span class="token operator">=</span> nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span>
                fast <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
