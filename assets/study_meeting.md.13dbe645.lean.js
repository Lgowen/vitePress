import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u5B66\u4E60\u4E4B\u8DEF #","description":"","frontmatter":{},"headers":[],"relativePath":"study/meeting.md","lastUpdated":1731465675970}',o={};function e(c,n,u,l,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u5B66\u4E60\u4E4B\u8DEF" tabindex="-1">\u5B66\u4E60\u4E4B\u8DEF <a class="header-anchor" href="#\u5B66\u4E60\u4E4B\u8DEF" aria-hidden="true">#</a></h1><p><strong>3. \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 \u6700\u957F\u5B50\u4E32 \u7684\u957F\u5EA6\u3002</span>

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
    
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fast <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> fast<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cur <span class="token operator">=</span> s<span class="token punctuation">[</span>fast<span class="token punctuation">]</span>
        <span class="token keyword">const</span> isExist <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        <span class="token keyword">const</span> repeatIndex <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isExist <span class="token operator">&amp;&amp;</span> repeatIndex <span class="token operator">&gt;=</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4FDD\u8BC1\u6162\u6307\u9488\u6307\u5411\u7684\u4F4D\u7F6E\u662F\u4E00\u76F4\u5411\u53F3\u8D70\u7684</span>
            slow <span class="token operator">=</span> repeatIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// \u5F53\u4E14\u4EC5\u5F53\u5F53\u524D\u5B57\u7B26\u4E32\u4E0A\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\u5728\u6162\u6307\u9488\u7684\u53F3\u8FB9\u65F6\u624D\u9700\u8981\u6539\u53D8</span>
        <span class="token punctuation">}</span>

        res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> fast <span class="token operator">-</span> slow <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u66F4\u65B0\u6700\u5927\u503C</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">,</span> fast<span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u6216\u66F4\u65B0\u6BCF\u4E00\u4E2A\u5B57\u7B26\u5728\u5B57\u7B26\u4E32\u4E2D\u7684\u4F4D\u7F6E</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> res

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(n)</span>
<span class="token comment">// \u7A7A\u95F4\u590D\u6742\u5EA6: O(\u5B58\u5165map\u4E2D\u5B57\u7B26\u4E32\u7684\u4E2A\u6570)</span>

</code></pre></div><p><strong>718. \u6700\u957F\u91CD\u590D\u5B50\u6570\u7EC4</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u4E24\u4E2A\u6574\u6570\u6570\u7EC4 nums1 \u548C nums2 \uFF0C\u8FD4\u56DE \u4E24\u4E2A\u6570\u7EC4\u4E2D \u516C\u5171\u7684 \u3001\u957F\u5EA6\u6700\u957F\u7684\u5B50\u6570\u7EC4\u7684\u957F\u5EA6 \u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u957F\u5EA6\u6700\u957F\u7684\u516C\u5171\u5B50\u6570\u7EC4\u662F [3,2,1] \u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A5</span>

<span class="token comment">// dp[i][j] \u8868\u793A\u4EE5nums1[i]\u7ED3\u5C3E \u548Cnums2[j]\u7ED3\u5C3E</span>

<span class="token comment">/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLength</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len1 <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA\u4E00\u7EF4\u6570\u7EC4</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> len1<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA\u4E8C\u7EF4\u6570\u7EC4\u5E76\u4E14\u628A\u6BCF\u4E00\u9879\u90FD\u586B\u5145\u4E3A0</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u6700\u7EC8\u8FD4\u56DE\u7684\u7ED3\u679C</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5982\u679C\u5F53\u524D\u9879\u76F8\u540C</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> nums2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// \u5219\u53BB\u62FF\u524D\u7F00\u516C\u5171\u957F\u5EA6\u7684\u503C + 1\u8868\u793A\u5F53\u524D\u6700\u5927\u516C\u5171\u957F\u5EA6</span>
            <span class="token punctuation">}</span>
            res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res


    <span class="token comment">//  const len1 = nums1.length</span>
    <span class="token comment">// const len2 = nums2.length</span>

    <span class="token comment">// const dp = new Array(len2 + 1).fill(0) // \u521B\u5EFA\u4E00\u7EF4\u6570\u7EC4</span>

    <span class="token comment">// let max = 0</span>

    <span class="token comment">// for (let i = 1; i &lt;= len1; i++) {</span>
    <span class="token comment">//     for (let j = len2; j &gt;= 1; j--) {</span>
    <span class="token comment">//         if (nums1[i] === nums2[j]) {</span>
    <span class="token comment">//             dp[j] = dp[j - 1] + 1</span>
    <span class="token comment">//         } else {</span>
    <span class="token comment">//             dp[j] = 0</span>
    <span class="token comment">//         }</span>
    <span class="token comment">//         max = Math.max(max, dp[j])</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// }</span>

    <span class="token comment">// return max</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(M * N)</span>
<span class="token comment">// \u7A7A\u95F4\u590D\u6742\u5EA6: O(M * N)</span>

</code></pre></div><p><strong>5. \u6700\u957F\u56DE\u6587\u5B50\u4E32</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u627E\u5230 s \u4E2D\u6700\u957F\u7684\u56DE\u6587\u5B50\u4E32\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;babad&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;bab&quot;</span>
<span class="token comment">// \u89E3\u91CA\uFF1A&quot;aba&quot; \u540C\u6837\u662F\u7B26\u5408\u9898\u610F\u7684\u7B54\u6848\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;cbbd&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A&quot;bb&quot;</span>

