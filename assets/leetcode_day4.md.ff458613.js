import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const i='{"title":"\u67E5\u627E\u7B97\u6CD5 #","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/day4.md","lastUpdated":1731465675962}',o={};function e(c,n,l,u,k,r){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u67E5\u627E\u7B97\u6CD5" tabindex="-1">\u67E5\u627E\u7B97\u6CD5 <a class="header-anchor" href="#\u67E5\u627E\u7B97\u6CD5" aria-hidden="true">#</a></h1><p><strong>1. \u5251\u6307 Offer 03. \u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u627E\u51FA\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57\u3002</span>

<span class="token comment">// \u5728\u4E00\u4E2A\u957F\u5EA6\u4E3A n \u7684\u6570\u7EC4 nums \u91CC\u7684\u6240\u6709\u6570\u5B57\u90FD\u5728 0\uFF5En-1 \u7684\u8303\u56F4\u5185\u3002\u6570\u7EC4\u4E2D\u67D0\u4E9B\u6570\u5B57\u662F\u91CD\u590D\u7684\uFF0C\u4F46\u4E0D\u77E5\u9053\u6709\u51E0\u4E2A\u6570\u5B57\u91CD\u590D\u4E86\uFF0C\u4E5F\u4E0D\u77E5\u9053\u6BCF\u4E2A\u6570\u5B57\u91CD\u590D\u4E86\u51E0\u6B21\u3002\u8BF7\u627E\u51FA\u6570\u7EC4\u4E2D\u4EFB\u610F\u4E00\u4E2A\u91CD\u590D\u7684\u6570\u5B57\u3002</span>

<span class="token comment">// \u793A\u4F8B 1\uFF1A</span>

<span class="token comment">// \u8F93\u5165\uFF1A</span>
<span class="token comment">// [2, 3, 1, 0, 2, 5, 3]</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2 \u6216 3</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRepeatNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u54C8\u5E0C\u8868</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mapNum <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4ECE\u54C8\u5E0C\u8868\u53D6\u503C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mapNum <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> mapNum<span class="token punctuation">;</span> <span class="token comment">// \u5047\u5982\u503C\u5B58\u5728\u5219\u76F4\u63A5\u8FD4\u56DE</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u503C\u653E\u5165\u54C8\u5E0C\u8868\u5EFA\u8BAE\u6620\u5C04\u5173\u7CFB</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. \u5251\u6307 Offer 53 - I. \u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u6570\u5B57 I(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u7EDF\u8BA1\u4E00\u4E2A\u6570\u5B57\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u51FA\u73B0\u7684\u6B21\u6570\u3002</span>

<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: nums = [5,7,7,8,8,10], target = 8</span>
<span class="token comment">// \u8F93\u51FA: 2</span>
<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: nums = [5,7,7,8,8,10], target = 6</span>
<span class="token comment">// \u8F93\u51FA: 0</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */</span>
<span class="token comment">// \u66B4\u529B\u54C8\u5E0C\u89E3\u6CD5</span>
<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u5BF9\u8C61\u4FDD\u5B58\u6570\u636E\u4EE5\u505A\u8BA1\u6570</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mapNum <span class="token operator">=</span> map<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
    map<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> mapNum <span class="token operator">?</span> mapNum <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> map<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */</span>
<span class="token comment">// \u4E8C\u5206\u52A0\u54C8\u5E0C</span>
<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u627E\u4E2D\u95F4\u4F4D\u7F6E</span>
  <span class="token keyword">const</span> middleNum <span class="token operator">=</span> nums<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u4E2D\u95F4\u503C</span>
  target <span class="token operator">&gt;</span> middleNum <span class="token operator">?</span> <span class="token string">&quot;\u5047\u5982\u76EE\u6807\u503C\u5927\u4E8E\u4E2D\u95F4\u503C\u5219\u76EE\u6807\u503C\u5728\u4E2D\u95F4\u503C\u53F3\u8FB9&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u53CD\u4E4B\u5DE6\u8FB9&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u91CC\u505A\u9012\u5F52\u67E5\u627Eindex</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target <span class="token operator">||</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u8FB9\u754C\u5904\u7406 \u5047\u5982\u6700\u5C0F\u503C\u90FD\u5927\u4E8Etarget\u503C \u6216\u8005 \u6700\u5927\u503C\u90FD\u5C0F\u4E8Etarget\u503C\u5219\u65E0\u89E3</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// \u5BFB\u627E\u7B2C\u4E00\u4E2A\u51FA\u73B0\u7684target</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// \u5BFB\u627E\u6700\u540E\u4E00\u4E2A\u51FA\u73B0\u7684target</span>

  <span class="token keyword">return</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u8BA1\u7B97\u51FA\u73B0\u7684\u6B21\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3. \u5251\u6307 Offer 53 - II. 0 \uFF5E n-1 \u4E2D\u7F3A\u5931\u7684\u6570\u5B57(easy)</strong></p><div class="language-javascript"><pre><code><span class="token comment">// \u4E00\u4E2A\u957F\u5EA6\u4E3An-1\u7684\u9012\u589E\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u6570\u5B57\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u6570\u5B57\u90FD\u5728\u8303\u56F40\uFF5En-1\u4E4B\u5185\u3002\u5728\u8303\u56F40\uFF5En-1\u5185\u7684n\u4E2A\u6570\u5B57\u4E2D\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u6570\u5B57\u4E0D\u5728\u8BE5\u6570\u7EC4\u4E2D\uFF0C\u8BF7\u627E\u51FA\u8FD9\u4E2A\u6570\u5B57\u3002</span>
<span class="token comment">//</span>
<span class="token comment">// \u793A\u4F8B 1:</span>

<span class="token comment">// \u8F93\u5165: [0,1,3]</span>
<span class="token comment">// \u8F93\u51FA: 2</span>

<span class="token comment">// \u793A\u4F8B 2:</span>

<span class="token comment">// \u8F93\u5165: [0,1,2,3,4,5,6,7,9]</span>
<span class="token comment">// \u8F93\u51FA: 8</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">missingNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// [0, 1, 3]</span>
  <span class="token comment">// 0 2 Math.floor((0 + 2) / 2) = 1 middle:1 === nums[middle]:1 left++ left = 1</span>
  <span class="token comment">// 1 2 Math.floor((1 + 2) / 2) = 1 middle:1 === nums[middle]:1 left++ left = 2</span>
  <span class="token comment">// 2 2 Math.floor((2 + 2) / 2) = 2 middle:2 !== nums[middle]:3 right-- right = 1</span>
  <span class="token comment">// \u4E0D\u7B26\u5408left &lt;= right \u8DF3\u51FA\u5FAA\u73AF</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">===</span> nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u76F8\u7B49\u65F6\u53EF\u7406\u89E3\u4E3A\u8BE5\u503C\u5DE6\u8FB9\u7684\u503C\u90FD\u662F\u4E00\u4E00\u4E0E\u7D22\u5F15\u503C\u5BF9\u5E94\u7684 \u5219\u7F3A\u5931\u7684\u503C\u5E94\u8BE5\u5728\u53F3\u8FB9</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u7B49\u65F6\u53EF\u7406\u89E3\u4E3A\u8BE5\u503C\u6216\u8BE5\u503C\u5DE6\u8FB9\u7684\u503C\u662F\u7F3A\u5931\u7684 \u56E0\u4E3A\u4E00\u65E6\u51FA\u73B0\u67D0\u4E2A\u503C\u4E0E\u7D22\u5F15\u4E0D\u76F8\u7B49 \u5219\u540E\u9762\u7684\u503C\u80AF\u5B9A\u4E5F\u4E0D\u4F1A\u76F8\u7B49</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> left<span class="token punctuation">;</span> <span class="token comment">// left &gt; right \u65F6\u8DF3\u51FA\u5FAA\u73AF left\u5BF9\u5E94\u7D22\u5F15\u4E3A\u7F3A\u5931\u7684\u503C \u8FD9\u4E2A\u60C5\u51B5\u4E0Bleft\u5DE6\u8FB9\u7684\u503C\u5E94\u8BE5\u90FD\u662F\u5B8C\u6574\u7684</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,7)]))}var d=s(o,[["render",e]]);export{i as __pageData,d as default};
