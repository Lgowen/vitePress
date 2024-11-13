import{_ as a,A as s,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u7EC4\u5408\u603B\u548C #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day19.md","lastUpdated":1731465675958}',o={};function e(c,n,u,l,k,i){return p(),s("div",null,n[0]||(n[0]=[t(`<h1 id="\u7EC4\u5408\u603B\u548C" tabindex="-1">\u7EC4\u5408\u603B\u548C <a class="header-anchor" href="#\u7EC4\u5408\u603B\u548C" aria-hidden="true">#</a></h1><p><strong>39. \u7EC4\u5408\u603B\u548C</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A \u65E0\u91CD\u590D\u5143\u7D20 \u7684\u6574\u6570\u6570\u7EC4 candidates \u548C\u4E00\u4E2A\u76EE\u6807\u6574\u6570 target \uFF0C\u627E\u51FA candidates \u4E2D\u53EF\u4EE5\u4F7F\u6570\u5B57\u548C\u4E3A\u76EE\u6807\u6570 target \u7684 \u6240\u6709 \u4E0D\u540C\u7EC4\u5408 \uFF0C\u5E76\u4EE5\u5217\u8868\u5F62\u5F0F\u8FD4\u56DE\u3002\u4F60\u53EF\u4EE5\u6309 \u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u8FD9\u4E9B\u7EC4\u5408\u3002</span>

<span class="token comment">// candidates \u4E2D\u7684 \u540C\u4E00\u4E2A \u6570\u5B57\u53EF\u4EE5 \u65E0\u9650\u5236\u91CD\u590D\u88AB\u9009\u53D6 \u3002\u5982\u679C\u81F3\u5C11\u4E00\u4E2A\u6570\u5B57\u7684\u88AB\u9009\u6570\u91CF\u4E0D\u540C\uFF0C\u5219\u4E24\u79CD\u7EC4\u5408\u662F\u4E0D\u540C\u7684\u3002 </span>

<span class="token comment">// \u5BF9\u4E8E\u7ED9\u5B9A\u7684\u8F93\u5165\uFF0C\u4FDD\u8BC1\u548C\u4E3A target \u7684\u4E0D\u540C\u7EC4\u5408\u6570\u5C11\u4E8E 150 \u4E2A\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Acandidates = [2,3,6,7], target = 7</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[2,2,3],[7]]</span>
<span class="token comment">// \u89E3\u91CA\uFF1A</span>
<span class="token comment">// 2 \u548C 3 \u53EF\u4EE5\u5F62\u6210\u4E00\u7EC4\u5019\u9009\uFF0C2 + 2 + 3 = 7 \u3002\u6CE8\u610F 2 \u53EF\u4EE5\u4F7F\u7528\u591A\u6B21\u3002</span>
<span class="token comment">// 7 \u4E5F\u662F\u4E00\u4E2A\u5019\u9009\uFF0C 7 = 7 \u3002</span>
<span class="token comment">// \u4EC5\u6709\u8FD9\u4E24\u79CD\u7EC4\u5408\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165: candidates = [2,3,5], target = 8</span>
<span class="token comment">// \u8F93\u51FA: [[2,2,2,2],[2,3,3],[3,5]]</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165: candidates = [2], target = 1</span>
<span class="token comment">// \u8F93\u51FA: []</span>
<span class="token comment">/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">candidates<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> combine<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">===</span> candidates<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>combine<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token function">dfs</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> combine<span class="token punctuation">,</span> idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">-</span> candidates<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>target <span class="token operator">-</span> candidates<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>combine<span class="token punctuation">,</span> candidates<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> idx<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var m=a(o,[["render",e]]);export{d as __pageData,m as default};
