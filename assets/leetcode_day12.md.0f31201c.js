import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u53CC\u6307\u9488 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day12.md","lastUpdated":1731465675962}',e={};function o(c,n,l,k,r,u){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u53CC\u6307\u9488" tabindex="-1">\u53CC\u6307\u9488 <a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a></h1><p><strong>\u5251\u6307 Offer 25. \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u8F93\u5165\u4E24\u4E2A\u9012\u589E\u6392\u5E8F\u7684\u94FE\u8868\uFF0C\u5408\u5E76\u8FD9\u4E24\u4E2A\u94FE\u8868\u5E76\u4F7F\u65B0\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u4ECD\u7136\u662F\u9012\u589E\u6392\u5E8F\u7684\u3002</span>

<span class="token comment">// \u793A\u4F8B1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1A1-&gt;2-&gt;4, 1-&gt;3-&gt;4</span>
<span class="token comment">// \u8F93\u51FA\uFF1A1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4</span>


<span class="token keyword">function</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316\u65B0\u7684\u5934\u8282\u70B9</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head <span class="token comment">// \b\u65B0\u5EFA\u521D\u59CB\u8282\u70B9</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E24\u4E2A\u6307\u9488\u6307\u5411\u7684\u5F53\u524D\u503C\u8FDB\u884C\u6BD4\u8F83 \u5C06\u5C0F\u7684\u90A3\u4E2A\u503C\u4F5C\u4E3Acur\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9</span>
        <span class="token comment">// \u4E24\u4E2A\u6307\u9488\u4EA4\u66FF\u5411\u524D\u8FDB\u884C</span>
        <span class="token comment">// cur\u7684\u6307\u5411\u6BCF\u6B21\u4E5F\u662F\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l1
            l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l2
            l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// l1 \u6216 l2\u4E3A\u7A7A\u65F6\u8DF3\u51FA\u5FAA\u73AF</span>
    <span class="token comment">// \u5C06\u5269\u4E0B\u7684\u6709\u503C\u7684\u94FE\u8868\u4F5C\u4E3Acur\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9</span>

    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l1 <span class="token operator">?</span> l1 <span class="token operator">:</span> l2

    <span class="token keyword">return</span> head<span class="token punctuation">.</span>next  <span class="token comment">// \u6700\u540E\u8FD4\u56DE\u65B0\u7684\u5934\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9 \u5373cur</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65F6\u95F4: O(M + N)</span>
<span class="token comment">// \u7A7A\u95F4: O(1)</span>

</code></pre></div><p><strong>\u5251\u6307 Offer 52. \u4E24\u4E2A\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u516C\u5171\u8282\u70B9</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u8F93\u5165\uFF1AintersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3</span>
<span class="token comment">// \u8F93\u51FA\uFF1AReference of the node with value = 8</span>
<span class="token comment">// \u8F93\u5165\u89E3\u91CA\uFF1A\u76F8\u4EA4\u8282\u70B9\u7684\u503C\u4E3A 8 \uFF08\u6CE8\u610F\uFF0C\u5982\u679C\u4E24\u4E2A\u5217\u8868\u76F8\u4EA4\u5219\u4E0D\u80FD\u4E3A 0\uFF09\u3002\u4ECE\u5404\u81EA\u7684\u8868\u5934\u5F00\u59CB\u7B97\u8D77\uFF0C\u94FE\u8868 A \u4E3A [4,1,8,4,5]\uFF0C\u94FE\u8868 B \u4E3A [5,0,1,8,4,5]\u3002\u5728 A \u4E2D\uFF0C\u76F8\u4EA4\u8282\u70B9\u524D\u6709 2 \u4E2A\u8282\u70B9\uFF1B\u5728 B \u4E2D\uFF0C\u76F8\u4EA4\u8282\u70B9\u524D\u6709 3 \u4E2A\u8282\u70B9\u3002</span>


<span class="token comment">// \u8F93\u5165\uFF1AintersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1</span>
<span class="token comment">// \u8F93\u51FA\uFF1AReference of the node with value = 2</span>
<span class="token comment">// \u8F93\u5165\u89E3\u91CA\uFF1A\u76F8\u4EA4\u8282\u70B9\u7684\u503C\u4E3A 2 \uFF08\u6CE8\u610F\uFF0C\u5982\u679C\u4E24\u4E2A\u5217\u8868\u76F8\u4EA4\u5219\u4E0D\u80FD\u4E3A 0\uFF09\u3002\u4ECE\u5404\u81EA\u7684\u8868\u5934\u5F00\u59CB\u7B97\u8D77\uFF0C\u94FE\u8868 A \u4E3A [0,9,1,2,4]\uFF0C\u94FE\u8868 B \u4E3A [3,2,4]\u3002\u5728 A \u4E2D\uFF0C\u76F8\u4EA4\u8282\u70B9\u524D\u6709 3 \u4E2A\u8282\u70B9\uFF1B\u5728 B \u4E2D\uFF0C\u76F8\u4EA4\u8282\u70B9\u524D\u6709 1 \u4E2A\u8282\u70B9\u3002</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>

<span class="token comment">/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>headA <span class="token operator">||</span> <span class="token operator">!</span>headB<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    
    <span class="token keyword">let</span> pA <span class="token operator">=</span> headA <span class="token comment">// \u65B0\u5EFA\u94FE\u8868A</span>
    <span class="token keyword">let</span> pB <span class="token operator">=</span> headB <span class="token comment">// \u65B0\u5EFA\u94FE\u8868B</span>

    <span class="token comment">// \u4E24\u4E2A\u94FE\u8868\u8282\u70B9\u4E0D\u76F8\u7B49\u65F6</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>pA <span class="token operator">!==</span> pB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pA <span class="token operator">=</span> pA <span class="token operator">?</span> pA<span class="token punctuation">.</span>next <span class="token operator">:</span> headB <span class="token comment">// \u5047\u5982pA\u5B58\u5728\u5219\u7EE7\u7EED\u5F80\u4E0B \u5426\u5219\u4ECEheadB\u4ECE\u5934\u518D\u6765\u5BF9\u6BD4</span>
        pB <span class="token operator">=</span> pB <span class="token operator">?</span> pB<span class="token punctuation">.</span>next <span class="token operator">:</span> headA <span class="token comment">// \u5047\u5982pB\u5B58\u5728\u5219\u7EE7\u7EED\u5F80\u4E0B \u5426\u5219\u4ECEheadA\u4ECE\u5934\u518D\u6765\u5BF9\u6BD4</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5F53\u524D\u4E24\u4E2A\u94FE\u8868\u76F8\u7B49 \u5373\u91CD\u5408\u65F6 \u5219\u5176\u4E2D\u503C\u4E3A\u7B2C\u4E00\u4E2A\u516C\u5171\u8282\u70B9</span>
    <span class="token keyword">return</span> pA
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// \u65F6\u95F4: O(M + N)</span>
<span class="token comment">// \u7A7A\u95F4: O(1)</span>

</code></pre></div>`,5)]))}var d=s(e,[["render",o]]);export{m as __pageData,d as default};
