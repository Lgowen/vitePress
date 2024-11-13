import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const i='{"title":"\u52A8\u6001\u89C4\u5212 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day10.md","lastUpdated":1731465675962}',o={};function e(c,n,l,k,r,u){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 46. \u628A\u6570\u5B57\u7FFB\u8BD1\u6210\u5B57\u7B26\u4E32</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u6570\u5B57\uFF0C\u6211\u4EEC\u6309\u7167\u5982\u4E0B\u89C4\u5219\u628A\u5B83\u7FFB\u8BD1\u4E3A\u5B57\u7B26\u4E32\uFF1A0 \u7FFB\u8BD1\u6210 \u201Ca\u201D \uFF0C1 \u7FFB\u8BD1\u6210 \u201Cb\u201D\uFF0C\u2026\u2026\uFF0C11 \u7FFB\u8BD1\u6210 \u201Cl\u201D\uFF0C\u2026\u2026\uFF0C25 \u7FFB\u8BD1\u6210 \u201Cz\u201D\u3002\u4E00\u4E2A\u6570\u5B57\u53EF\u80FD\u6709\u591A\u4E2A\u7FFB\u8BD1\u3002\u8BF7\u7F16\u7A0B\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u5B57\u6709\u591A\u5C11\u79CD\u4E0D\u540C\u7684\u7FFB\u8BD1\u65B9\u6CD5\u3002</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: 12258</span>
<span class="token comment">// \u8F93\u51FA: 5</span>
<span class="token comment">// \u89E3\u91CA: 12258\u67095\u79CD\u4E0D\u540C\u7684\u7FFB\u8BD1\uFF0C\u5206\u522B\u662F&quot;bccfi&quot;, &quot;bwfi&quot;, &quot;bczi&quot;, &quot;mcfi&quot;\u548C&quot;mzi&quot;</span>


<span class="token comment">// dp[i] = dp[i - 2] + dp[i - 1] -&gt; \u5047\u5982\u7B2Ci - 2\u548C\u7B2Ci - 1\u4E24\u4F4D\u6570\u5B57\u80FD\u8FDE\u7EED\u7FFB\u8BD1\u7684\u8BDD</span>
<span class="token comment">// dp[i] = dp[i - 1] -&gt; \u5047\u5982\u7B2Ci - 2\u548C\u7B2Ci - 1\u4E24\u4F4D\u6570\u5B57\u4E0D\u80FD\u8FDE\u7EED\u7FFB\u8BD1\u7684\u8BDD</span>

<span class="token comment">/**
 * @param {number} num
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">translateNum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> str <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8F6C\u5B57\u7B26\u4E32</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span>length <span class="token comment">// \u83B7\u53D6\u957F\u5EA6</span>

    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u521D\u59CB\u5316dp[0] -&gt; \u56E0\u4E3A\u7FFB\u8BD1\u524D0\u4E2A\u6570\u5B57\u7684\u65B9\u6CD5\u6709\u4E00\u79CD</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u521D\u59CB\u5316dp[1] -&gt; \u56E0\u4E3A\u7FFB\u8BD1\u524D1\u4E2A\u6570\u5B57\u7684\u65B9\u6CD5\u6709\u4E00\u79CD</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> str<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> temp <span class="token operator">&lt;=</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> newPre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> pre <span class="token operator">+</span> cur
            pre <span class="token operator">=</span> newPre
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> cur <span class="token comment">// dp[i]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. \u5251\u6307 Offer 48. \u6700\u957F\u4E0D\u542B\u91CD\u590D\u5B57\u7B26\u7684\u5B50\u5B57\u7B26\u4E32</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u8BF7\u4ECE\u5B57\u7B26\u4E32\u4E2D\u627E\u51FA\u4E00\u4E2A\u6700\u957F\u7684\u4E0D\u5305\u542B\u91CD\u590D\u5B57\u7B26\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u8BA1\u7B97\u8BE5\u6700\u957F\u5B50\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u3002</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: &quot;abcabcbb&quot;</span>
<span class="token comment">// \u8F93\u51FA: 3 </span>
<span class="token comment">// \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;abc&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002</span>
<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: &quot;bbbbb&quot;</span>
<span class="token comment">// \u8F93\u51FA: 1</span>
<span class="token comment">// \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;b&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 1\u3002</span>
<span class="token comment">// \u793A\u4F8B 3:</span>

<span class="token comment">// \u8F93\u5165: &quot;pwwkew&quot;</span>
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
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// </span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u6EDA\u52A8\u7684\u7D22\u5F15 -&gt; dp[j] \u4EE5j\u7ED3\u5C3E\u7684\u6570\u5B57\u80FD\u83B7\u53D6\u7684\u6700\u5927\u503C</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// map\u4FDD\u5B58\u6BCF\u4E2A\u5B57\u6BCD\u6700\u65B0\u51FA\u73B0\u7684\u7D22\u5F15\u4F4D\u7F6E</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">// \u521D\u59CB\u5316\u6700\u5927\u503C</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u521D\u59CB\u5316\u4E2D\u95F4\u503C -&gt; dp[j - 1]</span>
    map<span class="token punctuation">[</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span>  len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        i <span class="token operator">=</span> map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment">// \u83B7\u53D6\u8BE5\u5B57\u7B26\u6700\u8FD1\u51FA\u73B0\u7684\u4F4D\u7F6E</span>

        i <span class="token operator">=</span> i <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> i <span class="token comment">// \u6CA1\u51FA\u73B0\u7684\u7ED9\u4E2A\u521D\u59CB\u503C</span>

        map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token comment">// \u8BBE\u7F6E\u5F53\u524D\u5B57\u7B26\u7684\u4F4D\u7F6E</span>
        
        <span class="token comment">// dp[j] = dp[j - 1] &lt; j - i ? dp[j - 1] + 1 : j - i</span>
        <span class="token comment">// \u5047\u5982\u67D0\u4E2A\u5B57\u7B26\u6CA1\u6709\u51FA\u73B0\u8FC7 \u5219\u5F53\u524D\u6700\u5927\u503C+1 \u5426\u5219\u5F53\u524D\u6700\u5927\u503C\u4E3A\u4E24\u6B21\u51FA\u73B0\u5B57\u7B26\u7684\u4F4D\u7F6E\u4E4B\u5DEE</span>
        temp <span class="token operator">=</span> temp <span class="token operator">&lt;</span> j <span class="token operator">-</span> i <span class="token operator">?</span> temp <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> j <span class="token operator">-</span> i
        
        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> max<span class="token punctuation">)</span> <span class="token comment">// \u6BCF\u6B21\u53D6\u8BE5\u8F6E\u6700\u5927\u503C\u4E0E\u524D\u9762\u7684\u6700\u5927\u503C\u76F8\u6BD4\u8F83</span>
        j<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{i as __pageData,d as default};
