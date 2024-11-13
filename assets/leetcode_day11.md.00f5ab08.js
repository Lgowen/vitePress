import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u53CC\u6307\u9488 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day11.md","lastUpdated":1731465675962}',e={};function o(c,n,l,k,r,u){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u53CC\u6307\u9488" tabindex="-1">\u53CC\u6307\u9488 <a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a></h1><p><strong>\u5251\u6307 Offer 18. \u5220\u9664\u94FE\u8868\u7684\u8282\u70B9</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7ED9\u5B9A\u5355\u5411\u94FE\u8868\u7684\u5934\u6307\u9488\u548C\u4E00\u4E2A\u8981\u5220\u9664\u7684\u8282\u70B9\u7684\u503C\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u5220\u9664\u8BE5\u8282\u70B9\u3002</span>

<span class="token comment">// \u8FD4\u56DE\u5220\u9664\u540E\u7684\u94FE\u8868\u7684\u5934\u8282\u70B9\u3002</span>

<span class="token comment">// \u6CE8\u610F\uFF1A\u6B64\u9898\u5BF9\u6BD4\u539F\u9898\u6709\u6539\u52A8</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: head = [4,5,1,9], val = 5</span>
<span class="token comment">// \u8F93\u51FA: [4,1,9]</span>
<span class="token comment">// \u89E3\u91CA: \u7ED9\u5B9A\u4F60\u94FE\u8868\u4E2D\u503C\u4E3A 5 \u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 1 -&gt; 9.</span>
<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: head = [4,5,1,9], val = 1</span>
<span class="token comment">// \u8F93\u51FA: [4,5,9]</span>
<span class="token comment">// \u89E3\u91CA: \u7ED9\u5B9A\u4F60\u94FE\u8868\u4E2D\u503C\u4E3A 1 \u7684\u7B2C\u4E09\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 5 -&gt; 9.</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next

    <span class="token keyword">let</span> pre <span class="token operator">=</span> head
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    
    <span class="token comment">// \u5047\u5982\u5F53\u524D\u8282\u70B9\u7684\u503C\u4E0D\u7B49\u4E8E\u76EE\u6807\u503C\u65F6 \u8282\u70B9\u540E\u79FB</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>val <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// cur\u4E0D\u5B58\u5728\u8868\u793A\u94FE\u8868\u4E2D\u4E0D\u5B58\u5728\u8981\u5220\u9664\u7684\u8282\u70B9 </span>
    <span class="token comment">// cur\u5B58\u5728\u5219\u628Apre\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u6307\u5411cur\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u5219\u5B9E\u73B0\u5220\u9664cur\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next 

    <span class="token keyword">return</span> head

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65F6\u95F4: O(n)</span>
<span class="token comment">// \u7A7A\u95F4: O(1)</span>

</code></pre></div><p><strong>\u5251\u6307 Offer 22. \u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9</strong></p><div class="language-js"><pre><code><span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u94FE\u8868\uFF0C\u8F93\u51FA\u8BE5\u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9\u3002\u4E3A\u4E86\u7B26\u5408\u5927\u591A\u6570\u4EBA\u7684\u4E60\u60EF\uFF0C\u672C\u9898\u4ECE1\u5F00\u59CB\u8BA1\u6570\uFF0C\u5373\u94FE\u8868\u7684\u5C3E\u8282\u70B9\u662F\u5012\u6570\u7B2C1\u4E2A\u8282\u70B9\u3002</span>

<span class="token comment">// \u4F8B\u5982\uFF0C\u4E00\u4E2A\u94FE\u8868\u6709 6 \u4E2A\u8282\u70B9\uFF0C\u4ECE\u5934\u8282\u70B9\u5F00\u59CB\uFF0C\u5B83\u4EEC\u7684\u503C\u4F9D\u6B21\u662F 1\u30012\u30013\u30014\u30015\u30016\u3002\u8FD9\u4E2A\u94FE\u8868\u7684\u5012\u6570\u7B2C 3 \u4E2A\u8282\u70B9\u662F\u503C\u4E3A 4 \u7684\u8282\u70B9\u3002</span>

<span class="token comment">// \u793A\u4F8B\uFF1A</span>

<span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868: 1-&gt;2-&gt;3-&gt;4-&gt;5, \u548C k = 2.</span>

<span class="token comment">// \u8FD4\u56DE\u94FE\u8868 4-&gt;5.</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getKthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head <span class="token comment">// \u521D\u59CB\u5316\u6162\u6307\u9488</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head <span class="token comment">// \u521D\u59CB\u5316\u5FEB\u6307\u9488</span>
    
    <span class="token comment">// \u628A\u5FEB\u6307\u9488\u8BBE\u7F6E\u4E3A\u6162\u6307\u9488\u7684\u540Ek\u4E2A\u8282\u70B9</span>
    <span class="token comment">// \u5219\u5F53\u5FEB\u6307\u9488\u5230\u8FBE\u5C3E\u8282\u70B9\u65F6 \u6162\u6307\u9488\u6B63\u597D\u662F\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
        k<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> slow
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65F6\u95F4: O(n)</span>
<span class="token comment">// \u7A7A\u95F4: O(1)</span>

</code></pre></div>`,5)]))}var d=s(e,[["render",o]]);export{m as __pageData,d as default};
