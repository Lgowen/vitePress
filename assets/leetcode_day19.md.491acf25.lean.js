import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u56DE\u6EAF #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day19.md","lastUpdated":1731465675962}',o={};function c(e,n,u,k,l,i){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u56DE\u6EAF" tabindex="-1">\u56DE\u6EAF <a class="header-anchor" href="#\u56DE\u6EAF" aria-hidden="true">#</a></h1><p><strong>46. \u5168\u6392\u5217</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u4E0D\u542B\u91CD\u590D\u6570\u5B57\u7684\u6570\u7EC4 nums \uFF0C\u8FD4\u56DE\u5176 \u6240\u6709\u53EF\u80FD\u7684\u5168\u6392\u5217 \u3002\u4F60\u53EF\u4EE5 \u6309\u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u7B54\u6848\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,2,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [0,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[0,1],[1,0]]</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[1]]</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">permute</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">stack</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span>
            stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>78. \u5B50\u96C6</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u6570\u7EC4\u4E2D\u7684\u5143\u7D20 \u4E92\u4E0D\u76F8\u540C \u3002\u8FD4\u56DE\u8BE5\u6570\u7EC4\u6240\u6709\u53EF\u80FD\u7684\u5B50\u96C6\uFF08\u5E42\u96C6\uFF09\u3002</span>

<span class="token comment">// \u89E3\u96C6 \u4E0D\u80FD \u5305\u542B\u91CD\u590D\u7684\u5B50\u96C6\u3002\u4F60\u53EF\u4EE5\u6309 \u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u89E3\u96C6\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [1,2,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [0]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[],[0]]</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>


    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">startIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>39. \u7EC4\u5408\u603B\u548C</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A \u65E0\u91CD\u590D\u5143\u7D20 \u7684\u6574\u6570\u6570\u7EC4 candidates \u548C\u4E00\u4E2A\u76EE\u6807\u6574\u6570 target \uFF0C\u627E\u51FA candidates \u4E2D\u53EF\u4EE5\u4F7F\u6570\u5B57\u548C\u4E3A\u76EE\u6807\u6570 target \u7684 \u6240\u6709 \u4E0D\u540C\u7EC4\u5408 \uFF0C\u5E76\u4EE5\u5217\u8868\u5F62\u5F0F\u8FD4\u56DE\u3002\u4F60\u53EF\u4EE5\u6309 \u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u8FD9\u4E9B\u7EC4\u5408\u3002</span>

<span class="token comment">// candidates \u4E2D\u7684 \u540C\u4E00\u4E2A \u6570\u5B57\u53EF\u4EE5 \u65E0\u9650\u5236\u91CD\u590D\u88AB\u9009\u53D6 \u3002\u5982\u679C\u81F3\u5C11\u4E00\u4E2A\u6570\u5B57\u7684\u88AB\u9009\u6570\u91CF\u4E0D\u540C\uFF0C\u5219\u4E24\u79CD\u7EC4\u5408\u662F\u4E0D\u540C\u7684\u3002 </span>

<span class="token comment">// \u5BF9\u4E8E\u7ED9\u5B9A\u7684\u8F93\u5165\uFF0C\u4FDD\u8BC1\u548C\u4E3A target \u7684\u4E0D\u540C\u7EC4\u5408\u6570\u5C11\u4E8E 150 \u4E2A\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Acandidates = [2,3,6,7], target = 7</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[2,2,3],[7]]</span>
<span class="token comment">// \u89E3\u91CA\uFF1A</span>
<span class="token comment">// 2 \u548C 3 \u53EF\u4EE5\u5F62\u6210\u4E00\u7EC4\u5019\u9009\uFF0C2 + 2 + 3 = 7 \u3002\u6CE8\u610F 2 \u53EF\u4EE5\u4F7F\u7528\u591A\u6B21\u3002</span>
<span class="token comment">// 7 \u4E5F\u662F\u4E00\u4E2A\u5019\u9009\uFF0C 7 = 7 \u3002</span>
<span class="token comment">// \u4EC5\u6709\u8FD9\u4E24\u79CD\u7EC4\u5408\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165: candidates = [2,3,5], target = 8</span>
<span class="token comment">// \u8F93\u51FA: [[2,2,2,2],[2,3,3],[3,5]]</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165: candidates = [2], target = 1</span>
<span class="token comment">// \u8F93\u51FA: []</span>

