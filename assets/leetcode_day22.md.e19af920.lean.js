import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u591A\u7EF4\u52A8\u6001\u89C4\u5212 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day22.md","lastUpdated":1731465675962}',o={};function e(c,n,u,l,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u591A\u7EF4\u52A8\u6001\u89C4\u5212" tabindex="-1">\u591A\u7EF4\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u591A\u7EF4\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><p><strong>62. \u4E0D\u540C\u8DEF\u5F84</strong></p><div class="language-js"><pre><code><span class="token comment">// \u4E00\u4E2A\u673A\u5668\u4EBA\u4F4D\u4E8E\u4E00\u4E2A m x n \u7F51\u683C\u7684\u5DE6\u4E0A\u89D2 \uFF08\u8D77\u59CB\u70B9\u5728\u4E0B\u56FE\u4E2D\u6807\u8BB0\u4E3A \u201CStart\u201D \uFF09\u3002</span>

<span class="token comment">// \u673A\u5668\u4EBA\u6BCF\u6B21\u53EA\u80FD\u5411\u4E0B\u6216\u8005\u5411\u53F3\u79FB\u52A8\u4E00\u6B65\u3002\u673A\u5668\u4EBA\u8BD5\u56FE\u8FBE\u5230\u7F51\u683C\u7684\u53F3\u4E0B\u89D2\uFF08\u5728\u4E0B\u56FE\u4E2D\u6807\u8BB0\u4E3A \u201CFinish\u201D \uFF09\u3002</span>

<span class="token comment">// \u95EE\u603B\u5171\u6709\u591A\u5C11\u6761\u4E0D\u540C\u7684\u8DEF\u5F84\uFF1F</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Am = 3, n = 7</span>
<span class="token comment">// \u8F93\u51FA\uFF1A28</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Am = 3, n = 2</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>
<span class="token comment">// \u89E3\u91CA\uFF1A</span>
<span class="token comment">// \u4ECE\u5DE6\u4E0A\u89D2\u5F00\u59CB\uFF0C\u603B\u5171\u6709 3 \u6761\u8DEF\u5F84\u53EF\u4EE5\u5230\u8FBE\u53F3\u4E0B\u89D2\u3002</span>
<span class="token comment">// 1. \u5411\u53F3 -&gt; \u5411\u4E0B -&gt; \u5411\u4E0B</span>
<span class="token comment">// 2. \u5411\u4E0B -&gt; \u5411\u4E0B -&gt; \u5411\u53F3</span>
<span class="token comment">// 3. \u5411\u4E0B -&gt; \u5411\u53F3 -&gt; \u5411\u4E0B</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Am = 7, n = 3</span>
<span class="token comment">// \u8F93\u51FA\uFF1A28</span>
<span class="token comment">// \u793A\u4F8B 4\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Am = 3, n = 3</span>
<span class="token comment">// \u8F93\u51FA\uFF1A6</span>


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

</code></pre></div><p><strong>64. \u6700\u5C0F\u8DEF\u5F84\u548C</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u5305\u542B\u975E\u8D1F\u6574\u6570\u7684 m x n \u7F51\u683C grid \uFF0C\u8BF7\u627E\u51FA\u4E00\u6761\u4ECE\u5DE6\u4E0A\u89D2\u5230\u53F3\u4E0B\u89D2\u7684\u8DEF\u5F84\uFF0C\u4F7F\u5F97\u8DEF\u5F84\u4E0A\u7684\u6570\u5B57\u603B\u548C\u4E3A\u6700\u5C0F\u3002</span>

<span class="token comment">// \u8BF4\u660E\uFF1A\u6BCF\u6B21\u53EA\u80FD\u5411\u4E0B\u6216\u8005\u5411\u53F3\u79FB\u52A8\u4E00\u6B65\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>


<span class="token comment">// \u8F93\u5165\uFF1Agrid = [[1,3,1],[1,5,1],[4,2,1]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A7</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u56E0\u4E3A\u8DEF\u5F84 1\u21923\u21921\u21921\u21921 \u7684\u603B\u548C\u6700\u5C0F\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Agrid = [[1,2,3],[4,5,6]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A12</span>
 