<span class="token keyword">function</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> resLeft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resRight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> maxLen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s
    
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBEi\u4E3A\u4E2D\u5FC3\u7684\u7D22\u5F15 i = 0\u65F6\u7684\u7ED3\u679C\u6CA1\u6709\u610F\u4E49</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> end <span class="token operator">=</span> right<span class="token punctuation">;</span> <span class="token comment">//\u8FD9\u91CC\u7684right\u662F\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u8DDF\u4E2D\u5FC3s[i]\u4E0D\u76F8\u7B49\u7684\u5B57\u7B26\u7D22\u5F15\uFF0C\u4FDD\u5B58\u4E0B\u6765\uFF0C\u7B49\u4F1Ai\u76F4\u63A5\u8DF3\u5230end\u5904\uFF0C\u53EF\u51CF\u5C11\u91CD\u590D\u4E2D\u5FC3\u7684\u8BA1\u7B97</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token operator">--</span><span class="token punctuation">;</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>maxLen <span class="token operator">&lt;</span> right <span class="token operator">-</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            maxLen <span class="token operator">=</span> right <span class="token operator">-</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">// \u4E0A\u9762\u5FAA\u73AF\u7ED3\u675F\u65F6left\u548Cright\u5206\u522B\u6307\u5411\u7684\u662F\u7ED3\u679C\u5B57\u7B26\u4E32\u7684\u524D\u540E\u4E24\u9879 \u6240\u4EE5\u7ED3\u679C\u5B57\u7B26\u4E32\u7684\u9996\u5C3E\u4F4D\u7F6E\u9700\u8981\u5206\u522B+1 -1</span>
            <span class="token comment">// \u8FD9\u91CC\u7684resLeft\u548CresRight\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u5B57\u7B26\u4E32\u622A\u53D6api\u4E2D\u7684\u53C2\u6570 \u5373left + 1 \u548C right</span>
            resLeft <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> 
            resRight <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i <span class="token operator">=</span> end<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>resLeft<span class="token punctuation">,</span> resRight <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u622A\u53D6\u5B57\u7B26\u4E32</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">findMaxStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token comment">// \u5947\u6570</span>
        <span class="token function">findMaxStr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u5076\u6570</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">findMaxStr</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">--</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// \u5F53\u524Di \u548C j\u7EC8\u6B62\u7684\u5730\u65B9\u6BD4\u4E0A\u4E00\u6B21\u957F\u7684\u8BDD\u5C31\u66FF\u6362\u6307\u9488\u4F4D\u7F6E</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> right <span class="token operator">-</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> i
            right <span class="token operator">=</span> j
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token comment">// \u88C1\u526A\u5B57\u7B26\u4E32</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u5168\u6392\u5217</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u4E0D\u542B\u91CD\u590D\u6570\u5B57\u7684\u6570\u7EC4 nums \uFF0C\u8FD4\u56DE\u5176 \u6240\u6709\u53EF\u80FD\u7684\u5168\u6392\u5217 \u3002\u4F60\u53EF\u4EE5 \u6309\u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u7B54\u6848\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,2,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [0,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[0,1],[1,0]]</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[1]]</span>


