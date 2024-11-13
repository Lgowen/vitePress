import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day25.md","lastUpdated":1731465675958}',o={};function e(c,n,l,k,u,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" tabindex="-1">\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32 <a class="header-anchor" href="#\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" aria-hidden="true">#</a></h1><p><strong>3. \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 \u6700\u957F \u5B50\u4E32\u7684\u957F\u5EA6\u3002</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: s = &quot;abcabcbb&quot;</span>
<span class="token comment">// \u8F93\u51FA: 3 </span>
<span class="token comment">// \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;abc&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002</span>
<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: s = &quot;bbbbb&quot;</span>
<span class="token comment">// \u8F93\u51FA: 1</span>
<span class="token comment">// \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;b&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 1\u3002</span>
<span class="token comment">// \u793A\u4F8B 3:</span>

<span class="token comment">// \u8F93\u5165: s = &quot;pwwkew&quot;</span>
<span class="token comment">// \u8F93\u51FA: 3</span>
<span class="token comment">// \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;wke&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002</span>
<span class="token comment">//      \u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C&quot;pwke&quot; \u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32\u3002</span>


<span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length 

    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>

    <span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fast <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> fast<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cur <span class="token operator">=</span> s<span class="token punctuation">[</span>fast<span class="token punctuation">]</span>
        <span class="token keyword">const</span> isExist <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>isExist <span class="token operator">&amp;&amp;</span> slow <span class="token operator">&lt;=</span> lastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> lastIndex <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> fast<span class="token punctuation">)</span>
        count <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> fast <span class="token operator">-</span> slow <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> count
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
