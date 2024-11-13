import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u94FE\u8868 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day2.md","lastUpdated":1731465675962}',o={};function e(c,n,l,u,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u94FE\u8868" tabindex="-1">\u94FE\u8868 <a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 06. \u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9\uFF0C\u4ECE\u5C3E\u5230\u5934\u53CD\u8FC7\u6765\u8FD4\u56DE\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\uFF08\u7528\u6570\u7EC4\u8FD4\u56DE\uFF09\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1Ahead = [1,3,2]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[2,3,1]</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>

<span class="token comment">/**
 * @param {ListNode} head
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reversePrint</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5316\u6570\u7EC4</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5047\u5982\u8BE5ListNode\u4E0D\u4E3Anull</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u503C\u63A8\u5165\u6570\u7EC4</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// \u5C06\u5F53\u524DListNode\u6307\u5411\u4E0B\u4E00\u4E2AListNode</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53CD\u8F6C\u6570\u7EC4</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. \u5251\u6307 Offer 24. \u53CD\u8F6C\u94FE\u8868(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9\uFF0C\u53CD\u8F6C\u8BE5\u94FE\u8868\u5E76\u8F93\u51FA\u53CD\u8F6C\u540E\u94FE\u8868\u7684\u5934\u8282\u70B9\u3002</span>

<span class="token comment">// \u793A\u4F8B:</span>

<span class="token comment">// \u8F93\u5165: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL</span>
<span class="token comment">// \u8F93\u51FA: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> preNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5316\u65B0\u5934\u8282\u70B9</span>
  <span class="token keyword">let</span> curNode <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6Ehead\u4E3A\u5F53\u524D\u8282\u70B9</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u524D\u8282\u70B9\u5B58\u5728\u65F6</span>
    <span class="token keyword">const</span> nextNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// \u5148\u5C06\u5F53\u524D\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u4FDD\u5B58</span>
    curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span> <span class="token comment">// \u5C06\u65B0\u5934\u8282\u70B9\u8D4B\u503C\u7ED9\u5F53\u524D\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9</span>
    preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span> <span class="token comment">// \u5C06\u65B0\u5934\u8282\u70B9\u53D8\u4E3A\u5F53\u524D\u8282\u70B9\uFF08\u76F8\u5F53\u4E8E\u53CD\u8F6C\uFF09</span>
    curNode <span class="token operator">=</span> nextNode<span class="token punctuation">;</span> <span class="token comment">// \u5C06\u4FDD\u5B58\u597D\u7684\u539F\u672C\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u8BBE\u7F6E\u4E3A\u5F53\u524D\u8282\u70B9</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> preNode<span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u8FD4\u56DE\u65B0\u7684\u5934\u8282\u70B9</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// null -&gt; 1 -&gt; 2 -&gt; 3</span>
<span class="token comment">//  pre   cur</span>
<span class="token comment">// null &lt;- 1    2 -&gt; 3</span>
<span class="token comment">//        pre  cur</span>
<span class="token comment">// null &lt;- 1 &lt;- 2    3</span>
<span class="token comment">//             pre  cur</span>
<span class="token comment">// null &lt;- 1 &lt;- 2 &lt;- 3</span>
<span class="token comment">//                  pre cur === null</span>
</code></pre></div><p><strong>3. \u5251\u6307 Offer 35. \u590D\u6742\u94FE\u8868\u7684\u590D\u5236(Medium)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u8BF7\u5B9E\u73B0 copyRandomList \u51FD\u6570\uFF0C\u590D\u5236\u4E00\u4E2A\u590D\u6742\u94FE\u8868\u3002</span>
<span class="token comment">// \u5728\u590D\u6742\u94FE\u8868\u4E2D\uFF0C\u6BCF\u4E2A\u8282\u70B9\u9664\u4E86\u6709\u4E00\u4E2A next \u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u8FD8\u6709\u4E00\u4E2A random \u6307\u9488\u6307\u5411\u94FE\u8868\u4E2D\u7684\u4EFB\u610F\u8282\u70B9\u6216\u8005 null\u3002</span>

<span class="token comment">/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */</span>

<span class="token comment">/**
 * @param {Node} head
 * @return {Node}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">copyRandomList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u54C8\u5E0C\u8868</span>
  <span class="token keyword">let</span> node <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u8282\u70B9</span>
  <span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u590D\u5236\u8282\u70B9\uFF08\u4E0D\u6539\u53D8\u4EE5\u65B9\u4FBF\u540E\u9762\u4F7F\u7528\uFF09</span>
  <span class="token keyword">let</span> newNode <span class="token operator">=</span> newHead<span class="token punctuation">;</span> <span class="token comment">// \u62FF\u6765\u62F7\u8D1D\u4F7F\u7528\u7684\u8282\u70B9</span>
  map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u5B58\u54C8\u5E0C\u8868\u4E2D\u8868\u793A\u8282\u70B9\u7684\u6620\u5C04\u5173\u7CFB</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u8BE5\u8282\u70B9\u5B58\u5728\u4E0B\u4E00\u4E2A\u8282\u70B9\u65F6</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E3A\u62F7\u8D1D\u8282\u70B9\u521B\u5EFA\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u62F7\u8D1D</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// \u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF08\u7528\u4E8E\u5FAA\u73AF\uFF09</span>
    newNode <span class="token operator">=</span> newNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// \u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF08\u7528\u4E8E\u5FAA\u73AF\uFF09</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u540C\u7406\u4FDD\u5B58\u54C8\u5E0C\u8868\u4E2D\u8868\u793A\u8282\u70B9\u7684\u6620\u5C04\u5173\u7CFB</span>
  <span class="token punctuation">}</span>

  node <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// \u91CD\u7F6E\u8282\u70B9</span>
  newNode <span class="token operator">=</span> newHead<span class="token punctuation">;</span> <span class="token comment">// \u91CD\u7F6E\u8282\u70B9</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>newNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u91CD\u65B0\u8D70\u4E00\u904D\u5FAA\u73AF\u62FFrandom\u7684\u5F15\u7528</span>
    newNode<span class="token punctuation">.</span>random <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>random<span class="token punctuation">)</span><span class="token punctuation">;</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    newNode <span class="token operator">=</span> newNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,7)]))}var m=s(o,[["render",e]]);export{d as __pageData,m as default};
