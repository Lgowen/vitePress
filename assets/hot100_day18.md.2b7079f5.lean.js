import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u8DF3\u8DC3\u6E38\u620F #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day18.md","lastUpdated":1731465675958}',e={};function o(c,n,l,r,u,k){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u8DF3\u8DC3\u6E38\u620F" tabindex="-1">\u8DF3\u8DC3\u6E38\u620F <a class="header-anchor" href="#\u8DF3\u8DC3\u6E38\u620F" aria-hidden="true">#</a></h1><p><strong>55. \u8DF3\u8DC3\u6E38\u620F</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\u6570\u7EC4 nums \uFF0C\u4F60\u6700\u521D\u4F4D\u4E8E\u6570\u7EC4\u7684 \u7B2C\u4E00\u4E2A\u4E0B\u6807 \u3002\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u4EE3\u8868\u4F60\u5728\u8BE5\u4F4D\u7F6E\u53EF\u4EE5\u8DF3\u8DC3\u7684\u6700\u5927\u957F\u5EA6\u3002</span>

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

</code></pre></div>`,3)]))}var d=s(e,[["render",o]]);export{m as __pageData,d as default};
