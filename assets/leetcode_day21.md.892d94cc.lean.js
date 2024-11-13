import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u52A8\u6001\u89C4\u5212 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day21.md","lastUpdated":1731465675962}',o={};function e(c,n,u,l,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><p><strong>198. \u6253\u5BB6\u52AB\u820D</strong></p><div class="language-js"><pre><code><span class="token comment">// \u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5C0F\u5077\uFF0C\u8BA1\u5212\u5077\u7A83\u6CBF\u8857\u7684\u623F\u5C4B\u3002\u6BCF\u95F4\u623F\u5185\u90FD\u85CF\u6709\u4E00\u5B9A\u7684\u73B0\u91D1\uFF0C\u5F71\u54CD\u4F60\u5077\u7A83\u7684\u552F\u4E00\u5236\u7EA6\u56E0\u7D20\u5C31\u662F\u76F8\u90BB\u7684\u623F\u5C4B\u88C5\u6709\u76F8\u4E92\u8FDE\u901A\u7684\u9632\u76D7\u7CFB\u7EDF\uFF0C\u5982\u679C\u4E24\u95F4\u76F8\u90BB\u7684\u623F\u5C4B\u5728\u540C\u4E00\u665A\u4E0A\u88AB\u5C0F\u5077\u95EF\u5165\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u62A5\u8B66\u3002</span>

<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u4EE3\u8868\u6BCF\u4E2A\u623F\u5C4B\u5B58\u653E\u91D1\u989D\u7684\u975E\u8D1F\u6574\u6570\u6570\u7EC4\uFF0C\u8BA1\u7B97\u4F60 \u4E0D\u89E6\u52A8\u8B66\u62A5\u88C5\u7F6E\u7684\u60C5\u51B5\u4E0B \uFF0C\u4E00\u591C\u4E4B\u5185\u80FD\u591F\u5077\u7A83\u5230\u7684\u6700\u9AD8\u91D1\u989D\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1A[1,2,3,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A4</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u5077\u7A83 1 \u53F7\u623F\u5C4B (\u91D1\u989D = 1) \uFF0C\u7136\u540E\u5077\u7A83 3 \u53F7\u623F\u5C4B (\u91D1\u989D = 3)\u3002</span>
<span class="token comment">//      \u5077\u7A83\u5230\u7684\u6700\u9AD8\u91D1\u989D = 1 + 3 = 4 \u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1A[2,7,9,3,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A12</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u5077\u7A83 1 \u53F7\u623F\u5C4B (\u91D1\u989D = 2), \u5077\u7A83 3 \u53F7\u623F\u5C4B (\u91D1\u989D = 9)\uFF0C\u63A5\u7740\u5077\u7A83 5 \u53F7\u623F\u5C4B (\u91D1\u989D = 1)\u3002</span>
<span class="token comment">//      \u5077\u7A83\u5230\u7684\u6700\u9AD8\u91D1\u989D = 2 + 9 + 1 = 12 \u3002</span>


<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length

    <span class="token keyword">let</span> num1 <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> num2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> num1
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> num2


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cur <span class="token operator">=</span> num2
        num2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>num2<span class="token punctuation">,</span> num1 <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        num1 <span class="token operator">=</span> cur
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> num2
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>279. \u5B8C\u5168\u5E73\u65B9\u6570</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 n \uFF0C\u8FD4\u56DE \u548C\u4E3A n \u7684\u5B8C\u5168\u5E73\u65B9\u6570\u7684\u6700\u5C11\u6570\u91CF \u3002</span>

<span class="token comment">// \u5B8C\u5168\u5E73\u65B9\u6570 \u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u5176\u503C\u7B49\u4E8E\u53E6\u4E00\u4E2A\u6574\u6570\u7684\u5E73\u65B9\uFF1B\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5176\u503C\u7B49\u4E8E\u4E00\u4E2A\u6574\u6570\u81EA\u4E58\u7684\u79EF\u3002\u4F8B\u5982\uFF0C1\u30014\u30019 \u548C 16 \u90FD\u662F\u5B8C\u5168\u5E73\u65B9\u6570\uFF0C\u800C 3 \u548C 11 \u4E0D\u662F\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 12</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3 </span>
<span class="token comment">// \u89E3\u91CA\uFF1A12 = 4 + 4 + 4</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1An = 13</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2</span>
<span class="token comment">// \u89E3\u91CA\uFF1A13 = 4 + 9</span>

<span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> min <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">*</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j <span class="token operator">*</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> min <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>322. \u96F6\u94B1\u5151\u6362</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 coins \uFF0C\u8868\u793A\u4E0D\u540C\u9762\u989D\u7684\u786C\u5E01\uFF1B\u4EE5\u53CA\u4E00\u4E2A\u6574\u6570 amount \uFF0C\u8868\u793A\u603B\u91D1\u989D\u3002</span>

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


<span class="token comment">/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">coinChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">coins<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span> 

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> target <span class="token operator">&lt;</span> dp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> target<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> coin <span class="token keyword">of</span> coins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> coin<span class="token punctuation">)</span> <span class="token keyword">continue</span>
            dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>target <span class="token operator">-</span> coin<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span> <span class="token operator">===</span> amount <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>139. \u5355\u8BCD\u62C6\u5206</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s \u548C\u4E00\u4E2A\u5B57\u7B26\u4E32\u5217\u8868 wordDict \u4F5C\u4E3A\u5B57\u5178\u3002\u5982\u679C\u53EF\u4EE5\u5229\u7528\u5B57\u5178\u4E2D\u51FA\u73B0\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5355\u8BCD\u62FC\u63A5\u51FA s \u5219\u8FD4\u56DE true\u3002</span>

