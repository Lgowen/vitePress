import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5B57\u7B26\u4E32\u89E3\u7801 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day1.md","lastUpdated":1731465675958}',o={};function e(c,n,k,u,l,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5B57\u7B26\u4E32\u89E3\u7801" tabindex="-1">\u5B57\u7B26\u4E32\u89E3\u7801 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u89E3\u7801" aria-hidden="true">#</a></h1><p><strong>394. \u5B57\u7B26\u4E32\u89E3\u7801</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u7ECF\u8FC7\u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u5B83\u89E3\u7801\u540E\u7684\u5B57\u7B26\u4E32\u3002</span>

<span class="token comment">// \u7F16\u7801\u89C4\u5219\u4E3A: k[encoded_string]\uFF0C\u8868\u793A\u5176\u4E2D\u65B9\u62EC\u53F7\u5185\u90E8\u7684 encoded_string \u6B63\u597D\u91CD\u590D k \u6B21\u3002\u6CE8\u610F k \u4FDD\u8BC1\u4E3A\u6B63\u6574\u6570\u3002</span>

<span class="token comment">// \u4F60\u53EF\u4EE5\u8BA4\u4E3A\u8F93\u5165\u5B57\u7B26\u4E32\u603B\u662F\u6709\u6548\u7684\uFF1B\u8F93\u5165\u5B57\u7B26\u4E32\u4E2D\u6CA1\u6709\u989D\u5916\u7684\u7A7A\u683C\uFF0C\u4E14\u8F93\u5165\u7684\u65B9\u62EC\u53F7\u603B\u662F\u7B26\u5408\u683C\u5F0F\u8981\u6C42\u7684\u3002</span>

<span class="token comment">// \u6B64\u5916\uFF0C\u4F60\u53EF\u4EE5\u8BA4\u4E3A\u539F\u59CB\u6570\u636E\u4E0D\u5305\u542B\u6570\u5B57\uFF0C\u6240\u6709\u7684\u6570\u5B57\u53EA\u8868\u793A\u91CD\u590D\u7684\u6B21\u6570 k \uFF0C\u4F8B\u5982\u4E0D\u4F1A\u51FA\u73B0\u50CF 3a \u6216 2[4] \u7684\u8F93\u5165\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;3[a]2[bc]&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;aaabcbc&quot;</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;3[a2[c]]&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;accaccacc&quot;</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;2[abc]3[cd]ef&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;abcabccdcdcdef&quot;</span>
<span class="token comment">// \u793A\u4F8B 4\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;abc3[cd]xyz&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;abccdcdcdxyz&quot;</span>

<span class="token comment">/**
 * @param {string} s
 * @return {string}
 */</span>
 <span class="token comment">// &quot;3[a2[c]]&quot;</span>
<span class="token keyword">var</span> <span class="token function-variable function">decodeString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> strStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> numStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> str <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            strStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            numStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
            num <span class="token operator">=</span> <span class="token number">0</span>
            res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> repeatTimes <span class="token operator">=</span> numStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            res <span class="token operator">=</span> strStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>repeatTimes<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> str
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