<span class="token comment">/**
 * @param {number[][]} grid
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> grid<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>5. \u6700\u957F\u56DE\u6587\u5B50\u4E32</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u627E\u5230 s \u4E2D\u6700\u957F\u7684\u56DE\u6587\u5B50\u4E32\u3002</span>

<span class="token comment">// \u5982\u679C\u5B57\u7B26\u4E32\u7684\u53CD\u5E8F\u4E0E\u539F\u59CB\u5B57\u7B26\u4E32\u76F8\u540C\uFF0C\u5219\u8BE5\u5B57\u7B26\u4E32\u79F0\u4E3A\u56DE\u6587\u5B57\u7B26\u4E32\u3002</span>

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

    <span class="token keyword">function</span> <span class="token function">handleStr</span><span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">&lt;=</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l<span class="token operator">--</span>
            r<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&lt;</span> r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> r
            left <span class="token operator">=</span> l
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token function">handleStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre></div><p><strong>647. \u56DE\u6587\u5B50\u4E32</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u7EDF\u8BA1\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5B57\u7B26\u4E32\u4E2D \u56DE\u6587\u5B50\u4E32 \u7684\u6570\u76EE\u3002</span>

<span class="token comment">// \u56DE\u6587\u5B57\u7B26\u4E32 \u662F\u6B63\u7740\u8BFB\u548C\u5012\u8FC7\u6765\u8BFB\u4E00\u6837\u7684\u5B57\u7B26\u4E32\u3002</span>

<span class="token comment">// \u5B50\u5B57\u7B26\u4E32 \u662F\u5B57\u7B26\u4E32\u4E2D\u7684\u7531\u8FDE\u7EED\u5B57\u7B26\u7EC4\u6210\u7684\u4E00\u4E2A\u5E8F\u5217\u3002</span>

<span class="token comment">// \u5177\u6709\u4E0D\u540C\u5F00\u59CB\u4F4D\u7F6E\u6216\u7ED3\u675F\u4F4D\u7F6E\u7684\u5B50\u4E32\uFF0C\u5373\u4F7F\u662F\u7531\u76F8\u540C\u7684\u5B57\u7B26\u7EC4\u6210\uFF0C\u4E5F\u4F1A\u88AB\u89C6\u4F5C\u4E0D\u540C\u7684\u5B50\u4E32\u3002</span>

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
<span class="token keyword">var</span> <span class="token function-variable function">countSubstrings</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">function</span> <span class="token function">handleStr</span><span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l<span class="token operator">--</span>
            r<span class="token operator">++</span>
            res<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token function">handleStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>1143. \u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E24\u4E2A\u5B57\u7B26\u4E32 text1 \u548C text2\uFF0C\u8FD4\u56DE\u8FD9\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u6700\u957F \u516C\u5171\u5B50\u5E8F\u5217 \u7684\u957F\u5EA6\u3002\u5982\u679C\u4E0D\u5B58\u5728 \u516C\u5171\u5B50\u5E8F\u5217 \uFF0C\u8FD4\u56DE 0 \u3002</span>

<span class="token comment">// \u4E00\u4E2A\u5B57\u7B26\u4E32\u7684 \u5B50\u5E8F\u5217 \u662F\u6307\u8FD9\u6837\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\uFF1A\u5B83\u662F\u7531\u539F\u5B57\u7B26\u4E32\u5728\u4E0D\u6539\u53D8\u5B57\u7B26\u7684\u76F8\u5BF9\u987A\u5E8F\u7684\u60C5\u51B5\u4E0B\u5220\u9664\u67D0\u4E9B\u5B57\u7B26\uFF08\u4E5F\u53EF\u4EE5\u4E0D\u5220\u9664\u4EFB\u4F55\u5B57\u7B26\uFF09\u540E\u7EC4\u6210\u7684\u65B0\u5B57\u7B26\u4E32\u3002</span>

<span class="token comment">// \u4F8B\u5982\uFF0C&quot;ace&quot; \u662F &quot;abcde&quot; \u7684\u5B50\u5E8F\u5217\uFF0C\u4F46 &quot;aec&quot; \u4E0D\u662F &quot;abcde&quot; \u7684\u5B50\u5E8F\u5217\u3002</span>
<span class="token comment">// \u4E24\u4E2A\u5B57\u7B26\u4E32\u7684 \u516C\u5171\u5B50\u5E8F\u5217 \u662F\u8FD9\u4E24\u4E2A\u5B57\u7B26\u4E32\u6240\u5171\u540C\u62E5\u6709\u7684\u5B50\u5E8F\u5217\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Atext1 = &quot;abcde&quot;, text2 = &quot;ace&quot; </span>
<span class="token comment">// \u8F93\u51FA\uFF1A3  </span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\u662F &quot;ace&quot; \uFF0C\u5B83\u7684\u957F\u5EA6\u4E3A 3 \u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Atext1 = &quot;abc&quot;, text2 = &quot;abc&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\u662F &quot;abc&quot; \uFF0C\u5B83\u7684\u957F\u5EA6\u4E3A 3 \u3002</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Atext1 = &quot;abc&quot;, text2 = &quot;def&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A0</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u4E24\u4E2A\u5B57\u7B26\u4E32\u6CA1\u6709\u516C\u5171\u5B50\u5E8F\u5217\uFF0C\u8FD4\u56DE 0 \u3002</span>

<span class="token comment">/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonSubsequence</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">text1<span class="token punctuation">,</span> text2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len1 <span class="token operator">=</span> text1<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> text2<span class="token punctuation">.</span>length

    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> str1 <span class="token operator">=</span> text1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> str2 <span class="token operator">=</span> text2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str1 <span class="token operator">===</span> str2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>len1<span class="token punctuation">]</span><span class="token punctuation">[</span>len2<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>72. \u7F16\u8F91\u8DDD\u79BB</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E24\u4E2A\u5355\u8BCD word1 \u548C word2\uFF0C \u8BF7\u8FD4\u56DE\u5C06 word1 \u8F6C\u6362\u6210 word2 \u6240\u4F7F\u7528\u7684\u6700\u5C11\u64CD\u4F5C\u6570  \u3002</span>

<span class="token comment">// \u4F60\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u5355\u8BCD\u8FDB\u884C\u5982\u4E0B\u4E09\u79CD\u64CD\u4F5C\uFF1A</span>

<span class="token comment">// \u63D2\u5165\u4E00\u4E2A\u5B57\u7B26</span>
<span class="token comment">// \u5220\u9664\u4E00\u4E2A\u5B57\u7B26</span>
<span class="token comment">// \u66FF\u6362\u4E00\u4E2A\u5B57\u7B26</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aword1 = &quot;horse&quot;, word2 = &quot;ros&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>
<span class="token comment">// \u89E3\u91CA\uFF1A</span>
<span class="token comment">// horse -&gt; rorse (\u5C06 &#39;h&#39; \u66FF\u6362\u4E3A &#39;r&#39;)</span>
<span class="token comment">// rorse -&gt; rose (\u5220\u9664 &#39;r&#39;)</span>
<span class="token comment">// rose -&gt; ros (\u5220\u9664 &#39;e&#39;)</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aword1 = &quot;intention&quot;, word2 = &quot;execution&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A5</span>
<span class="token comment">// \u89E3\u91CA\uFF1A</span>
<span class="token comment">// intention -&gt; inention (\u5220\u9664 &#39;t&#39;)</span>
<span class="token comment">// inention -&gt; enention (\u5C06 &#39;i&#39; \u66FF\u6362\u4E3A &#39;e&#39;)</span>
<span class="token comment">// enention -&gt; exention (\u5C06 &#39;n&#39; \u66FF\u6362\u4E3A &#39;x&#39;)</span>
<span class="token comment">// exention -&gt; exection (\u5C06 &#39;n&#39; \u66FF\u6362\u4E3A &#39;c&#39;)</span>
<span class="token comment">// exection -&gt; execution (\u63D2\u5165 &#39;u&#39;)</span>

<span class="token comment">/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">word1<span class="token punctuation">,</span> word2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len1 <span class="token operator">=</span> word1<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> word2<span class="token punctuation">.</span>length

    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> str1 <span class="token operator">=</span> word1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> str2 <span class="token operator">=</span> word2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str1 <span class="token operator">===</span> str2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>len1<span class="token punctuation">]</span><span class="token punctuation">[</span>len2<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>221. \u6700\u5927\u6B63\u65B9\u5F62</strong></p><div class="language-js"><pre><code><span class="token comment">// \u5728\u4E00\u4E2A\u7531 &#39;0&#39; \u548C &#39;1&#39; \u7EC4\u6210\u7684\u4E8C\u7EF4\u77E9\u9635\u5185\uFF0C\u627E\u5230\u53EA\u5305\u542B &#39;1&#39; \u7684\u6700\u5927\u6B63\u65B9\u5F62\uFF0C\u5E76\u8FD4\u56DE\u5176\u9762\u79EF\u3002</span>

<span class="token comment">// \u8F93\u5165\uFF1Amatrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A4</span>

<span class="token comment">// \u8F93\u5165\uFF1Amatrix = [[&quot;0&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>

<span class="token comment">// \u8F93\u5165\uFF1Amatrix = [[&quot;0&quot;]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A0</span>

<span class="token comment">/**
 * @param {character[][]} matrix
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximalSquare</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len1 <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length

    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> maxSquare <span class="token operator">=</span> <span class="token number">0</span>


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
                maxSquare <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSquare<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxSquare <span class="token operator">*</span> maxSquare
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,15)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
