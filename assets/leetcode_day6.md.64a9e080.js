import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day6.md","lastUpdated":1731465675962}',o={};function e(c,n,u,l,k,r){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5" tabindex="-1">\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 <a class="header-anchor" href="#\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5" aria-hidden="true">#</a></h1><p><strong>1. \u9762\u8BD5\u989832 - I. \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811\uFF08BFS\uFF09</strong></p><div class="language-javascript"><pre><code>
<span class="token comment">// \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u51FA\u4E8C\u53C9\u6811\u7684\u6BCF\u4E2A\u8282\u70B9\uFF0C\u540C\u4E00\u5C42\u7684\u8282\u70B9\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6253\u5370\u3002</span>

<span class="token comment">// \u4F8B\u5982:</span>
<span class="token comment">// \u7ED9\u5B9A\u4E8C\u53C9\u6811: [3,9,20,null,null,15,7],</span>

<span class="token comment">//     3</span>
<span class="token comment">//    / \\</span>
<span class="token comment">//   9  20</span>
<span class="token comment">//     /  \\</span>
<span class="token comment">//    15   7</span>

<span class="token comment">// \u8FD4\u56DE\uFF1A [3,9,20,15,7]</span>

<span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5047\u5982\u6839\u8282\u70B9\u4E0D\u5B58\u5728 \u8FD4\u56DE\u7A7A\u6570\u7EC4</span>
    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span> <span class="token comment">// \u5C06\u6839\u8282\u70B9\u653E\u5165\u961F\u5217</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u521B\u5EFA\u8FD4\u56DE\u7684\u6570\u7EC4</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5047\u5982\u961F\u5217\u4E2D\u6709\u8282\u70B9</span>
        <span class="token keyword">const</span> head <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5C06\u961F\u5217\u4E2D\u7684\u7B2C\u4E00\u4F4D\u53D6\u51FA</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// \u5C06\u8BE5\u8282\u70B9\u7684\u503C\u653E\u5165\u6570\u7EC4</span>
        head<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">// \u5047\u5982\u8BE5\u8282\u70B9\u6709\u5DE6\u5B50\u6811 \u5219\u5C06\u5DE6\u5B50\u6811\u5165\u961F</span>
        head<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// \u5047\u5982\u8BE5\u8282\u70B9\u6709\u53F3\u5B50\u6811 \u5219\u5C06\u53F3\u5B50\u6811\u5165\u961F</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> arr <span class="token comment">// \u8FD4\u56DE\u6570\u7EC4</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>2. \u5251\u6307 Offer 32 - II. \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811 II</strong></p><div class="language-javascript"><pre><code>
<span class="token comment">// \u4ECE\u4E0A\u5230\u4E0B\u6309\u5C42\u6253\u5370\u4E8C\u53C9\u6811\uFF0C\u540C\u4E00\u5C42\u7684\u8282\u70B9\u6309\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6253\u5370\uFF0C\u6BCF\u4E00\u5C42\u6253\u5370\u5230\u4E00\u884C\u3002</span>

<span class="token comment">// \u4F8B\u5982:</span>
<span class="token comment">// \u7ED9\u5B9A\u4E8C\u53C9\u6811: [3,9,20,null,null,15,7],</span>

<span class="token comment">//     3</span>
<span class="token comment">//    / \\</span>
<span class="token comment">//   9  20</span>
<span class="token comment">//     /  \\</span>
<span class="token comment">//    15   7</span>
<span class="token comment">// \u8FD4\u56DE\u5176\u5C42\u6B21\u904D\u5386\u7ED3\u679C\uFF1A</span>

<span class="token comment">// [</span>
<span class="token comment">//   [3],</span>
<span class="token comment">//   [9,20],</span>
<span class="token comment">//   [15,7]</span>
<span class="token comment">// ]</span>

<span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> curLevel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u4FDD\u5B58\u5F53\u524D\u5C42\u7EA7\u7684\u8282\u70B9</span>
        <span class="token comment">// \u91CD\u70B9\u5728\u4E8E i = queue.length \u8FDB\u884C\u904D\u5386</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> head <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8282\u70B9\u51FA\u961F</span>
            curLevel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            head<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">// \u8BE5\u64CD\u4F5C\u80FD\u591F\u4FDD\u8BC1\u6BCF\u91CD\u65B0\u8DD1\u4E00\u6B21for\u5FAA\u73AF\u65F6curLevel\u80FD\u653E\u6EE1\u8BE5\u5C42\u8282\u70B9</span>
            head<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// \u8BE5\u64CD\u4F5C\u80FD\u591F\u4FDD\u8BC1\u6BCF\u91CD\u65B0\u8DD1\u4E00\u6B21for\u5FAA\u73AF\u65F6curLevel\u80FD\u653E\u6EE1\u8BE5\u5C42\u8282\u70B9</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curLevel<span class="token punctuation">)</span> <span class="token comment">// \u6BCF\u8F6E\u5FAA\u73AF\u540E\u63A8\u5165\u6570\u7EC4</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3. \u5251\u6307 Offer 32 - III. \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811 III</strong></p><div class="language-javascript"><pre><code>
<span class="token comment">// \u8BF7\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u6309\u7167\u4E4B\u5B57\u5F62\u987A\u5E8F\u6253\u5370\u4E8C\u53C9\u6811\uFF0C\u5373\u7B2C\u4E00\u884C\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6253\u5370\uFF0C\u7B2C\u4E8C\u5C42\u6309\u7167\u4ECE\u53F3\u5230\u5DE6\u7684\u987A\u5E8F\u6253\u5370\uFF0C\u7B2C\u4E09\u884C\u518D\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6253\u5370\uFF0C\u5176\u4ED6\u884C\u4EE5\u6B64\u7C7B\u63A8\u3002</span>
 
<span class="token comment">// \u4F8B\u5982:</span>
<span class="token comment">// \u7ED9\u5B9A\u4E8C\u53C9\u6811: [3,9,20,null,null,15,7],</span>

<span class="token comment">//     3</span>
<span class="token comment">//    / \\</span>
<span class="token comment">//   9  20</span>
<span class="token comment">//     /  \\</span>
<span class="token comment">//    15   7</span>
<span class="token comment">// \u8FD4\u56DE\u5176\u5C42\u6B21\u904D\u5386\u7ED3\u679C\uFF1A</span>

<span class="token comment">// [</span>
<span class="token comment">//   [3],</span>
<span class="token comment">//   [20,9],</span>
<span class="token comment">//   [15,7]</span>
<span class="token comment">// ]</span>

<span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> level <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> curLevel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> head <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            level <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> curLevel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">:</span> curLevel<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// \u5224\u65AD\u5F53\u524D\u5C42\u7EA7\u662F\u5947\u6570\u8FD8\u662F\u5076\u6570\u6765\u51B3\u5B9A\u5F53\u524D\u5C42\u7EA7\u8282\u70B9\u7684\u6392\u5E8F\u65B9\u5F0F</span>
            head<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            head<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        level<span class="token operator">++</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curLevel<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,7)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
