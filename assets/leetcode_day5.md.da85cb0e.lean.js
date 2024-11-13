import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u67E5\u627E\u7B97\u6CD5 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day5.md","lastUpdated":1731465675962}',o={};function e(c,n,l,u,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u67E5\u627E\u7B97\u6CD5" tabindex="-1">\u67E5\u627E\u7B97\u6CD5 <a class="header-anchor" href="#\u67E5\u627E\u7B97\u6CD5" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 04. \u4E8C\u7EF4\u6570\u7EC4\u4E2D\u7684\u67E5\u627E(Medium)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u5728\u4E00\u4E2A n * m \u7684\u4E8C\u7EF4\u6570\u7EC4\u4E2D\uFF0C\u6BCF\u4E00\u884C\u90FD\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u9012\u589E\u7684\u987A\u5E8F\u6392\u5E8F\uFF0C\u6BCF\u4E00\u5217\u90FD\u6309\u7167\u4ECE\u4E0A\u5230\u4E0B\u9012\u589E\u7684\u987A\u5E8F\u6392\u5E8F\u3002\u8BF7\u5B8C\u6210\u4E00\u4E2A\u9AD8\u6548\u7684\u51FD\u6570\uFF0C\u8F93\u5165\u8FD9\u6837\u7684\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\u548C\u4E00\u4E2A\u6574\u6570\uFF0C\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u542B\u6709\u8BE5\u6574\u6570\u3002</span>
<span class="token comment">// \u793A\u4F8B:</span>
<span class="token comment">// \u73B0\u6709\u77E9\u9635 matrix \u5982\u4E0B\uFF1A</span>

<span class="token comment">// [</span>
<span class="token comment">//   [1,   4,  7, 11, 15],</span>
<span class="token comment">//   [2,   5,  8, 12, 19],</span>
<span class="token comment">//   [3,   6,  9, 16, 22],</span>
<span class="token comment">//   [10, 13, 14, 17, 24],</span>
<span class="token comment">//   [18, 21, 23, 26, 30]</span>
<span class="token comment">// ]</span>
<span class="token comment">// \u7ED9\u5B9A target = 5\uFF0C\u8FD4\u56DE true\u3002</span>

<span class="token comment">// \u7ED9\u5B9A target = 20\uFF0C\u8FD4\u56DE false\u3002</span>

<span class="token comment">/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */</span>
<span class="token comment">// \u4ECE\u4E8C\u7EF4\u6570\u7EC4\u7684\u5DE6\u4E0B\u89D2\u5F00\u59CB\u5FAA\u73AF</span>
<span class="token keyword">var</span> <span class="token function-variable function">findNumberIn2DArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      x<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      y<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. \u5251\u6307 Offer 11. \u65CB\u8F6C\u6570\u7EC4\u7684\u6700\u5C0F\u6570\u5B57(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u628A\u4E00\u4E2A\u6570\u7EC4\u6700\u5F00\u59CB\u7684\u82E5\u5E72\u4E2A\u5143\u7D20\u642C\u5230\u6570\u7EC4\u7684\u672B\u5C3E\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u6570\u7EC4\u7684\u65CB\u8F6C\u3002</span>

<span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u53EF\u80FD\u5B58\u5728 \u91CD\u590D \u5143\u7D20\u503C\u7684\u6570\u7EC4 numbers \uFF0C\u5B83\u539F\u6765\u662F\u4E00\u4E2A\u5347\u5E8F\u6392\u5217\u7684\u6570\u7EC4\uFF0C\u5E76\u6309\u4E0A\u8FF0\u60C5\u5F62\u8FDB\u884C\u4E86\u4E00\u6B21\u65CB\u8F6C\u3002\u8BF7\u8FD4\u56DE\u65CB\u8F6C\u6570\u7EC4\u7684\u6700\u5C0F\u5143\u7D20\u3002\u4F8B\u5982\uFF0C\u6570\u7EC4 [3,4,5,1,2] \u4E3A [1,2,3,4,5] \u7684\u4E00\u6B21\u65CB\u8F6C\uFF0C\u8BE5\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E3A1\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1A[3,4,5,1,2]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1A[2,2,2,0,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A0</span>

<span class="token comment">/**
 * @param {number[]} numbers
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> left<span class="token punctuation">;</span> <span class="token comment">// +left\u9632\u6B62\u8D8A\u754C</span>
    <span class="token keyword">const</span> middle <span class="token operator">=</span> numbers<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">&lt;</span> numbers<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5047\u5982\u4E2D\u95F4\u503C\u5C0F\u4E8E\u6700\u53F3\u8FB9\u7684\u503C \u8BF4\u660E\u6700\u5C0F\u503C\u662F\u5B83\u81EA\u5DF1\u6216\u8005\u5728\u5DE6\u8FB9</span>
      right <span class="token operator">=</span> middleIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">&gt;</span> numbers<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5047\u5982\u4E2D\u95F4\u503C\u5927\u4E8E\u6700\u53F3\u8FB9\u7684\u503C \u8BF4\u660E\u6700\u5C0F\u503C\u5728\u53F3\u8FB9</span>
      left <span class="token operator">=</span> middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5047\u5982\u4E2D\u95F4\u503C\u7B49\u4E8E\u6700\u540E\u8FB9\u7684\u503C \u8BF4\u660E\u5B58\u5728\u91CD\u590D\u6570\u5B57</span>
      right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5F53left === right\u65F6\u8DF3\u51FA\u5FAA\u73AF</span>
  <span class="token keyword">return</span> numbers<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3. \u5251\u6307 Offer 50. \u7B2C\u4E00\u4E2A\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u5B57\u7B26(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u5728\u5B57\u7B26\u4E32 s \u4E2D\u627E\u51FA\u7B2C\u4E00\u4E2A\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u5B57\u7B26\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5355\u7A7A\u683C\u3002 s \u53EA\u5305\u542B\u5C0F\u5199\u5B57\u6BCD\u3002</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;abaccdeff&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&#39;b&#39;</span>
<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&#39; &#39;</span>

<span class="token comment">/**
 * @param {string} s
 * @return {character}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">firstUniqChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u7A7A\u5B57\u7B26\u76F4\u63A5\u8FD4\u56DE&#39; &#39;</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">;</span> <span class="token comment">// \u957F\u5EA6\u4E3A\u4E00\u7684\u5B57\u7B26\u76F4\u63A5\u8FD4\u56DE\u8BE5\u5B57\u7B26</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u54C8\u5E0C\u8868\u5B58\u503C</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u7528\u6570\u7EC4\u7EF4\u62A4\u5B57\u7B26\u7684\u987A\u5E8F</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> str <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token operator">!</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u907F\u514D\u91CD\u590D\u5F80\u6570\u7EC4\u4E2D\u63A8\u5165\u76F8\u540C\u7684key</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> key<span class="token punctuation">;</span> <span class="token comment">// \u904D\u5386\u6570\u7EC4\u4ECE\u54C8\u5E0C\u8868\u4E2D\u5BFB\u627Ekey\u5BF9\u5E94value\u4E3A1\u7684key \u78B0\u5230\u76F4\u63A5\u8FD4\u56DE</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5426\u5219\u8FD4\u56DE &#39; &#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,7)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
