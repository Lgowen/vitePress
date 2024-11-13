import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u53CC\u6307\u9488 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day13.md","lastUpdated":1731465675962}',o={};function e(c,n,l,u,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u53CC\u6307\u9488" tabindex="-1">\u53CC\u6307\u9488 <a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a></h1><p><strong>\u5251\u6307 Offer 21. \u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u6574\u6570\u6570\u7EC4\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u6765\u8C03\u6574\u8BE5\u6570\u7EC4\u4E2D\u6570\u5B57\u7684\u987A\u5E8F\uFF0C\u4F7F\u5F97\u6240\u6709\u5947\u6570\u5728\u6570\u7EC4\u7684\u524D\u534A\u90E8\u5206\uFF0C\u6240\u6709\u5076\u6570\u5728\u6570\u7EC4\u7684\u540E\u534A\u90E8\u5206\u3002</span>

<span class="token comment">// \u793A\u4F8B\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,2,3,4]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[1,3,2,4] </span>
<span class="token comment">// \u6CE8\uFF1A[3,1,2,4] \u4E5F\u662F\u6B63\u786E\u7684\u7B54\u6848\u4E4B\u4E00\u3002</span>


<span class="token comment">/**
 * @param {number[]} nums
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">exchange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u521D\u59CB\u5316left\u6307\u9488</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u521D\u59CB\u5316right\u6307\u9488</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">// \u5F53\u5DE6\u6307\u9488\u4E3A\u5076\u6570\u4E14\u53F3\u6307\u9488\u4E3A\u5947\u6570\u65F6\u8C03\u6362\u4F4D\u7F6E \u540C\u65F6\u6307\u9488\u7EE7\u7EED\u8FD0\u52A8</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span>
            left<span class="token operator">++</span>
            right<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// \u5047\u5982\u5DE6\u6307\u9488\u4E3A\u5947\u6570\u5219\u7EE7\u7EED\u8FD0\u52A8</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token operator">++</span>
        <span class="token punctuation">}</span>


        <span class="token comment">// \u5047\u5982\u53F3\u6307\u9488\u4E3A\u5947\u6570\u5219\u7EE7\u7EED\u8FD0\u52A8</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">--</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// while (left &lt; right &amp;&amp; nums[left] % 2 === 1) {</span>
        <span class="token comment">//     left++</span>
        <span class="token comment">// }</span>

        <span class="token comment">// while (left &lt; right &amp;&amp; nums[right] % 2 === 0) {</span>
        <span class="token comment">//     right--</span>
        <span class="token comment">// }</span>

        <span class="token comment">// [nums[left], nums[right]] = [nums[right], nums[left]]</span>


    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> nums
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre></div><p><strong>\u5251\u6307 Offer 57. \u548C\u4E3As\u7684\u4E24\u4E2A\u6570\u5B57</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u9012\u589E\u6392\u5E8F\u7684\u6570\u7EC4\u548C\u4E00\u4E2A\u6570\u5B57s\uFF0C\u5728\u6570\u7EC4\u4E2D\u67E5\u627E\u4E24\u4E2A\u6570\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u7684\u548C\u6B63\u597D\u662Fs\u3002\u5982\u679C\u6709\u591A\u5BF9\u6570\u5B57\u7684\u548C\u7B49\u4E8Es\uFF0C\u5219\u8F93\u51FA\u4EFB\u610F\u4E00\u5BF9\u5373\u53EF\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [2,7,11,15], target = 9</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[2,7] \u6216\u8005 [7,2]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [10,26,30,31,47,60], target = 40</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[10,30] \u6216\u8005 [30,10]</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5DE6\u8FB9\u7684\u6307\u9488</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u6700\u5C0F\u503C\u90FD\u5927\u4E8Etarget \u5219\u6CA1\u6709ans</span>

    <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u53F3\u8FB9\u7684\u6307\u9488</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> leftNum <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token comment">// \u5DE6\u8FB9\u7684\u503C</span>
        <span class="token keyword">const</span> rightNum <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token comment">// \u53F3\u8FB9\u7684\u503C</span>
        
        <span class="token comment">// \u5047\u5982\u53F3\u8FB9\u7684\u503C\u90FD\u5927\u4E8Etarget\u503C\u4E86 \u90FD\u4E0D\u7528\u518D\u7EE7\u7EED\u7B97\u4E86 \u7B97\u4E2Ader</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rightNum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">--</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">const</span> sum <span class="token operator">=</span> leftNum <span class="token operator">+</span> rightNum <span class="token comment">// \u7B97\u603B\u6570</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>leftNum<span class="token punctuation">,</span> rightNum<span class="token punctuation">]</span> <span class="token comment">// \u5047\u5982\u4E0Etarget\u503C\u76F8\u7B49\u5C31\u8FD4\u56DE</span>
        
        <span class="token comment">// \u5426\u5219\u5C31\u7EE7\u7EED\u79FB\u52A8\u6307\u9488</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            left<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u5251\u6307 Offer 58 - I. \u7FFB\u8F6C\u5355\u8BCD\u987A\u5E8F</strong></p><div class="language-js"><pre><code>

<span class="token comment">/**
 * @param {string} s
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseWords</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u8C03\u7528\u5E93\u51FD\u6570 Array.prototype.reverse</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// 2. \u5B9E\u73B0\u5E93\u51FD\u6570\u65B9\u6CD5</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token parameter">a</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E24\u7AEF\u6307\u9488\u5B9E\u73B0 \u6570\u7EC4\u9879\u7FFB\u8F6C</span>
        <span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> l<span class="token operator">++</span><span class="token punctuation">,</span> r<span class="token operator">--</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> 
  
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {string} s
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseWords</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">,</span> j <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5148\u53BB\u9664\u5B57\u7B26\u4E32\u524D\u9762\u6216\u540E\u9762\u7684\u591A\u4F59\u7A7A\u683C</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
        j<span class="token operator">--</span><span class="token punctuation">;</span>
    s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// j \u6307\u9488\u627E\u5230\u7B2C\u4E00\u4E2A\u7A7A\u683C\u4E3A\u6B62</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// j \u6307\u9488\u627E\u5230\u7B2C\u4E00\u4E2A\u975E\u7A7A\u683C\u5B57\u7B26\u4E3A\u6B62</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        i <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,7)]))}var g=s(o,[["render",e]]);export{m as __pageData,g as default};
