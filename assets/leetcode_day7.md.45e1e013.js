import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day7.md","lastUpdated":1731465675962}',o={};function e(c,n,l,k,u,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5" tabindex="-1">\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 <a class="header-anchor" href="#\u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 26. \u6811\u7684\u5B50\u7ED3\u6784</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u8F93\u5165\u4E24\u68F5\u4E8C\u53C9\u6811A\u548CB\uFF0C\u5224\u65ADB\u662F\u4E0D\u662FA\u7684\u5B50\u7ED3\u6784\u3002(\u7EA6\u5B9A\u7A7A\u6811\u4E0D\u662F\u4EFB\u610F\u4E00\u4E2A\u6811\u7684\u5B50\u7ED3\u6784)</span>

<span class="token comment">// B\u662FA\u7684\u5B50\u7ED3\u6784\uFF0C \u5373 A\u4E2D\u6709\u51FA\u73B0\u548CB\u76F8\u540C\u7684\u7ED3\u6784\u548C\u8282\u70B9\u503C\u3002</span>

<span class="token comment">// \u4F8B\u5982:</span>
<span class="token comment">// \u7ED9\u5B9A\u7684\u6811 A:</span>

<span class="token comment">//      3</span>
<span class="token comment">//     / \\</span>
<span class="token comment">//    4   5</span>
<span class="token comment">//   / \\</span>
<span class="token comment">//  1   2</span>
<span class="token comment">// \u7ED9\u5B9A\u7684\u6811 B\uFF1A</span>

<span class="token comment">//    4 </span>
<span class="token comment">//   /</span>
<span class="token comment">//  1</span>
<span class="token comment">// \u8FD4\u56DE true\uFF0C\u56E0\u4E3A B \u4E0E A \u7684\u4E00\u4E2A\u5B50\u6811\u62E5\u6709\u76F8\u540C\u7684\u7ED3\u6784\u548C\u8282\u70B9\u503C\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1AA = [1,2,3], B = [3,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1Afalse</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1AA = [3,4,5,1,2], B = [4,1]</span>
<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>

<span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSubStructure</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">A</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token constant">B</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u975E\u7A7A\u5224\u65AD</span>

    <span class="token comment">// \u4E09\u79CD\u60C5\u51B5: A\u5305\u542BB\u3001A\u7684\u5DE6\u5B50\u6811\u5305\u542BB\u3001A\u7684\u53F3\u5B50\u6811\u5305\u542BB</span>
    <span class="token keyword">return</span> <span class="token function">contain</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5224\u65ADA\u662F\u5426\u5305\u542BB</span>
<span class="token keyword">var</span> <span class="token function-variable function">contain</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">B</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// \u5047\u5982\u8D70\u5230\u8FD9\u91CC\u65F6B\u5DF2\u7ECF\u4E3A\u7A7A\u4E86 \u8BC1\u660EB\u5DF2\u7ECF\u904D\u5386\u5230\u5E95\u4E86\u8FD8\u6CA1\u6709\u5931\u8D25 \u6240\u4EE5\u8BC1\u660EA\u5305\u542BB</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u5047\u5982\u8D70\u5230\u8FD9\u91CCA\u5DF2\u7ECF\u4E3A\u7A7A\u4E86 \u8BC1\u660E\u4E0D\u4F1A\u518D\u6709A\u80FD\u591F\u5305\u542BB\u4E86</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>val <span class="token operator">!==</span> <span class="token constant">B</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u5047\u5982\u5B83\u4EEC\u7684\u503C\u4E0D\u76F8\u7B49</span>

    <span class="token comment">// \u5224\u65AD\u4E24\u68F5\u6811\u662F\u5426\u4E3A\u5305\u542B\u5173\u7CFB\u8981\u5224\u65AD\u5DE6\u53F3\u5B50\u6811</span>
    <span class="token keyword">return</span> <span class="token function">contain</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">contain</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>2. \u5251\u6307 Offer 27. \u4E8C\u53C9\u6811\u7684\u955C\u50CF</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u8BF7\u5B8C\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8BE5\u51FD\u6570\u8F93\u51FA\u5B83\u7684\u955C\u50CF\u3002</span>

<span class="token comment">// \u4F8B\u5982\u8F93\u5165\uFF1A</span>

