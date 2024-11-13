import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u56DE\u6587 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day2.md","lastUpdated":1731465675958}',o={};function e(c,n,l,u,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u56DE\u6587" tabindex="-1">\u56DE\u6587 <a class="header-anchor" href="#\u56DE\u6587" aria-hidden="true">#</a></h1><p><strong>5. \u6700\u957F\u56DE\u6587\u5B50\u4E32</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u627E\u5230 s \u4E2D\u6700\u957F\u7684 \u56DE\u6587\u5B50\u4E32</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;babad&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;bab&quot;</span>
<span class="token comment">// \u89E3\u91CA\uFF1A&quot;aba&quot; \u540C\u6837\u662F\u7B26\u5408\u9898\u610F\u7684\u7B54\u6848\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;cbbd&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;bb&quot;</span>

<span class="token comment">/**
 * @param {string} s
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length

  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s

  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">function</span> <span class="token function">handleSearch</span><span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      l<span class="token operator">--</span>
      r<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">&gt;</span> right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> r
      left <span class="token operator">=</span> l
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleSearch</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token function">handleSearch</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>


  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>647. \u56DE\u6587\u5B50\u4E32</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u7EDF\u8BA1\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5B57\u7B26\u4E32\u4E2D \u56DE\u6587\u5B50\u4E32 \u7684\u6570\u76EE\u3002</span>

<span class="token comment">// \u56DE\u6587\u5B57\u7B26\u4E32 \u662F\u6B63\u7740\u8BFB\u548C\u5012\u8FC7\u6765\u8BFB\u4E00\u6837\u7684\u5B57\u7B26\u4E32\u3002</span>

<span class="token comment">// \u5B50\u5B57\u7B26\u4E32 \u662F\u5B57\u7B26\u4E32\u4E2D\u7684\u7531\u8FDE\u7EED\u5B57\u7B26\u7EC4\u6210\u7684\u4E00\u4E2A\u5E8F\u5217\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;abc&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u4E09\u4E2A\u56DE\u6587\u5B50\u4E32: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;aaa&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A6</span>
<span class="token comment">// \u89E3\u91CA\uFF1A6\u4E2A\u56DE\u6587\u5B50\u4E32: &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;aa&quot;, &quot;aa&quot;, &quot;aaa&quot;</span>

<span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countSubstrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>



    <span class="token keyword">function</span> <span class="token function">handleStr</span><span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l<span class="token operator">--</span>
            r<span class="token operator">++</span>
            count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token function">handleStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> count
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
