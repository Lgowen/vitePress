import{_ as n,y as s,x as a,W as p}from"./plugin-vue_export-helper.8685c10c.js";const f='{"title":"\u5B66\u4E60\u4E4B\u8DEF #","description":"","frontmatter":{},"headers":[],"relativePath":"study/meeting.md","lastUpdated":1650278083715}',t={},o=p(`<h1 id="\u5B66\u4E60\u4E4B\u8DEF" tabindex="-1">\u5B66\u4E60\u4E4B\u8DEF <a class="header-anchor" href="#\u5B66\u4E60\u4E4B\u8DEF" aria-hidden="true">#</a></h1><p><strong>3. \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32</strong></p><div class="language-js"><pre><code>
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

</code></pre></div>`,33),e=[o];function c(l,u,k,r,i,m){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{f as __pageData,y as default};