<span class="token keyword">const</span> <span class="token function-variable function">permute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u653E\u7ED3\u679C</span>
    <span class="token keyword">const</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u653E\u6BCF\u4E00\u6761\u8DEF\u5F84</span>
    <span class="token function">backTrack</span><span class="token punctuation">(</span>track<span class="token punctuation">,</span> nums<span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">backTrack</span><span class="token punctuation">(</span><span class="token parameter">track</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5047\u5982\u8DEF\u5F84\u957F\u5EA6\u4E0Enums\u957F\u5EA6\u76F8\u540C \u5219\u8BE5\u6761\u8DEF\u5F84\u5BFB\u627E\u5B8C\u6BD5</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">===</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u56E0\u4E3A\u7528\u7684\u662F\u540C\u4E00\u4E2Atrack(\u5F15\u7528\u503C) \u6240\u4EE5\u5F53\u7B26\u5408\u8981\u6C42\u65F6\u63A8\u5165\u7ED3\u679C\u6570\u7EC4\u4E2D\u7684\u5E94\u8BE5\u662F\u4E00\u4E2A\u526F\u672C \u4E0D\u7136\u8BE5\u5F15\u7528\u503C\u5728\u4E00\u76F4\u6539\u53D8 \u6700\u540E\u5F97\u5230\u7684\u5168\u662F\u7A7A\u7684\u5217\u8868</span>
            <span class="token comment">// \u7531\u59CB\u81F3\u7EC8track\u53EA\u6709\u4E00\u4EFD \u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u56DE\u5230\u6839\u8282\u70B9\u6210\u4E3A\u7A7A\u5217\u8868</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token comment">// \u5047\u5982\u5F53\u524D\u8DEF\u5F84\u5B58\u5728\u8BE5\u503C(\u907F\u514D\u91CD\u590D\u9009\u62E9)</span>
            <span class="token comment">// \u6CA1\u6709\u663E\u793A\u8BB0\u5F55\u9009\u62E9\u5217\u8868</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u505A\u9009\u62E9</span>
            track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u9009\u62E9\u5F53\u524D\u7684\u8282\u70B9</span>

            <span class="token function">backTrack</span><span class="token punctuation">(</span>track<span class="token punctuation">)</span> <span class="token comment">// \u56DE\u6EAF\u8DEF\u5F84</span>

            track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// \u64A4\u9500\u9009\u62E9</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>N\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386\uFF08\u6DF1\u5EA6\u4F18\u5148\uFF09</strong></p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">preorder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>N\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386\uFF08\u5E7F\u5EA6\u4F18\u5148\uFF09</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {Node|null} root
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> level <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>size<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      level<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> node <span class="token keyword">of</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>N\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6</strong></p><div class="language-js"><pre><code>
<span class="token comment">/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */</span>

<span class="token comment">/**
 * @param {Node|null} root
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">let</span> level <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length
        level<span class="token operator">++</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>len<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> level

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u5927\u6570\u76F8\u52A0</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">bigNumberSum</span><span class="token punctuation">(</span><span class="token parameter">str1<span class="token punctuation">,</span> str2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B57\u7B26\u4E32\u8F6C\u6570\u7EC4\u4E14\u53CD\u8F6C \u4ECE\u4E2A\u4F4D\u6570\u5F00\u59CB\u76F8\u52A0</span>
    <span class="token keyword">const</span> arr1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> arr2 <span class="token operator">=</span> str2<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u907F\u514D\u53D6\u7684\u662Fundefined</span>
        <span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>
        <span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> num1 <span class="token operator">+</span> num2 <span class="token operator">+</span> flag <span class="token comment">// \u4E24\u4E2A\u5171\u540C\u4F4D\u7F6E\u7684\u6570\u76F8\u52A0\u518D\u52A0\u4E0A\u8FDB\u4F4D</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token number">10</span> <span class="token comment">// \u5047\u5982\u5927\u4E8E10\u53D6\u4F59\u6570</span>
            flag <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u5B58\u5728\u8FDB\u4F4D</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u4E0D\u5B58\u5728\u8FDB\u4F4D</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>

    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u6253\u5BB6\u52AB\u820D</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u5047\u5982\u53EA\u6709\u4E00\u95F4\u623F \u90A3\u4E48\u5C31\u5077\u8FD9\u95F4</span>
    <span class="token comment">// \u5047\u5982\u6709\u4E24\u95F4\u623F \u56E0\u4E3A\u4E0D\u80FD\u5077\u76F8\u90BB\u7684\u623F\u95F4 \u90A3\u5C31\u5077\u4E24\u95F4\u623F\u91CC\u94B1\u591A\u7684\u90A3\u95F4</span>
    <span class="token comment">// \u5047\u5982\u5927\u4E8E\u4E24\u95F4\u623F \u8BBE\u5B83\u4E3A\u7B2Ck\u95F4</span>
    <span class="token comment">// \u6709\u4E24\u4E2A\u9009\u62E9</span>
    <span class="token comment">// S(n) = Max(S(n - 2) + H(n), S(n - 1))</span>
    <span class="token comment">// S(0) = H(0)</span>
    <span class="token comment">// S(1) = Max(S(0), H(1))</span>
    <span class="token comment">// S(2) = Max(S(0) + H(2), S(1))</span>
    <span class="token comment">// S(3) = Max(S(1) + H(3), S(2))</span>



    <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> num1 <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// \u524Dk-1</span>
    <span class="token keyword">let</span> num2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u524Dk-2 + k</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cur <span class="token operator">=</span> num2
        num2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> num2<span class="token punctuation">)</span> <span class="token comment">// \u8981\u4E48\u9694\u7740\u5077 \u8981\u4E48\u5077\u4E2D\u95F4\u7684 \u53D6\u6700\u5927\u503C \u7D2F\u52A0</span>
        num1 <span class="token operator">=</span> cur
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> num2
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u62EC\u53F7\u5339\u914D</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length

    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u5B57\u7B26\u4E32\u5947\u6570\u7684\u60C5\u51B5</span>

    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> str <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u662F\u4E0D\u662F\u5DE6\u62EC\u53F7</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5047\u5982\u5F53\u524D\u662F\u53F3\u62EC\u53F7</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

            stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5047\u5982\u5F53\u524D\u662F\u5DE6\u62EC\u53F7</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u73AF\u5F62\u94FE\u8868</strong></p><div class="language-js"><pre><code>
<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>

<span class="token comment">/**
 * @param {ListNode} head
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>


    <span class="token comment">// map</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5B58\u653E\u5DF2\u7ECF\u8D70\u8FC7\u7684\u8282\u70B9</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> 
        <span class="token comment">// \u8FD9\u91CC\u6709\u4E00\u4E2A\u8E29\u5751\u70B9 \u5047\u5982map\u8BB0\u5F55\u7684\u662F\u8282\u70B9\u7684\u503C\u7684\u8BDD \u5F88\u6709\u53EF\u80FD\u51FA\u73B0\u91CD\u590D\u503C \u4F46\u5B83\u4EEC\u662F\u4E0D\u7684\u540C\u8282\u70B9 \u6240\u4EE5\u8FD9\u91CCmap\u5B58\u7684\u662F\u8282\u70B9\u7684\u5F15\u7528</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> 
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// \u5FEB\u6162\u6307\u9488</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">.</span>next

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next

        <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>236. \u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811, \u627E\u5230\u8BE5\u6811\u4E2D\u4E24\u4E2A\u6307\u5B9A\u8282\u70B9\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148\u3002</span>

<span class="token comment">// \u767E\u5EA6\u767E\u79D1\u4E2D\u6700\u8FD1\u516C\u5171\u7956\u5148\u7684\u5B9A\u4E49\u4E3A\uFF1A\u201C\u5BF9\u4E8E\u6709\u6839\u6811 T \u7684\u4E24\u4E2A\u8282\u70B9 p\u3001q\uFF0C\u6700\u8FD1\u516C\u5171\u7956\u5148\u8868\u793A\u4E3A\u4E00\u4E2A\u8282\u70B9 x\uFF0C\u6EE1\u8DB3 x \u662F p\u3001q \u7684\u7956\u5148\u4E14 x \u7684\u6DF1\u5EA6\u5C3D\u53EF\u80FD\u5927\uFF08\u4E00\u4E2A\u8282\u70B9\u4E5F\u53EF\u4EE5\u662F\u5B83\u81EA\u5DF1\u7684\u7956\u5148\uFF09\u3002\u201D</span>

<span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">findRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">findRoot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> p <span class="token operator">||</span> root <span class="token operator">===</span> q<span class="token punctuation">)</span> <span class="token keyword">return</span> root <span class="token comment">// \u5047\u5982\u6709\u4E00\u4E2A\u8282\u70B9\u7684\u503C\u8DDF\u76EE\u6807\u503C\u76F8\u540C\u7684\u8BDD \u53EF\u4EE5\u8BC1\u660E\u8282\u70B9\u5C31\u662F\u6700\u8FD1\u516C\u5171\u7956\u5148\u4E86</span>

    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">findRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span> <span class="token comment">// \u4ECE\u5DE6\u5B50\u6811\u53BB\u627E</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">findRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span> <span class="token comment">// \u4ECE\u53F3\u5B50\u6811\u53BB\u627E</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">)</span> <span class="token keyword">return</span> root <span class="token comment">// \u5982\u679C\u8BE5\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u5B58\u5728\u76EE\u6807\u503C \u53F3\u5B50\u6811\u4E5F\u5B58\u5728\u76EE\u6807\u503C \u5219\u8BE5\u8282\u70B9\u662F\u6700\u8FD1\u516C\u5171\u7956\u5148</span>

    <span class="token keyword">return</span> left <span class="token operator">?</span> left <span class="token operator">:</span> right <span class="token comment">// \u5047\u5982\u5DE6\u53F3\u5B50\u6811\u53EA\u5B58\u5728\u5176\u4E2D\u4E00\u4E2A\u503C\u7684\u8BDD \u5C31\u8FD4\u56DE\u5B58\u5728\u7684\u90A3\u4E2A\u8282\u70B9\u5373\u662F\u552F\u4E00\u516C\u5171\u7956\u5148\u4E86 \u5426\u5219\u5C31\u662F\u6CA1\u6709\u516C\u5171\u7956\u5148\u5C31\u662Fnull</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(n)  N\u4E3A\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u6570</span>
<span class="token comment">// \u7A7A\u95F4\u590D\u6742\u5EA6: O(n)  N\u4E3A\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u6570</span>

</code></pre></div><p><strong>543. \u4E8C\u53C9\u6811\u7684\u76F4\u5F84</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">diameterOfBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">0</span>
    
    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
        
        <span class="token keyword">let</span> leftMaxLength <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>

        <span class="token keyword">let</span> rightMaxLength <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> leftMaxLength <span class="token operator">+</span> rightMaxLength<span class="token punctuation">)</span> <span class="token comment">// \u6700\u540E\u8FD4\u56DE\u7684\u957F\u5EA6\u4E3A\u5DE6\u5B50\u6811\u7684\u6700\u5927\u6DF1\u5EA6+\u53F3\u5B50\u6811\u7684\u6700\u5927\u6DF1\u5EA6</span>

        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMaxLength<span class="token punctuation">,</span> rightMaxLength<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// \u4ECE\u6700\u5E95\u5C42\u5F80\u4E0A\u52A0 \u6BCF\u4E00\u5C42\u52A01 \u53D6\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u8F83\u6DF1\u7684\u90A3\u4E00\u4E2A\u4F5C\u4E3A\u8BE5root\u7684\u6700\u5927\u6DF1\u5EA6</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> maxLength
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(n)  N\u4E3A\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u6570</span>
<span class="token comment">// \u7A7A\u95F4\u590D\u6742\u5EA6: O(Height)  Height\u4E3A\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6</span>


</code></pre></div><p><strong>\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token comment">// let max = 0</span>
    <span class="token comment">// findDepth(root)</span>
    
    <span class="token comment">// function findDepth(root) {</span>
    <span class="token comment">//     if (!root) return 0</span>

    <span class="token comment">//     const left = findDepth(root.left)</span>

    <span class="token comment">//     const right = findDepth(root.right)</span>

    <span class="token comment">//     const middleMax = Math.max(left, right)</span>
        
    <span class="token comment">//     max = Math.max(max, middleMax)</span>

    <span class="token comment">//     return Math.max(left, right) + 1</span>
    <span class="token comment">// }</span>

    <span class="token comment">// return max + 1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u5220\u9664\u94FE\u8868\u91CD\u590D\u8282\u70B9</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> head

    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    
    <span class="token comment">// \u5F53\u5F53\u524D\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u5B58\u5728\u65F6</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5047\u5982\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u503C\u4E0E\u5F53\u524D\u8282\u70B9\u7684\u503C\u76F8\u7B49\u7684\u8BDD</span>
        <span class="token comment">// \u5C31\u628A\u5F53\u524D\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u6307\u5411\u6539\u4E3A\u518D\u4E0B\u4E00\u4E2A</span>
        <span class="token comment">// \u5426\u5219\u6307\u9488\u5F80\u524D\u79FB\u52A8</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84(\u548C)</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">findPath</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u6240\u6709\u8DEF\u5F84</span>
    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path <span class="token operator">+=</span> <span class="token function">String</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">var</span> root <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u6700\u5927\u5B50\u6570\u7EC4\u548C</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u8BF7\u4F60\u627E\u51FA\u4E00\u4E2A\u5177\u6709\u6700\u5927\u548C\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\uFF08\u5B50\u6570\u7EC4\u6700\u5C11\u5305\u542B\u4E00\u4E2A\u5143\u7D20\uFF09\uFF0C\u8FD4\u56DE\u5176\u6700\u5927\u548C\u3002</span>

<span class="token comment">// \u5B50\u6570\u7EC4 \u662F\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u8FDE\u7EED\u90E8\u5206\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [-2,1,-3,4,-1,2,1,-5,4]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A6</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u8FDE\u7EED\u5B50\u6570\u7EC4 [4,-1,2,1] \u7684\u548C\u6700\u5927\uFF0C\u4E3A 6 \u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [5,4,-1,7,8]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A23</span>

<span class="token keyword">function</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> preSum <span class="token operator">=</span> maxSum <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// \u521D\u59CB\u5316 \u4E0A\u4E00\u8F6E\u7684\u603B\u6570\u548C\u6700\u5927\u603B\u6570\u548C</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> maxSum <span class="token comment">// \u5982\u679C\u53EA\u6709\u4E00\u4E2A\u6570\u5B57\u5219\u8FD4\u56DE\u5176\u7ED3\u679C</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         
        <span class="token comment">// \u5982\u679C\u4E0A\u4E00\u8F6E\u7684\u603B\u6570\u548C\u7ED3\u679C\u5C0F\u4E8E0 \u5219\u5BF9\u603B\u6570\u9020\u6210\u8D1F\u5F71\u54CD</span>
        <span class="token comment">// \u5219\u628A\u5F53\u524D\u503C\u8D4B\u503C\u7ED9\u5F53\u524D\u603B\u6570\u548C\u505A\u4E0B\u4E00\u8F6E\u7684\u8BA1\u7B97</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preSum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            preSum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            preSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// \u6B63\u589E\u957F\u8FDB\u884C\u589E\u52A0</span>
        <span class="token punctuation">}</span>

        maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> preSum<span class="token punctuation">)</span>  <span class="token comment">// \u6BCF\u8F6E\u53D6\u8F83\u5927\u503C\u66FF\u6362</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxSum
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u96F6\u94B1\u5151\u6362</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 coins \uFF0C\u8868\u793A\u4E0D\u540C\u9762\u989D\u7684\u786C\u5E01\uFF1B\u4EE5\u53CA\u4E00\u4E2A\u6574\u6570 amount \uFF0C\u8868\u793A\u603B\u91D1\u989D\u3002</span>

<span class="token comment">// \u8BA1\u7B97\u5E76\u8FD4\u56DE\u53EF\u4EE5\u51D1\u6210\u603B\u91D1\u989D\u6240\u9700\u7684 \u6700\u5C11\u7684\u786C\u5E01\u4E2A\u6570 \u3002\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u4E00\u79CD\u786C\u5E01\u7EC4\u5408\u80FD\u7EC4\u6210\u603B\u91D1\u989D\uFF0C\u8FD4\u56DE -1 \u3002</span>

<span class="token comment">// \u4F60\u53EF\u4EE5\u8BA4\u4E3A\u6BCF\u79CD\u786C\u5E01\u7684\u6570\u91CF\u662F\u65E0\u9650\u7684\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Acoins = [1, 2, 5], amount = 11</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3 </span>
<span class="token comment">// \u89E3\u91CA\uFF1A11 = 5 + 5 + 1</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Acoins = [2], amount = 3</span>
<span class="token comment">// \u8F93\u51FA\uFF1A-1</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Acoins = [1], amount = 0</span>
<span class="token comment">// \u8F93\u51FA\uFF1A0</span>

<span class="token keyword">function</span> <span class="token function">coinChange</span><span class="token punctuation">(</span><span class="token parameter">coins<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316dp\u6570\u7EC4 \u5B58\u7684\u503C\u4ECE\u8BA1\u7B97\u4ECE0 \u5230 amount\u6570\u91CF\u65F6\u6240\u9700\u7684\u6700\u5C11\u786C\u5E01\u6570</span>

    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u51D10\u5143\u9700\u89810\u4E2A\u786C\u5E01</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> target <span class="token operator">&lt;</span> dp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> target<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> coin <span class="token keyword">of</span> coins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5047\u5982\u5F53\u524D\u76EE\u6807\u6570\u503C\u5C0F\u4E8E\u5F53\u524D\u786C\u5E01\u9762\u503C\u65F6\uFF08\u6839\u672C\u51D1\u4E0D\u51FA\u6765) \u8DF3\u8FC7\u5FAA\u73AF</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> coin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>target <span class="token operator">-</span> coin<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u53D6\u5C0F\u503C dp[target - coin]\u4E3A\u4ECE\u51D1\u76EE\u6807\u9762\u503C\u6240\u9700\u6700\u5C11\u786C\u5E01 = 1 + \u51D1\uFF08\u76EE\u6807\u9762\u503C - \u5F53\u524D\u9762\u503C\uFF09\u6240\u9700\u6700\u5C11\u786C\u5E01</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span> <span class="token operator">===</span> amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span> <span class="token comment">// \u5224\u65AD\u51D1\u4E0D\u51D1\u5F97\u51FA\u503C</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u4E70\u5356\u80A1\u7968\u6700\u4F73\u65F6\u673A</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4 prices \uFF0C\u5B83\u7684\u7B2C i \u4E2A\u5143\u7D20 prices[i] \u8868\u793A\u4E00\u652F\u7ED9\u5B9A\u80A1\u7968\u7B2C i \u5929\u7684\u4EF7\u683C\u3002</span>

<span class="token comment">// \u4F60\u53EA\u80FD\u9009\u62E9 \u67D0\u4E00\u5929 \u4E70\u5165\u8FD9\u53EA\u80A1\u7968\uFF0C\u5E76\u9009\u62E9\u5728 \u672A\u6765\u7684\u67D0\u4E00\u4E2A\u4E0D\u540C\u7684\u65E5\u5B50 \u5356\u51FA\u8BE5\u80A1\u7968\u3002\u8BBE\u8BA1\u4E00\u4E2A\u7B97\u6CD5\u6765\u8BA1\u7B97\u4F60\u6240\u80FD\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002</span>

<span class="token comment">// \u8FD4\u56DE\u4F60\u53EF\u4EE5\u4ECE\u8FD9\u7B14\u4EA4\u6613\u4E2D\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002\u5982\u679C\u4F60\u4E0D\u80FD\u83B7\u53D6\u4EFB\u4F55\u5229\u6DA6\uFF0C\u8FD4\u56DE 0 \u3002</span>

<span class="token comment">// \u8F93\u5165\uFF1A[7,1,5,3,6,4]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A5</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA\uFF0C\u6700\u5927\u5229\u6DA6 = 6-1 = 5 \u3002</span>
<span class="token comment">//      \u6CE8\u610F\u5229\u6DA6\u4E0D\u80FD\u662F 7-1 = 6, \u56E0\u4E3A\u5356\u51FA\u4EF7\u683C\u9700\u8981\u5927\u4E8E\u4E70\u5165\u4EF7\u683C\uFF1B\u540C\u65F6\uFF0C\u4F60\u4E0D\u80FD\u5728\u4E70\u5165\u524D\u5356\u51FA\u80A1\u7968\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aprices = [7,6,4,3,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A0</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u6CA1\u6709\u4EA4\u6613\u5B8C\u6210, \u6240\u4EE5\u6700\u5927\u5229\u6DA6\u4E3A 0\u3002</span>

<span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> maxPrice <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u521D\u59CB\u5316\u6700\u5927\u5229\u6DA6</span>
    <span class="token keyword">let</span> minCost <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// \u521D\u59CB\u5316\u6700\u5C0F\u4E70\u5165</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        maxPrice <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxPrice<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minCost<span class="token punctuation">)</span> <span class="token comment">// \u6BCF\u6B21\u5FAA\u73AF\u8BA1\u7B97\u6700\u5927\u5229\u6DA6 \u5F53\u524D\u5356\u51FA - \u6700\u5C0F\u4E70\u5165</span>
        minCost <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minCost<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u6BCF\u6B21\u8BA1\u7B97\u5B8C\u6700\u5927\u5229\u6DA6\u540E\u5C31\u7B97\u6700\u5C0F\u4E70\u5165 \u5F53\u524D\u4E70\u5165 \u4E0E \u6700\u5C0F\u4E70\u5165\u8FDB\u884C\u6BD4\u8F83</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxPrice
<span class="token punctuation">}</span>

</code></pre></div><p><strong>77. \u7EC4\u5408</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E24\u4E2A\u6574\u6570 n \u548C k\uFF0C\u8FD4\u56DE\u8303\u56F4 [1, n] \u4E2D\u6240\u6709\u53EF\u80FD\u7684 k \u4E2A\u6570\u7684\u7EC4\u5408\u3002</span>

<span class="token comment">// \u4F60\u53EF\u4EE5\u6309 \u4EFB\u4F55\u987A\u5E8F \u8FD4\u56DE\u7B54\u6848\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 4, k = 2</span>
<span class="token comment">// \u8F93\u51FA\uFF1A</span>
<span class="token comment">// [</span>
<span class="token comment">//   [2,4],</span>
<span class="token comment">//   [3,4],</span>
<span class="token comment">//   [2,3],</span>
<span class="token comment">//   [1,2],</span>
<span class="token comment">//   [1,3],</span>
<span class="token comment">//   [1,4],</span>
<span class="token comment">// ]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 1, k = 1</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[1]]</span>

<span class="token comment">/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>


    <span class="token keyword">function</span> <span class="token function">findCombine</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> pre</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span>
            <span class="token keyword">return</span> 
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">findCombine</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>pre<span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">findCombine</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u53C2\u8003\u5168\u6392\u5217\u7684\u65B9\u6848</span>
<span class="token keyword">var</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> n <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">function</span> <span class="token function">findCombine</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> stack</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token comment">// \u6392\u9664\u91CD\u590Dcase</span>
            <span class="token comment">// if (stack.includes(arr[i]) || stack[0] &gt; arr[i]) {</span>
            <span class="token comment">//     continue</span>
            <span class="token comment">// }</span>

            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>

            <span class="token function">findCombine</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> stack<span class="token punctuation">)</span>

            stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token function">findCombine</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> stack<span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u63A5\u96E8\u6C34</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u8F93\u5165\uFF1Aheight = [0,1,0,2,1,0,1,3,2,1,2,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A6</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u4E0A\u9762\u662F\u7531\u6570\u7EC4 [0,1,0,2,1,0,1,3,2,1,2,1] \u8868\u793A\u7684\u9AD8\u5EA6\u56FE\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u63A5 6 \u4E2A\u5355\u4F4D\u7684\u96E8\u6C34\uFF08\u84DD\u8272\u90E8\u5206\u8868\u793A\u96E8\u6C34\uFF09\u3002 </span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aheight = [4,2,0,3,2,5]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A9</span>


<span class="token keyword">var</span> <span class="token function-variable function">trap</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> len <span class="token operator">=</span> height<span class="token punctuation">.</span>length

    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> len

    <span class="token keyword">const</span> leftMax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    leftMax<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        leftMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> rightMax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    rightMax<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rightMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rightMax<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> rightMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u516B\u722A\u9C7C\u7B14\u8BD5\u9898</strong></p><div class="language-js"><pre><code><span class="token comment">// &#39;asbscs&#39; -&gt; &#39;()()()&#39;</span>
<span class="token keyword">function</span> <span class="token function">changeWord</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> newStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">s</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> strr <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>strr<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>strr<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newStr <span class="token operator">+=</span> <span class="token string">&#39;)&#39;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            newStr <span class="token operator">+=</span> <span class="token string">&#39;(&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> newStr
<span class="token punctuation">}</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;asbscs&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">changeWord</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5BFB\u627E\u6570\u7EC4\u4E2D\u6392\u5E8F\u540E\u6700\u5C11\u6DFB\u52A0\u51E0\u4F4D\u6570\u5B57\u53EF\u4EE5\u5B58\u5728\u9012\u589E\u5E8F\u5217</span>
<span class="token keyword">function</span> <span class="token function">findMinNum</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">Infinity</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">const</span> cur <span class="token operator">=</span> newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
       <span class="token keyword">const</span> next <span class="token operator">=</span> newArr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
       <span class="token keyword">const</span> extra <span class="token operator">=</span> next <span class="token operator">-</span> cur <span class="token operator">-</span> <span class="token number">1</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> next<span class="token punctuation">,</span> extra<span class="token punctuation">)</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>extra <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           min <span class="token operator">=</span> extra
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span>
   
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>

<span class="token comment">// [1, 3, 6, 8]</span>
<span class="token comment">// 1 2 1</span>
<span class="token comment">// 1</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findMinNum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5173\u952E\u8BCD\u5339\u914D</span>
<span class="token keyword">const</span> keyWords <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;error message&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stupid kid&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;demo page&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">findErrorEmail</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token boolean">false</span>
    keyWords<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">word</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">in</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> newI <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>newI<span class="token punctuation">]</span> <span class="token operator">===</span> word<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>newI <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> word<span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> newI <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>newI<span class="token punctuation">]</span><span class="token punctuation">,</span> word<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">,</span> str<span class="token punctuation">[</span>newI <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> word<span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> newI<span class="token punctuation">)</span>
                len<span class="token operator">++</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                len <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> word<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               ans <span class="token operator">=</span> <span class="token boolean">true</span>
               <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findErrorEmail</span><span class="token punctuation">(</span><span class="token string">&#39;demo message demo page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


</code></pre></div><p><strong>\u6587\u4EF6\u5939\u83B7\u53D6\u6570\u636E\u5E76\u5904\u7406</strong></p><div class="language-js"><pre><code><span class="token comment">/** Some other codes maybe */</span>
<span class="token keyword">const</span> <span class="token constant">LANGUAGES</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zh&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u8FD9\u91CC\u6211\u8BA4\u4E3A\u63D0\u524D\u9884\u77E5\u5230\u6240\u62E5\u6709\u7684\u8BED\u79CD,\u5426\u5219\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u6240\u6709\u7684\u8BED\u8A00\u518D\u62FF\u51FA\u4F5Ckey\u6027\u80FD\u4E0D\u9AD8</span>

<span class="token comment">// \u6570\u636E\u5B58\u50A8</span>
<span class="token keyword">const</span> <span class="token constant">DATAMAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F6C\u6362\u9A7C\u5CF0</span>
<span class="token keyword">const</span> <span class="token function-variable function">toHump</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\-(\\w)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> letter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> letter<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BFB\u627E\u8DEF\u5F84</span>
<span class="token keyword">const</span> <span class="token function-variable function">findPath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6240\u6709\u8DEF\u5F84</span>
  <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">curPath<span class="token punctuation">,</span> allPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curPath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> childList <span class="token operator">=</span> <span class="token function">findChildList</span><span class="token punctuation">(</span>curPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> pathName <span class="token operator">=</span> <span class="token function">toHump</span><span class="token punctuation">(</span><span class="token function">getPathName</span><span class="token punctuation">(</span>curPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      allPath <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pathName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// \u62FC\u63A5\u8DEF\u5F84</span>

      childList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> childPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> curPath <span class="token operator">+</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B69\u5B50\u8DEF\u5F84</span>
        <span class="token keyword">const</span> isDir <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>childPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5224\u65AD\u662F\u5426\u6587\u4EF6\u5939</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> curPath <span class="token operator">+</span> fileName <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u751F\u6210\u65B0\u8DEF\u5F84</span>
        <span class="token keyword">const</span> fatherArr <span class="token operator">=</span> allPath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5BF9\u62FC\u63A5\u540E\u7684\u8DEF\u5F84\u4F5C\u5904\u7406\u4E3A\u6587\u4EF6\u5939\u540D\u79F0(\u4EE5\u4FBF\u540E\u7EED\u8D4B\u503C)</span>
        <span class="token comment">// \u5224\u65AD\u662F\u5426\u6587\u4EF6\u5939</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5224\u65AD\u8BE5\u6587\u4EF6\u5939\u662F\u5426\u4E3Aindex\u547D\u540D</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">===</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> childFileList <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            childFileList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">childName</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> childFilePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> temp <span class="token operator">+</span> childName<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span>childFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token comment">// if ()</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>childName<span class="token punctuation">,</span> <span class="token string">&#39;index\u6587\u4EF6\u5939\u5E95\u4E0B\u7684\u6587\u4EF6\u540D&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">const</span> handleName <span class="token operator">=</span> childName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>handleName <span class="token operator">!==</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                fatherArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">toHump</span><span class="token punctuation">(</span>handleName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
              <span class="token constant">LANGUAGES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">language</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
                <span class="token function">normalCreatedata</span><span class="token punctuation">(</span><span class="token constant">DATAMAP</span><span class="token punctuation">[</span>language<span class="token punctuation">]</span><span class="token punctuation">,</span> fatherArr<span class="token punctuation">,</span> data<span class="token punctuation">,</span> language<span class="token punctuation">)</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> allPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5426\u5219\u9012\u5F52</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span>childPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> handleName <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>handleName <span class="token operator">!==</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fatherArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">toHump</span><span class="token punctuation">(</span>handleName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token constant">LANGUAGES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">language</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token function">normalCreatedata</span><span class="token punctuation">(</span><span class="token constant">DATAMAP</span><span class="token punctuation">[</span>language<span class="token punctuation">]</span><span class="token punctuation">,</span> fatherArr<span class="token punctuation">,</span> data<span class="token punctuation">,</span> language<span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52\u5165\u53E3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u627E\u5B50\u6587\u4EF6(\u5939)\u76EE\u5F55\u540D</span>
<span class="token keyword">const</span> <span class="token function-variable function">findChildList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u67D0\u4E2A\u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6(\u5939)\u540D</span>
<span class="token keyword">const</span> <span class="token function-variable function">getPathName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u9020\u6570\u636E</span>
<span class="token keyword">function</span> <span class="token function">normalCreatedata</span><span class="token punctuation">(</span><span class="token parameter">handleData<span class="token punctuation">,</span> fatherArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> insertData<span class="token punctuation">,</span> language</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newData<span class="token punctuation">;</span>
  <span class="token keyword">const</span> newInsertData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \u907F\u514D\u6C61\u67D3\u6E90\u6570\u636E</span>
  fatherArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u7B2C\u4E00\u5C42\u6570\u636E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newData <span class="token operator">=</span> handleData<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">(</span>handleData<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      newData <span class="token operator">=</span> newData<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">(</span>newData<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>insertData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    newInsertData<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> insertData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">[</span>language<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6839\u636E\u8BED\u8A00\u53D6\u503C</span>
    newData<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newInsertData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u8D4B\u503C</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> handleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> handleData <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token comment">/** Some params maybe */</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Your code here</span>
  <span class="token function">findPath</span><span class="token punctuation">(</span><span class="token string">&#39;/my-data/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token constant">DATAMAP</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;DATAMAP&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">handleData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u95ED\u5408\u6807\u7B7E\u5339\u914D</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">isHTMLTagValid</span><span class="token punctuation">(</span><span class="token parameter">htmlString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u6240\u6709\u6807\u7B7E</span>
  <span class="token keyword">const</span> tagRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;\\/?([a-z][a-z0-9][^&gt;\\s]*)[^&gt;]*&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> match<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>match <span class="token operator">=</span> tagRegex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>htmlString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">,</span> <span class="token string">&#39;match&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> tagName <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tagName<span class="token punctuation">,</span> <span class="token string">&#39;tagName&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u68C0\u67E5\u662F\u5426\u662F\u95ED\u5408\u6807\u7B7E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tagName<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u6808\u4E3A\u7A7A\uFF0C\u4F46\u5B58\u5728\u95ED\u5408\u6807\u7B7E\uFF0C\u4E0D\u5408\u6CD5</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> openTag <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>openTag <span class="token operator">!==</span> tagName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u95ED\u5408\u6807\u7B7E\u4E0E\u6808\u9876\u6807\u7B7E\u4E0D\u5339\u914D\uFF0C\u4E0D\u5408\u6CD5</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u5F00\u653E\u6807\u7B7E\u5165\u6808</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u6240\u6709\u6807\u7B7E\u904D\u5386\u5B8C\u540E\uFF0C\u6808\u4E3A\u7A7A\u5219\u5408\u6CD5</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>compose\u51FD\u6570\u5B9E\u73B0</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> args<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>14. \u6700\u957F\u516C\u5171\u524D\u7F00</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string[]} strs
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> ans<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ans<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">break</span>
        <span class="token punctuation">}</span>

        ans <span class="token operator">=</span> ans<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> ans <span class="token operator">?</span> ans <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>394. \u5B57\u7B26\u4E32\u89E3\u7801</strong></p><div class="language-js"><pre><code>
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
<span class="token keyword">var</span> <span class="token function-variable function">decodeString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> numStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u653E\u500D\u6570</span>
    <span class="token keyword">const</span> strStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u653E\u5F53\u524D\u62EC\u53F7\u5185\u7684\u5B57\u7B26</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u521D\u59CB\u5316\u500D\u6570</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u521D\u59CB\u5316\u7ED3\u679C</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> str <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            numStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
            num <span class="token operator">=</span> <span class="token number">0</span>
            strStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
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

</code></pre></div>`,55)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
