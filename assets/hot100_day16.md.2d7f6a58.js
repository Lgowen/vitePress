import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u4E0D\u540C\u8DEF\u5F84 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day16.md","lastUpdated":1731465675958}',o={};function e(c,n,l,r,u,k){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u4E0D\u540C\u8DEF\u5F84" tabindex="-1">\u4E0D\u540C\u8DEF\u5F84 <a class="header-anchor" href="#\u4E0D\u540C\u8DEF\u5F84" aria-hidden="true">#</a></h1><p><strong>62. \u4E0D\u540C\u8DEF\u5F84</strong></p><div class="language-js"><pre><code><span class="token comment">// \u4E00\u4E2A\u673A\u5668\u4EBA\u4F4D\u4E8E\u4E00\u4E2A m x n \u7F51\u683C\u7684\u5DE6\u4E0A\u89D2 \uFF08\u8D77\u59CB\u70B9\u5728\u4E0B\u56FE\u4E2D\u6807\u8BB0\u4E3A \u201CStart\u201D \uFF09\u3002</span>

<span class="token comment">// \u673A\u5668\u4EBA\u6BCF\u6B21\u53EA\u80FD\u5411\u4E0B\u6216\u8005\u5411\u53F3\u79FB\u52A8\u4E00\u6B65\u3002\u673A\u5668\u4EBA\u8BD5\u56FE\u8FBE\u5230\u7F51\u683C\u7684\u53F3\u4E0B\u89D2\uFF08\u5728\u4E0B\u56FE\u4E2D\u6807\u8BB0\u4E3A \u201CFinish\u201D \uFF09\u3002</span>

<span class="token comment">// \u95EE\u603B\u5171\u6709\u591A\u5C11\u6761\u4E0D\u540C\u7684\u8DEF\u5F84\uFF1F</span>

<span class="token comment">/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var m=s(o,[["render",e]]);export{d as __pageData,m as default};