<span class="token comment">// \u6CE8\u610F\uFF1A\u4E0D\u8981\u6C42\u5B57\u5178\u4E2D\u51FA\u73B0\u7684\u5355\u8BCD\u5168\u90E8\u90FD\u4F7F\u7528\uFF0C\u5E76\u4E14\u5B57\u5178\u4E2D\u7684\u5355\u8BCD\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165: s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;, &quot;code&quot;]</span>
<span class="token comment">// \u8F93\u51FA: true</span>
<span class="token comment">// \u89E3\u91CA: \u8FD4\u56DE true \u56E0\u4E3A &quot;leetcode&quot; \u53EF\u4EE5\u7531 &quot;leet&quot; \u548C &quot;code&quot; \u62FC\u63A5\u6210\u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165: s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;, &quot;pen&quot;]</span>
<span class="token comment">// \u8F93\u51FA: true</span>
<span class="token comment">// \u89E3\u91CA: \u8FD4\u56DE true \u56E0\u4E3A &quot;applepenapple&quot; \u53EF\u4EE5\u7531 &quot;apple&quot; &quot;pen&quot; &quot;apple&quot; \u62FC\u63A5\u6210\u3002</span>
<span class="token comment">//      \u6CE8\u610F\uFF0C\u4F60\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u5B57\u5178\u4E2D\u7684\u5355\u8BCD\u3002</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;, &quot;dog&quot;, &quot;sand&quot;, &quot;and&quot;, &quot;cat&quot;]</span>
<span class="token comment">// \u8F93\u51FA: false</span>

<span class="token comment">/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wordBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> wordDict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wordSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordDict<span class="token punctuation">)</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> suffix <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>wordSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>suffix<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>len<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>300. \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u627E\u5230\u5176\u4E2D\u6700\u957F\u4E25\u683C\u9012\u589E\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u3002</span>

<span class="token comment">// \u5B50\u5E8F\u5217 \u662F\u7531\u6570\u7EC4\u6D3E\u751F\u800C\u6765\u7684\u5E8F\u5217\uFF0C\u5220\u9664\uFF08\u6216\u4E0D\u5220\u9664\uFF09\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u800C\u4E0D\u6539\u53D8\u5176\u4F59\u5143\u7D20\u7684\u987A\u5E8F\u3002\u4F8B\u5982\uFF0C[3,6,2,7] \u662F\u6570\u7EC4 [0,3,1,6,2,2,7] \u7684\u5B50\u5E8F\u5217\u3002</span>
 
<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [10,9,2,5,3,7,101,18]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A4</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u662F [2,3,7,101]\uFF0C\u56E0\u6B64\u957F\u5EA6\u4E3A 4 \u3002</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [0,1,0,3,2,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A4</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Anums = [7,7,7,7,7,7,7]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>


<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLIS</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length

    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>dp<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,11)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
