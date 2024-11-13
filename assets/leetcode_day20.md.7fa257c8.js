import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u8D2A\u5FC3\u7B97\u6CD5 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day20.md","lastUpdated":1731465675962}',o={};function e(c,n,l,k,r,u){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u8D2A\u5FC3\u7B97\u6CD5" tabindex="-1">\u8D2A\u5FC3\u7B97\u6CD5 <a class="header-anchor" href="#\u8D2A\u5FC3\u7B97\u6CD5" aria-hidden="true">#</a></h1><p><strong>121. \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4 prices \uFF0C\u5B83\u7684\u7B2C i \u4E2A\u5143\u7D20 prices[i] \u8868\u793A\u4E00\u652F\u7ED9\u5B9A\u80A1\u7968\u7B2C i \u5929\u7684\u4EF7\u683C\u3002</span>

<span class="token comment">// \u4F60\u53EA\u80FD\u9009\u62E9 \u67D0\u4E00\u5929 \u4E70\u5165\u8FD9\u53EA\u80A1\u7968\uFF0C\u5E76\u9009\u62E9\u5728 \u672A\u6765\u7684\u67D0\u4E00\u4E2A\u4E0D\u540C\u7684\u65E5\u5B50 \u5356\u51FA\u8BE5\u80A1\u7968\u3002\u8BBE\u8BA1\u4E00\u4E2A\u7B97\u6CD5\u6765\u8BA1\u7B97\u4F60\u6240\u80FD\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002</span>

<span class="token comment">// \u8FD4\u56DE\u4F60\u53EF\u4EE5\u4ECE\u8FD9\u7B14\u4EA4\u6613\u4E2D\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002\u5982\u679C\u4F60\u4E0D\u80FD\u83B7\u53D6\u4EFB\u4F55\u5229\u6DA6\uFF0C\u8FD4\u56DE 0 \u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1A[7,1,5,3,6,4]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A5</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA\uFF0C\u6700\u5927\u5229\u6DA6 = 6-1 = 5 \u3002</span>
<span class="token comment">//      \u6CE8\u610F\u5229\u6DA6\u4E0D\u80FD\u662F 7-1 = 6, \u56E0\u4E3A\u5356\u51FA\u4EF7\u683C\u9700\u8981\u5927\u4E8E\u4E70\u5165\u4EF7\u683C\uFF1B\u540C\u65F6\uFF0C\u4F60\u4E0D\u80FD\u5728\u4E70\u5165\u524D\u5356\u51FA\u80A1\u7968\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aprices = [7,6,4,3,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A0</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u6CA1\u6709\u4EA4\u6613\u5B8C\u6210, \u6240\u4EE5\u6700\u5927\u5229\u6DA6\u4E3A 0\u3002</span>

<span class="token comment">/**
 * @param {number[]} prices
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> prices<span class="token punctuation">.</span>length


    <span class="token keyword">let</span> minCost <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> maxPrice <span class="token operator">=</span> <span class="token number">0</span>


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxPrice <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxPrice<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minCost<span class="token punctuation">)</span>
        minCost <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minCost<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> maxPrice
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>55. \u8DF3\u8DC3\u6E38\u620F</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\u6570\u7EC4 nums \uFF0C\u4F60\u6700\u521D\u4F4D\u4E8E\u6570\u7EC4\u7684 \u7B2C\u4E00\u4E2A\u4E0B\u6807 \u3002\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u4EE3\u8868\u4F60\u5728\u8BE5\u4F4D\u7F6E\u53EF\u4EE5\u8DF3\u8DC3\u7684\u6700\u5927\u957F\u5EA6\u3002</span>

<span class="token comment">// \u5224\u65AD\u4F60\u662F\u5426\u80FD\u591F\u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u4E0B\u6807\uFF0C\u5982\u679C\u53EF\u4EE5\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [2,3,1,1,4]</span>
<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u53EF\u4EE5\u5148\u8DF3 1 \u6B65\uFF0C\u4ECE\u4E0B\u6807 0 \u5230\u8FBE\u4E0B\u6807 1, \u7136\u540E\u518D\u4ECE\u4E0B\u6807 1 \u8DF3 3 \u6B65\u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u4E0B\u6807\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [3,2,1,0,4]</span>
<span class="token comment">// \u8F93\u51FA\uFF1Afalse</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u65E0\u8BBA\u600E\u6837\uFF0C\u603B\u4F1A\u5230\u8FBE\u4E0B\u6807\u4E3A 3 \u7684\u4F4D\u7F6E\u3002\u4F46\u8BE5\u4E0B\u6807\u7684\u6700\u5927\u8DF3\u8DC3\u957F\u5EA6\u662F 0 \uFF0C \u6240\u4EE5\u6C38\u8FDC\u4E0D\u53EF\u80FD\u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u4E0B\u6807\u3002</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canJump</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> end <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
