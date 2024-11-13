import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u5C9B\u5C7F\u6570\u91CF #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day10.md","lastUpdated":1731465675958}',o={};function e(c,n,l,u,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u5C9B\u5C7F\u6570\u91CF" tabindex="-1">\u5C9B\u5C7F\u6570\u91CF <a class="header-anchor" href="#\u5C9B\u5C7F\u6570\u91CF" aria-hidden="true">#</a></h1><p><strong>200. \u5C9B\u5C7F\u6570\u91CF</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u7531 &#39;1&#39;\uFF08\u9646\u5730\uFF09\u548C &#39;0&#39;\uFF08\u6C34\uFF09\u7EC4\u6210\u7684\u7684\u4E8C\u7EF4\u7F51\u683C\uFF0C\u8BF7\u4F60\u8BA1\u7B97\u7F51\u683C\u4E2D\u5C9B\u5C7F\u7684\u6570\u91CF\u3002</span>

<span class="token comment">// \u5C9B\u5C7F\u603B\u662F\u88AB\u6C34\u5305\u56F4\uFF0C\u5E76\u4E14\u6BCF\u5EA7\u5C9B\u5C7F\u53EA\u80FD\u7531\u6C34\u5E73\u65B9\u5411\u548C/\u6216\u7AD6\u76F4\u65B9\u5411\u4E0A\u76F8\u90BB\u7684\u9646\u5730\u8FDE\u63A5\u5F62\u6210\u3002</span>

<span class="token comment">// \u6B64\u5916\uFF0C\u4F60\u53EF\u4EE5\u5047\u8BBE\u8BE5\u7F51\u683C\u7684\u56DB\u6761\u8FB9\u5747\u88AB\u6C34\u5305\u56F4\u3002</span>
<span class="token comment">/**
 * @param {character[][]} grid
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numIslands</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len1 <span class="token operator">=</span> grid<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> len1 <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> len2 <span class="token operator">||</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> 
        grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> count
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var m=s(o,[["render",e]]);export{d as __pageData,m as default};
