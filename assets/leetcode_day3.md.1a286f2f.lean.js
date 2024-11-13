import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5B57\u7B26\u4E32 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day3.md","lastUpdated":1731465675962}',o={};function e(c,n,u,l,r,k){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5B57\u7B26\u4E32" tabindex="-1">\u5B57\u7B26\u4E32 <a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 05. \u66FF\u6362\u7A7A\u683C(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u8BF7\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u628A\u5B57\u7B26\u4E32 s \u4E2D\u7684\u6BCF\u4E2A\u7A7A\u683C\u66FF\u6362\u6210&quot;%20&quot;\u3002</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;We are happy.&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;We%20are%20happy.&quot;</span>

<span class="token comment">/**
 * @param {string} s
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">replaceSpace</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u7A7A\u5B57\u7B26\u51FA\u554A</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6</span>
  <span class="token comment">// \u904D\u5386\u5B57\u7B26\u4E32</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5047\u5982\u5F53\u524D\u5B57\u7B26\u4E3A\u7A7A\u683C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      str <span class="token operator">+=</span> <span class="token string">&quot;%20&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u539F\u5B57\u7B26\u62FC\u63A5 %20</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u8D70\u4E0B\u9762\u903B\u8F91 \u7EE7\u7EED\u5FAA\u73AF</span>
    <span class="token punctuation">}</span>
    str <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u62FC\u63A5\u5F53\u524D\u5B57\u7B26</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. \u5251\u6307 Offer 58 - II. \u5DE6\u65CB\u8F6C\u5B57\u7B26\u4E32(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseLeftWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stringArr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B57\u7B26\u4E32\u8F6C\u6570\u7EC4</span>
  <span class="token comment">// \u9996\u5148\u53CD\u8F6C0 \u5230 n - 1\u7684\u5B57\u7B26</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>stringArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> stringArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>stringArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> stringArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    left<span class="token operator">++</span><span class="token punctuation">;</span>
    right<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53CD\u8F6Cn \u5230 s.length - 1\u7684\u5B57\u7B26</span>
  left <span class="token operator">=</span> n<span class="token punctuation">;</span>
  right <span class="token operator">=</span> lastIndex<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>stringArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> stringArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>stringArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> stringArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    left<span class="token operator">++</span><span class="token punctuation">;</span>
    right<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5B8C\u6574\u5B57\u7B26\u53CD\u8F6C</span>
  left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  right <span class="token operator">=</span> lastIndex<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>stringArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> stringArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>stringArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> stringArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    left<span class="token operator">++</span><span class="token punctuation">;</span>
    right<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> stringArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u7EC4\u8F6C\u5B57\u7B26\u4E32</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