<span class="token comment">/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">candidates<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> combine<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">===</span> candidates<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> 

        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>combine<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token function">dfs</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> combine<span class="token punctuation">,</span> idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">-</span> candidates<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>target <span class="token operator">-</span> candidates<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>combine<span class="token punctuation">,</span> candidates<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> idx<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>79. \u5355\u8BCD\u641C\u7D22</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A m x n \u4E8C\u7EF4\u5B57\u7B26\u7F51\u683C board \u548C\u4E00\u4E2A\u5B57\u7B26\u4E32\u5355\u8BCD word \u3002\u5982\u679C word \u5B58\u5728\u4E8E\u7F51\u683C\u4E2D\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</span>

<span class="token comment">// \u5355\u8BCD\u5FC5\u987B\u6309\u7167\u5B57\u6BCD\u987A\u5E8F\uFF0C\u901A\u8FC7\u76F8\u90BB\u7684\u5355\u5143\u683C\u5185\u7684\u5B57\u6BCD\u6784\u6210\uFF0C\u5176\u4E2D\u201C\u76F8\u90BB\u201D\u5355\u5143\u683C\u662F\u90A3\u4E9B\u6C34\u5E73\u76F8\u90BB\u6216\u5782\u76F4\u76F8\u90BB\u7684\u5355\u5143\u683C\u3002\u540C\u4E00\u4E2A\u5355\u5143\u683C\u5185\u7684\u5B57\u6BCD\u4E0D\u5141\u8BB8\u88AB\u91CD\u590D\u4F7F\u7528\u3002</span>

<span class="token comment">// \u8F93\u5165\uFF1Aboard = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCCED&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>

<span class="token comment">// \u8F93\u5165\uFF1Aboard = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;SEE&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>

<span class="token comment">// \u8F93\u5165\uFF1Aboard = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCB&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1Afalse</span>


<span class="token comment">/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">exist</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">board<span class="token punctuation">,</span> word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> len1 <span class="token operator">=</span> board<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length


    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> len1 <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> len2 <span class="token operator">||</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> word<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> word<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>


        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> word<span class="token punctuation">[</span>k<span class="token punctuation">]</span>

        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>131. \u5206\u5272\u56DE\u6587\u4E32</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u8BF7\u4F60\u5C06 s \u5206\u5272\u6210\u4E00\u4E9B\u5B50\u4E32\uFF0C\u4F7F\u6BCF\u4E2A\u5B50\u4E32\u90FD\u662F \u56DE\u6587\u4E32 \u3002\u8FD4\u56DE s \u6240\u6709\u53EF\u80FD\u7684\u5206\u5272\u65B9\u6848\u3002</span>

<span class="token comment">// \u56DE\u6587\u4E32 \u662F\u6B63\u7740\u8BFB\u548C\u53CD\u7740\u8BFB\u90FD\u4E00\u6837\u7684\u5B57\u7B26\u4E32\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;aab&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[&quot;a&quot;,&quot;a&quot;,&quot;b&quot;],[&quot;aa&quot;,&quot;b&quot;]]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1As = &quot;a&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[[&quot;a&quot;]]</span>

<span class="token comment">/**
 * @param {string} s
 * @return {string[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">temp<span class="token punctuation">,</span> startIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">===</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> 
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPali</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
                temp<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">isPali</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        l<span class="token operator">++</span>
        r<span class="token operator">--</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

</code></pre></div>`,11)]))}var d=s(o,[["render",c]]);export{m as __pageData,d as default};
