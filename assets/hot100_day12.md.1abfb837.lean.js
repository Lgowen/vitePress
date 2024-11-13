import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u5355\u8BCD\u62C6\u5206 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day12.md","lastUpdated":1731465675958}',o={};function e(c,n,u,l,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5355\u8BCD\u62C6\u5206" tabindex="-1">\u5355\u8BCD\u62C6\u5206 <a class="header-anchor" href="#\u5355\u8BCD\u62C6\u5206" aria-hidden="true">#</a></h1><p><strong>139. \u5355\u8BCD\u62C6\u5206</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s \u548C\u4E00\u4E2A\u5B57\u7B26\u4E32\u5217\u8868 wordDict \u4F5C\u4E3A\u5B57\u5178\u3002\u5982\u679C\u53EF\u4EE5\u5229\u7528\u5B57\u5178\u4E2D\u51FA\u73B0\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5355\u8BCD\u62FC\u63A5\u51FA s \u5219\u8FD4\u56DE true\u3002</span>

<span class="token comment">// \u6CE8\u610F\uFF1A\u4E0D\u8981\u6C42\u5B57\u5178\u4E2D\u51FA\u73B0\u7684\u5355\u8BCD\u5168\u90E8\u90FD\u4F7F\u7528\uFF0C\u5E76\u4E14\u5B57\u5178\u4E2D\u7684\u5355\u8BCD\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165: s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;, &quot;code&quot;]</span>
<span class="token comment">// \u8F93\u51FA: true</span>
<span class="token comment">// \u89E3\u91CA: \u8FD4\u56DE true \u56E0\u4E3A &quot;leetcode&quot; \u53EF\u4EE5\u7531 &quot;leet&quot; \u548C &quot;code&quot; \u62FC\u63A5\u6210\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165: s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;, &quot;pen&quot;]</span>
<span class="token comment">// \u8F93\u51FA: true</span>
<span class="token comment">// \u89E3\u91CA: \u8FD4\u56DE true \u56E0\u4E3A &quot;applepenapple&quot; \u53EF\u4EE5\u7531 &quot;apple&quot; &quot;pen&quot; &quot;apple&quot; \u62FC\u63A5\u6210\u3002</span>
<span class="token comment">//      \u6CE8\u610F\uFF0C\u4F60\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u5B57\u5178\u4E2D\u7684\u5355\u8BCD\u3002</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;, &quot;dog&quot;, &quot;sand&quot;, &quot;and&quot;, &quot;cat&quot;]</span>
<span class="token comment">// \u8F93\u51FA: false</span>

<span class="token comment">/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wordBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> wordDict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wordSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordDict<span class="token punctuation">)</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> suffix <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>wordSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>suffix<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>len<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,3)]))}var m=s(o,[["render",e]]);export{d as __pageData,m as default};
