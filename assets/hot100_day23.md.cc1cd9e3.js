import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u62EC\u53F7 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day23.md","lastUpdated":1731465675958}',o={};function c(e,n,u,l,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u62EC\u53F7" tabindex="-1">\u62EC\u53F7 <a class="header-anchor" href="#\u62EC\u53F7" aria-hidden="true">#</a></h1><p><strong>22. \u62EC\u53F7\u751F\u6210</strong></p><div class="language-js"><pre><code><span class="token comment">// \u6570\u5B57 n \u4EE3\u8868\u751F\u6210\u62EC\u53F7\u7684\u5BF9\u6570\uFF0C\u8BF7\u4F60\u8BBE\u8BA1\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u80FD\u591F\u751F\u6210\u6240\u6709\u53EF\u80FD\u7684\u5E76\u4E14 \u6709\u6548\u7684 \u62EC\u53F7\u7EC4\u5408\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 3</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[&quot;((()))&quot;,&quot;(()())&quot;,&quot;(())()&quot;,&quot;()(())&quot;,&quot;()()()&quot;]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 1</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[&quot;()&quot;]</span>

<span class="token comment">/**
 * @param {number} n
 * @return {string[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generateParenthesis</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">===</span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> str <span class="token operator">+</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> str <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>20. \u6709\u6548\u7684\u62EC\u53F7</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u53EA\u5305\u62EC &#39;(&#39;\uFF0C&#39;)&#39;\uFF0C&#39;{&#39;\uFF0C&#39;}&#39;\uFF0C&#39;[&#39;\uFF0C&#39;]&#39; \u7684\u5B57\u7B26\u4E32 s \uFF0C\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u6709\u6548\u3002</span>

<span class="token comment">// \u6709\u6548\u5B57\u7B26\u4E32\u9700\u6EE1\u8DB3\uFF1A</span>

<span class="token comment">// \u5DE6\u62EC\u53F7\u5FC5\u987B\u7528\u76F8\u540C\u7C7B\u578B\u7684\u53F3\u62EC\u53F7\u95ED\u5408\u3002</span>
<span class="token comment">// \u5DE6\u62EC\u53F7\u5FC5\u987B\u4EE5\u6B63\u786E\u7684\u987A\u5E8F\u95ED\u5408\u3002</span>
<span class="token comment">// \u6BCF\u4E2A\u53F3\u62EC\u53F7\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u76F8\u540C\u7C7B\u578B\u7684\u5DE6\u62EC\u53F7\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;()&quot;</span>

<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>

<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;()[]{}&quot;</span>

<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>

<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;(]&quot;</span>

<span class="token comment">// \u8F93\u51FA\uFF1Afalse</span>

<span class="token comment">// \u793A\u4F8B 4\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;([])&quot;</span>

<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>

<span class="token comment">/**
 * @param {string} s
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> str <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">!==</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
            stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,5)]))}var d=s(o,[["render",c]]);export{m as __pageData,d as default};
