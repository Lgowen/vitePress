import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9 #","description":"","frontmatter":{},"headers":[],"relativePath":"hot100/day24.md","lastUpdated":1731465675958}',e={};function o(c,n,l,i,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9" tabindex="-1">\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9 <a class="header-anchor" href="#\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9" aria-hidden="true">#</a></h1><p><strong>19. \u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\uFF0C\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C n \u4E2A\u7ED3\u70B9\uFF0C\u5E76\u4E14\u8FD4\u56DE\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u3002</span>

<span class="token comment">// \u8F93\u5165\uFF1Ahead = [1,2,3,4,5], n = 2</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[1,2,3,5]</span>
<span class="token comment">// \u793A\u4F8B 2\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Ahead = [1], n = 1</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[]</span>
<span class="token comment">// \u793A\u4F8B 3\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Ahead = [1,2], n = 1</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[1]</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> init <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>

    <span class="token keyword">let</span> slow <span class="token operator">=</span> init
    <span class="token keyword">let</span> fast <span class="token operator">=</span> init

    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next

    <span class="token keyword">return</span> init<span class="token punctuation">.</span>next
    
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3)]))}var m=s(e,[["render",o]]);export{d as __pageData,m as default};
