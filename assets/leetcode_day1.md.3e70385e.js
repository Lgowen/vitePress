import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u6808\u4E0E\u961F\u5217 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day1.md","lastUpdated":1731465675962}',o={};function c(e,n,u,k,l,i){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u6808\u4E0E\u961F\u5217" tabindex="-1">\u6808\u4E0E\u961F\u5217 <a class="header-anchor" href="#\u6808\u4E0E\u961F\u5217" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 30. \u5305\u542B min \u51FD\u6570\u7684\u6808(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u5B9A\u4E49\u6808\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u8BF7\u5728\u8BE5\u7C7B\u578B\u4E2D\u5B9E\u73B0\u4E00\u4E2A\u80FD\u591F\u5F97\u5230\u6808\u7684\u6700\u5C0F\u5143\u7D20\u7684 min \u51FD\u6570\u5728\u8BE5\u6808\u4E2D\uFF0C</span>
<span class="token comment">// \u8C03\u7528 min\u3001push \u53CA pop \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u662F O(1)\u3002</span>

<span class="token comment">// MinStack minStack = new MinStack();</span>
<span class="token comment">// minStack.push(-2);</span>
<span class="token comment">// minStack.push(0);</span>
<span class="token comment">// minStack.push(-3);</span>
<span class="token comment">// minStack.min();   --&gt; \u8FD4\u56DE -3.</span>
<span class="token comment">// minStack.pop();</span>
<span class="token comment">// minStack.top();      --&gt; \u8FD4\u56DE 0.</span>
<span class="token comment">// minStack.min();   --&gt; \u8FD4\u56DE -2.</span>

<span class="token comment">/**
 * initialize your data structure here.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">MinStack</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u6700\u5C0F\u503C\u7684stack</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mainStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u6574\u4F53\u7684stack</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {number} x
 * @return {void}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mainStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F80\u4E3B\u6808\u63A8\u5165\u503C</span>
  <span class="token keyword">const</span> minStackLen <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>minStackLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u5305\u542B\u6BCF\u8F6E\u6700\u5C0F\u503C\u7684\u6808\u4E2D\u662F\u5426\u6709\u503C\uFF0C\u6CA1\u6709\u5219\u76F4\u63A5\u63A8\u5165</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> minStackLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6709\u5219\u53D6\u6700\u5C0F\u503C\u4E0E\u63A8\u5165\u503C\u8FDB\u884C\u6BD4\u8F83\uFF0C\u518D\u63A8\u5165\u5176\u5C0F\u7684\u90A3\u4E00\u4E2A</span>
    <span class="token keyword">const</span> minData <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">[</span>lastIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>minData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {void}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u51FA\u6808</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mainStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u51FA\u6808</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">top</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D6\u6808\u9876</span>
  <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mainStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mainStack<span class="token punctuation">[</span>lastIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">min</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// minStack\u7684\u6808\u9876\u503C\u4E3A\u6BCF\u4E00\u8F6E\u6700\u5C0F\u503C\uFF0C\u6545\u53D6\u5176\u503C</span>
  <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">[</span>lastIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */</span>
</code></pre></div><p><strong>2. \u5251\u6307 Offer 09. \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217\u3002\u961F\u5217\u7684\u58F0\u660E\u5982\u4E0B\uFF0C\u8BF7\u5B9E\u73B0\u5B83\u7684\u4E24\u4E2A\u51FD\u6570 appendTail \u548C deleteHead \uFF0C</span>
<span class="token comment">// \u5206\u522B\u5B8C\u6210\u5728\u961F\u5217\u5C3E\u90E8\u63D2\u5165\u6574\u6570\u548C\u5728\u961F\u5217\u5934\u90E8\u5220\u9664\u6574\u6570\u7684\u529F\u80FD\u3002</span>
<span class="token comment">// (\u82E5\u961F\u5217\u4E2D\u6CA1\u6709\u5143\u7D20\uFF0CdeleteHead \u64CD\u4F5C\u8FD4\u56DE -1 )</span>

<span class="token comment">// \u8F93\u5165\uFF1A</span>
<span class="token comment">// [&quot;CQueue&quot;,&quot;appendTail&quot;,&quot;deleteHead&quot;,&quot;deleteHead&quot;]</span>
<span class="token comment">// [[],[3],[],[]]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A[null,null,3,-1]</span>

<span class="token keyword">var</span> <span class="token function-variable function">CQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>enterStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>outerStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {number} value
 * @return {void}
 */</span>
<span class="token class-name">CQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">appendTail</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5165\u961F\u6808</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">CQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteHead</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>outerStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5047\u5982\u51FA\u961F\u6808\u4E2D\u5B58\u5728\u6570\u636E\uFF0C\u5219\u76F4\u63A5pop</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outerStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5047\u5982\u51FA\u961F\u6808\u4E2D\u6CA1\u6709\u6570\u636E\uFF0C\u5219\u5C06\u5148\u8FDB\u5165\u5165\u961F\u6808\u7684\u6570\u636E\u653E\u5165\u51FA\u961F\u6808</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> outerData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>outerStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>outerData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u653E\u5B8C\u540E\uFF08\u4E5F\u6709\u53EF\u80FD\u5165\u961F\u6808\u4E2D\u65E0\u6570\u636E\uFF09</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>outerStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u51FA\u961F\u6808\u4E2D\u65E0\u6570\u636E</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outerStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */</span>
</code></pre></div>`,5)]))}var d=s(o,[["render",c]]);export{m as __pageData,d as default};
