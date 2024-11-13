import{_ as s,A as a,V as t,E as e}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u94FE\u8868 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day9.md","lastUpdated":1731465675958}',p={};function o(c,n,r,l,u,k){return e(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u94FE\u8868" tabindex="-1">\u94FE\u8868 <a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a></h1><p><strong>206. \u53CD\u8F6C\u94FE\u8868</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u5355\u94FE\u8868\u7684\u5934\u8282\u70B9 head \uFF0C\u8BF7\u4F60\u53CD\u8F6C\u94FE\u8868\uFF0C\u5E76\u8FD4\u56DE\u53CD\u8F6C\u540E\u7684\u94FE\u8868\u3002</span>

<span class="token comment">/**
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
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> preNode <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> head

    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> nextNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next
        curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode
        preNode <span class="token operator">=</span> curNode
        curNode <span class="token operator">=</span> nextNode
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> preNode
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>141. \u73AF\u5F62\u94FE\u8868</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9 head \uFF0C\u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF\u3002</span>

<span class="token comment">// \u5982\u679C\u94FE\u8868\u4E2D\u6709\u67D0\u4E2A\u8282\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u8DDF\u8E2A next \u6307\u9488\u518D\u6B21\u5230\u8FBE\uFF0C\u5219\u94FE\u8868\u4E2D\u5B58\u5728\u73AF\u3002 \u4E3A\u4E86\u8868\u793A\u7ED9\u5B9A\u94FE\u8868\u4E2D\u7684\u73AF\uFF0C\u8BC4\u6D4B\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528\u6574\u6570 pos \u6765\u8868\u793A\u94FE\u8868\u5C3E\u8FDE\u63A5\u5230\u94FE\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\uFF09\u3002\u6CE8\u610F\uFF1Apos \u4E0D\u4F5C\u4E3A\u53C2\u6570\u8FDB\u884C\u4F20\u9012 \u3002\u4EC5\u4EC5\u662F\u4E3A\u4E86\u6807\u8BC6\u94FE\u8868\u7684\u5B9E\u9645\u60C5\u51B5\u3002</span>

<span class="token comment">// \u5982\u679C\u94FE\u8868\u4E2D\u5B58\u5728\u73AF \uFF0C\u5219\u8FD4\u56DE true \u3002 \u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</span>
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

    <span class="token keyword">let</span> pre <span class="token operator">=</span> head
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next

    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">===</span> cur<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,5)]))}var m=s(p,[["render",o]]);export{d as __pageData,m as default};
