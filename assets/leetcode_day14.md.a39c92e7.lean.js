import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day14.md","lastUpdated":1731465675962}',o={};function e(c,n,u,k,l,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5" tabindex="-1">\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 <a class="header-anchor" href="#\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5" aria-hidden="true">#</a></h1><p><strong>\u5251\u6307 Offer 12. \u77E9\u9635\u4E2D\u7684\u8DEF\u5F84</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A m x n \u4E8C\u7EF4\u5B57\u7B26\u7F51\u683C board \u548C\u4E00\u4E2A\u5B57\u7B26\u4E32\u5355\u8BCD word \u3002\u5982\u679C word \u5B58\u5728\u4E8E\u7F51\u683C\u4E2D\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</span>

<span class="token comment">// \u5355\u8BCD\u5FC5\u987B\u6309\u7167\u5B57\u6BCD\u987A\u5E8F\uFF0C\u901A\u8FC7\u76F8\u90BB\u7684\u5355\u5143\u683C\u5185\u7684\u5B57\u6BCD\u6784\u6210\uFF0C\u5176\u4E2D\u201C\u76F8\u90BB\u201D\u5355\u5143\u683C\u662F\u90A3\u4E9B\u6C34\u5E73\u76F8\u90BB\u6216\u5782\u76F4\u76F8\u90BB\u7684\u5355\u5143\u683C\u3002\u540C\u4E00\u4E2A\u5355\u5143\u683C\u5185\u7684\u5B57\u6BCD\u4E0D\u5141\u8BB8\u88AB\u91CD\u590D\u4F7F\u7528\u3002</span>

<span class="token comment">// \u4F8B\u5982\uFF0C\u5728\u4E0B\u9762\u7684 3\xD74 \u7684\u77E9\u9635\u4E2D\u5305\u542B\u5355\u8BCD &quot;ABCCED&quot;\uFF08\u5355\u8BCD\u4E2D\u7684\u5B57\u6BCD\u5DF2\u6807\u51FA\uFF09\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aboard = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCCED&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aboard = [[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;d&quot;]], word = &quot;abcd&quot;</span>
<span class="token comment">// \u8F93\u51FA\uFF1Afalse</span>


<span class="token comment">/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">exist</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">board<span class="token punctuation">,</span> word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FB9\u754C\u6761\u4EF6\u5224\u65AD</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> x <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> y <span class="token operator">||</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> word<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

        <span class="token comment">// k\u7684\u503C\u6B63\u597D\u4E0Eword\u4E2D\u6700\u540E\u4E00\u4E2A\u5B57\u6BCD\u7684\u7D22\u5F15\u503C\u76F8\u540C\u8868\u793A\u627E\u5230\u4E86\u5B8C\u6574\u901A\u8DEF</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> word<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

        <span class="token comment">// \u6807\u8BB0\u5F53\u524D\u7684\u503C</span>
        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        
        <span class="token comment">// \u9012\u5F52\u5F53\u524D\u5B57\u6BCD\u4E0A\u4E0B\u5DE6\u53F3\u56DB\u4E2A\u65B9\u5411\u770B\u662F\u5426\u6709\u901A\u8DEF</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        
        <span class="token comment">// \u628A\u503C\u8D4B\u503C\u56DE\u53BB \u4EE5\u4FDD\u8BC1\u4E0B\u4E00\u6B21\u5730\u56FE\u4E0A\u5B57\u6BCD\u7684\u5B8C\u6574\u6027</span>
        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> word<span class="token punctuation">[</span>k<span class="token punctuation">]</span>

        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> x <span class="token operator">=</span> board<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> y <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length 
    

    <span class="token comment">// \u5224\u65AD\u6BCF\u4E00\u4E2A\u4F4D\u7F6E\u7684\u5B57\u6BCD\u662F\u5426\u80FD\u627E\u5230\u5B8C\u6574\u8DEF\u5F84</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> y<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre></div><p><strong>\u5251\u6307 Offer 13. \u673A\u5668\u4EBA\u7684\u8FD0\u52A8\u8303\u56F4</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u5730\u4E0A\u6709\u4E00\u4E2Am\u884Cn\u5217\u7684\u65B9\u683C\uFF0C\u4ECE\u5750\u6807 [0,0] \u5230\u5750\u6807 [m-1,n-1] \u3002\u4E00\u4E2A\u673A\u5668\u4EBA\u4ECE\u5750\u6807 [0, 0] \u7684\u683C\u5B50\u5F00\u59CB\u79FB\u52A8\uFF0C\u5B83\u6BCF\u6B21\u53EF\u4EE5\u5411\u5DE6\u3001\u53F3\u3001\u4E0A\u3001\u4E0B\u79FB\u52A8\u4E00\u683C\uFF08\u4E0D\u80FD\u79FB\u52A8\u5230\u65B9\u683C\u5916\uFF09\uFF0C\u4E5F\u4E0D\u80FD\u8FDB\u5165\u884C\u5750\u6807\u548C\u5217\u5750\u6807\u7684\u6570\u4F4D\u4E4B\u548C\u5927\u4E8Ek\u7684\u683C\u5B50\u3002\u4F8B\u5982\uFF0C\u5F53k\u4E3A18\u65F6\uFF0C\u673A\u5668\u4EBA\u80FD\u591F\u8FDB\u5165\u65B9\u683C [35, 37] \uFF0C\u56E0\u4E3A3+5+3+7=18\u3002\u4F46\u5B83\u4E0D\u80FD\u8FDB\u5165\u65B9\u683C [35, 38]\uFF0C\u56E0\u4E3A3+5+3+8=19\u3002\u8BF7\u95EE\u8BE5\u673A\u5668\u4EBA\u80FD\u591F\u5230\u8FBE\u591A\u5C11\u4E2A\u683C\u5B50\uFF1F</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Am = 2, n = 3, k = 1</span>
<span class="token comment">// \u8F93\u51FA\uFF1A3</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Am = 3, n = 1, k = 0</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1</span>

<span class="token comment">/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">movingCount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// visited \u7528\u6765\u8BB0\u5F55\u8D70\u8FC7\u7684\u683C\u5B50\uFF0C\u907F\u514D\u91CD\u590D</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8F85\u52A9\u51FD\u6570\uFF0C\u8BA1\u7B97\u4F4D\u6570\u548C</span>
    <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// dfs</span>
    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5BF9\u5E94\u5F00\u5934\u6240\u8BF4\u7684\u4E09\u4E2A\u7EC8\u6B62\u6761\u4EF6\uFF0C\u8D85\u8FC7k\u503C\u3001\u5230\u8FBE\u8FB9\u754C\u3001\u8D70\u8FC7\u7684\u683C\u5B50</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">&gt;</span> k <span class="token operator">||</span> x <span class="token operator">&gt;=</span> m <span class="token operator">||</span> y <span class="token operator">&gt;=</span> n <span class="token operator">||</span> visited<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BB0\u5F55\u5F53\u524D\u683C\u5B50\u5DF2\u7ECF\u8D70\u8FC7\uFF0C\u8FD4\u56DE\u5F53\u524D\u8BA1\u6570 1 + \u540E\u7EED\u5176\u4ED6\u4E24\u4E2A\u65B9\u5411\u7684\u603B\u548C</span>
            visited<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">dfs</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dfs</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,5)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