<span class="token comment">//      4</span>
<span class="token comment">//    /   \\</span>
<span class="token comment">//   2     7</span>
<span class="token comment">//  / \\   / \\</span>
<span class="token comment">// 1   3 6   9</span>
<span class="token comment">// \u955C\u50CF\u8F93\u51FA\uFF1A</span>

<span class="token comment">//      4</span>
<span class="token comment">//    /   \\</span>
<span class="token comment">//   7     2</span>
<span class="token comment">//  / \\   / \\</span>
<span class="token comment">// 9   6 3   1</span>

<span class="token comment">//  </span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aroot = [4,2,7,1,3,6,9]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[4,7,2,9,6,3,1]</span>

<span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */</span>
<span class="token comment">// \u8FED\u4EE3</span>
<span class="token keyword">var</span> <span class="token function-variable function">mirrorTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span> <span class="token comment">// \u975E\u7A7A\u5224\u65AD</span>
    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span> <span class="token comment">// \u961F\u5217\u5B58\u653E</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4EA4\u6362\u5DE6\u53F3\u5B50\u6811</span>
            <span class="token keyword">const</span> head <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> leftTree <span class="token operator">=</span> head<span class="token punctuation">.</span>left
            head<span class="token punctuation">.</span>left <span class="token operator">=</span> head<span class="token punctuation">.</span>right
            head<span class="token punctuation">.</span>right <span class="token operator">=</span> leftTree
            <span class="token comment">// \u961F\u5217\u4E2D\u63A8\u5165\u5DE6\u53F3\u5B50\u6811</span>
            head<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            head<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u9012\u5F52</span>
<span class="token keyword">var</span> <span class="token function-variable function">mirrorTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u975E\u7A7A\u5224\u65AD</span>

    <span class="token punctuation">[</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root<span class="token punctuation">.</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>3. \u5BF9\u79F0\u7684\u4E8C\u53C9\u6811</strong></p><div class="language-javascript"><pre><code>
<span class="token comment">// \u8BF7\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5224\u65AD\u4E00\u68F5\u4E8C\u53C9\u6811\u662F\u4E0D\u662F\u5BF9\u79F0\u7684\u3002\u5982\u679C\u4E00\u68F5\u4E8C\u53C9\u6811\u548C\u5B83\u7684\u955C\u50CF\u4E00\u6837\uFF0C\u90A3\u4E48\u5B83\u662F\u5BF9\u79F0\u7684\u3002</span>

<span class="token comment">// \u4F8B\u5982\uFF0C\u4E8C\u53C9\u6811 [1,2,2,3,4,4,3] \u662F\u5BF9\u79F0\u7684\u3002</span>

<span class="token comment">//     1</span>
<span class="token comment">//    / \\</span>
<span class="token comment">//   2   2</span>
<span class="token comment">//  / \\ / \\</span>
<span class="token comment">// 3  4 4  3</span>
<span class="token comment">// \u4F46\u662F\u4E0B\u9762\u8FD9\u4E2A [1,2,2,null,3,null,3] \u5219\u4E0D\u662F\u955C\u50CF\u5BF9\u79F0\u7684:</span>

<span class="token comment">//     1</span>
<span class="token comment">//    / \\</span>
<span class="token comment">//   2   2</span>
<span class="token comment">//    \\   \\</span>
<span class="token comment">//    3    3</span>

<span class="token comment">//  </span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aroot = [1,2,2,3,4,4,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1Atrue</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Aroot = [1,2,2,null,3,null,3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1Afalse</span>

<span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    
    <span class="token keyword">const</span> <span class="token function-variable function">isSame</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">leftRoot<span class="token punctuation">,</span> rightRoot</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>leftRoot <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>rightRoot<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>leftRoot <span class="token operator">||</span> <span class="token operator">!</span>rightRoot<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

        <span class="token keyword">return</span> leftRoot<span class="token punctuation">.</span>val <span class="token operator">===</span> rightRoot<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> <span class="token function">isSame</span><span class="token punctuation">(</span>leftRoot<span class="token punctuation">.</span>left<span class="token punctuation">,</span> rightRoot<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSame</span><span class="token punctuation">(</span>leftRoot<span class="token punctuation">.</span>right<span class="token punctuation">,</span> rightRoot<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">isSame</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,7)]))}var d=s(o,[["render",e]]);export{m as __pageData,d as default};
