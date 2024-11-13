import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"\u968F\u624B\u8BB0 #","description":"","frontmatter":{},"headers":[],"relativePath":"study/day1.md","lastUpdated":1731465675970}',o={};function c(e,n,u,l,k,i){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u968F\u624B\u8BB0" tabindex="-1">\u968F\u624B\u8BB0 <a class="header-anchor" href="#\u968F\u624B\u8BB0" aria-hidden="true">#</a></h1><p><strong>\u5168\u6392\u5217</strong></p><div class="language-js"><pre><code><span class="token comment">// \u8F93\u5165 [[&#39;a1&#39;, &#39;a2&#39;], [&#39;b1&#39;, &#39;b2&#39;], [&#39;c1&#39;, &#39;c2&#39;]]</span>
<span class="token comment">// \u8F93\u51FA [&#39;a1b1c1&#39;, &#39;a1b1c2&#39;, &#39;a1b2c1&#39;, &#39;a1b2c2&#39;, &#39;a2b1c1&#39;, &#39;a2b1c2&#39;, &#39;a2b2c1&#39;, &#39;a2b2c2&#39; ]</span>

<span class="token keyword">function</span> <span class="token function">fullArrangement</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// \u6570\u7EC4\u957F\u5EA6</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5B58\u653E\u7ED3\u679C</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5316merge\u7684\u4F4D\u7F6E</span>

  <span class="token keyword">function</span> <span class="token function">mergeArray</span><span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span> arr2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      arr2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item1 <span class="token operator">+</span> item2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> newArr<span class="token punctuation">;</span> <span class="token comment">// \u6BCF\u6B21\u4EE5\u66F4\u65B0res\u7684\u503C</span>
  <span class="token punctuation">}</span>

  <span class="token function">mergeArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5316</span>

  <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mergeArray</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fullArrangement</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&quot;a1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;b1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;c1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">permute</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u653E\u7ED3\u679C\u6570\u7EC4</span>
    <span class="token keyword">const</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u653E\u5F53\u524D\u8DEF\u5F84</span>
    

    <span class="token keyword">function</span> <span class="token function">findTrack</span><span class="token punctuation">(</span><span class="token parameter">track</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">===</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5047\u5982\u5F53\u524D\u8DEF\u5F84\u7684\u957F\u5EA6\u4E0E\u539F\u6570\u7EC4\u957F\u5EA6\u76F8\u540C\u65F6\u5219\u5F53\u524D\u8DEF\u5F84\u5BFB\u627E\u5B8C\u6BD5 \u653E\u5165\u7ED3\u679C\u6570\u7EC4\u4E2D</span>
            <span class="token comment">// \u7528slice\u662F\u4F7F\u7528\u526F\u672C\u4E0D\u5F71\u54CD\u5F15\u7528\u503C \u4E0D\u7136\u7ED3\u679C\u4E2D\u7684\u8DEF\u5F84\u4F1A\u4E00\u76F4\u6539\u53D8\u4E3A\u76F8\u540C\u7ED3\u679C</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token comment">// \u5F53\u524D\u8DEF\u5F84\u4E2D\u542B\u6709\u5F53\u524D\u6570\u5B57\u65F6\u5219\u8DF3\u8FC7\u672C\u6B21\u5FAA\u73AF</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>

            track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u5411\u5F53\u524D\u8DEF\u5F84\u63A8\u5165\u5F53\u524D\u6570\u5B57</span>

            <span class="token function">findTrack</span><span class="token punctuation">(</span>track<span class="token punctuation">)</span> <span class="token comment">// \u5BF9\u5F53\u524D\u8DEF\u5F84\u8FDB\u884C\u56DE\u6EAF \u5BFB\u627E\u4E0B\u4E00\u4E2A\u503C</span>

            track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5BFB\u627E\u5B8C\u540E\u628A\u503C\u5F39\u51FA</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">findTrack</span><span class="token punctuation">(</span>track<span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5BFB\u627E\u9A7C\u5CF0\u6570\u5B57</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">findHumpNum</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// \u9632\u6B62\u8D8A\u754C</span>
    
    <span class="token keyword">const</span> middle <span class="token operator">=</span> arr<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span>
    <span class="token keyword">const</span> leftNum <span class="token operator">=</span> arr<span class="token punctuation">[</span>middleIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> rightNum <span class="token operator">=</span> arr<span class="token punctuation">[</span>middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">&gt;</span> leftNum <span class="token operator">&amp;&amp;</span> middle <span class="token operator">&gt;</span> rightNum<span class="token punctuation">)</span> <span class="token keyword">return</span> middle

    <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">&gt;</span> leftNum <span class="token operator">&amp;&amp;</span> middle <span class="token operator">&lt;</span> rightNum<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">findHumpNum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">&lt;</span> leftNum <span class="token operator">&amp;&amp;</span> middle <span class="token operator">&gt;</span> rightNum<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">findHumpNum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> middleIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(log(n))</span>
<span class="token comment">// \u7A7A\u95F4\u590D\u6742\u5EA6: O(1)</span>


<span class="token function">findHumpNum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>

</code></pre></div><p><strong>\u5408\u5E76\u4E24\u4E2A\u6570\u7EC4</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">mergeArray</span><span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span> arr2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u521D\u59CB\u5316\u6307\u9488</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u521D\u59CB\u5316\u6307\u9488</span>
    <span class="token keyword">const</span> len1 <span class="token operator">=</span> arr1<span class="token punctuation">.</span>length <span class="token comment">// \u83B7\u53D6\u6570\u7EC4\u957F\u5EA6</span>
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> arr2<span class="token punctuation">.</span>length <span class="token comment">// \u83B7\u53D6\u6570\u7EC4\u957F\u5EA6</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u521D\u59CB\u5316\u7ED3\u679C\u6570\u7EC4</span>
    arr1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token comment">// \u6392\u5E8F \u65F6\u95F4\u590D\u6742\u5EA6O(nlog(n))</span>
    arr2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token comment">// \u6392\u5E8F \u65F6\u95F4\u590D\u6742\u5EA6O(mlog(m))</span>

    <span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(M + N)</span>
    <span class="token comment">// \u5F53\u4E24\u4E2A\u6307\u9488\u90FD\u6307\u5411\u7A7A\u65F6\u5FAA\u73AF\u7ED3\u675F</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> len1 <span class="token operator">||</span> j <span class="token operator">&lt;</span> len2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> left <span class="token operator">=</span> arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">const</span> right <span class="token operator">=</span> arr2<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arr2<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u5047\u5982\u67D0\u4E2A\u6307\u9488\u6307\u5411\u7A7A\u65F6\uFF0C\u6570\u7EC4\u5C06\u53E6\u5916\u4E00\u4E2A\u6570\u7EC4(\u5305\u542B\u5F53\u524D\u6307\u9488\u6307\u5411\u7684\u6570\uFF0C\u4EE5\u53CA\u5269\u4E0B\u7684\u6570\u5B57\u63A8\u5165\u6570\u7EC4)</span>
            <span class="token keyword">return</span> arr
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arr1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> arr
        <span class="token punctuation">}</span>

        <span class="token comment">// \u5224\u65AD\u4E24\u4E2A\u6307\u9488\u6307\u5411\u503C\u7684\u5927\u5C0F\u6765\u5224\u65AD\u8981\u5148\u63A8\u5165\u54EA\u4E2A\u6570\u5B57</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>
            j<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5F53\u4E24\u4E2A\u6570\u76F8\u540C\u65F6\u968F\u4FBF\u63A8\u5165\u4E00\u4E2A \u4E24\u4E2A\u6307\u9488\u540C\u65F6\u6307\u5411\u4E0B\u4E00\u4E2A</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
            i<span class="token operator">++</span>
            j<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token comment">// \u65F6\u95F4\u590D\u6742\u5EA6: O(nlog(n))</span>
<span class="token comment">// \u7A7A\u95F4\u590D\u6742\u5EA6: O(n)</span>

<span class="token function">mergeArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [0, 1, 2, 2, 2, 5, 5, 100]</span>

</code></pre></div><p><strong>\u67EF\u91CC\u5316\u51FD\u6570</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">curry</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> length <span class="token operator">=</span> fn<span class="token punctuation">.</span>length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">_curry</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">// \u5224\u65AD\u5269\u4F59\u53C2\u6570\u7684\u957F\u5EA6\u662F\u5426\u4E0Efn\u51FD\u6570\u6240\u9700\u8981\u53C2\u6570\u7684\u957F\u5EA6\u76F8\u7B49 </span>
        <span class="token comment">// \u76F8\u7B49\u76F4\u63A5\u8FD4\u56DEfn\u51FD\u6570\u8C03\u7528\u7ED3\u679C</span>
        <span class="token comment">// \u5426\u5219\u8FD4\u56DE\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE_curry\u51FD\u6570\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u4E3A\u5408\u5E76\u5F53\u524D\u4E0E\u4E0A\u4E00\u6B21\u7684\u5269\u4F59\u53C2\u6570</span>
        <span class="token keyword">return</span> args<span class="token punctuation">.</span>length <span class="token operator">===</span> length <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">_curry</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>arg<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u9632\u6296</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
            timer <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>

        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u8282\u6D41</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7B80\u6613\u7248\u672C</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> preTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> curTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>curTime <span class="token operator">-</span> preTime <span class="token operator">&gt;</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            preTime <span class="token operator">=</span> curTime
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65F6\u95F4\u6233 + \u5B9A\u65F6\u5668 \u7248\u672C \u4FDD\u8BC1\u6709\u5934\u6709\u5C3E\u7684\u6267\u884C</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> preTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> curTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>curTime <span class="token operator">-</span> preTime <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            preTime <span class="token operator">=</span> curTime
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
                timer <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            preTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            timer <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div><p><strong>\u6DF1\u62F7\u8D1D</strong></p><div class="language-js"><pre><code>
<span class="token comment">// \u7528WeakMap\u800C\u4E0D\u662FMap\u7684\u539F\u56E0</span>
<span class="token comment">// Map\u662F\u5F3A\u5F15\u7528</span>
<span class="token comment">// WeakMap\u662F\u5F31\u5F15\u7528</span>
<span class="token comment">// \u88AB\u5F31\u5F15\u7528\u7684\u5BF9\u8C61\u53EF\u4EE5\u5728\u4EFB\u4F55\u65F6\u5019\u88AB\u56DE\u6536\uFF0C\u800C\u5BF9\u4E8E\u5F3A\u5F15\u7528\u6765\u8BF4\uFF0C\u53EA\u8981\u8FD9\u4E2A\u5F3A\u5F15\u7528\u8FD8\u5728\uFF0C\u90A3\u4E48\u5BF9\u8C61\u65E0\u6CD5\u88AB\u56DE\u6536\u3002\u62FF\u4E0A\u9762\u7684\u4F8B\u5B50\u8BF4\uFF0Cmap \u548C a\u4E00\u76F4\u662F\u5F3A\u5F15\u7528\u7684\u5173\u7CFB\uFF0C \u5728\u7A0B\u5E8F\u7ED3\u675F\u4E4B\u524D\uFF0Ca \u6240\u5360\u7684\u5185\u5B58\u7A7A\u95F4\u4E00\u76F4\u4E0D\u4F1A\u88AB\u91CA\u653E\u3002</span>

<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> target <span class="token comment">// \u89E3\u51B3\u5FAA\u73AF\u5F15\u7528 \u5047\u5982\u4FDD\u5B58\u8FC7\u4E86\u5C31\u76F4\u63A5\u7528\u5C31\u884C\u4E86 \u653E\u7F6E\u6808\u6EA2\u51FA</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> target

    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> newTarget <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// \u5224\u65ADtarget\u662F\u4E00\u4E2A\u5BF9\u8C61\u8FD8\u662F\u6570\u7EC4</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newTarget<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> map<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> newTarget
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2Anew</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lgowen&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u91CC\u7684Person\u53EF\u4EE5\u5F53\u4F5C\u4EE5\u4E0B\u51FD\u6570\u7684Fn</span>

<span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token parameter">Fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">Fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u8BE5\u6784\u9020\u51FD\u6570\u6267\u884C\u7684\u8FD4\u56DE\u7ED3\u679C</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> res <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token operator">?</span> res <span class="token operator">:</span> obj <span class="token comment">// \u5982\u679C\u6709\u8FD4\u56DE\u7ED3\u679C\u4E14\u662F\u5BF9\u8C61\u7684\u8BDD\u5C31\u7528\u51FD\u6570\u8FD4\u56DE\u503C \u5426\u5219\u9ED8\u8BA4\u8FD4\u56DE\u5185\u90E8\u751F\u6210\u7684\u5BF9\u8C61</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2Ainstanceof</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5224\u65ADPerson\u7684\u539F\u578B\u662F\u5426\u5728person\u7684\u539F\u578B\u94FE\u4E0A</span>

<span class="token comment">// console.log(person instanceof Person) // true</span>

<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> Constructor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> proto1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6obj\u7684\u539F\u578B</span>

    <span class="token keyword">const</span> proto2 <span class="token operator">=</span> <span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype <span class="token comment">// \u83B7\u53D6constructor\u7684\u539F\u578B</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>proto1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>proto1 <span class="token operator">===</span> proto2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            proto1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto1<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>


</code></pre></div><p><strong>\u627E\u5230\u6811\u5F62\u7ED3\u6784\u4E2D\u67D0\u4E2A\u8282\u70B9\u5E95\u4E0B\u7684\u6240\u6709\u5B69\u5B50\u8282\u70B9</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">tree<span class="token punctuation">,</span> idValue<span class="token punctuation">,</span> idKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token function">findRoot</span><span class="token punctuation">(</span>tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> idValue<span class="token punctuation">,</span> idKey<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;resss&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token comment">// \u9996\u5148\u9700\u8981\u627E\u5230\u67D0\u4E2A\u8282\u70B9</span>
    <span class="token comment">// \u5224\u65AD\u8BE5\u8282\u70B9\u662F\u5426\u6709children</span>
    <span class="token comment">// \u5047\u5982\u6709\u5219\u627E\u51FA\u8BE5\u8282\u70B9\u4E0B\u7684\u6240\u6709children</span>
    <span class="token comment">// \u5426\u5219null</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u627E\u5230\u67D0\u4E2A\u8282\u70B9</span>
<span class="token keyword">function</span> <span class="token function">findRoot</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> idValue<span class="token punctuation">,</span> idKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span> <span class="token comment">// </span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> head <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">[</span>idKey<span class="token punctuation">]</span> <span class="token operator">===</span> idValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BE5keyNode\u5E95\u4E0B\u6240\u6709children\u5219\u4E3A\u6211\u8981\u7684\u7ED3\u679C</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">.</span>children <span class="token operator">||</span> head<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
            <span class="token keyword">return</span> <span class="token function">deep</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> idKey<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> head<span class="token punctuation">.</span>children<span class="token operator">?.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u627E\u5230\u67D0\u4E2A\u8282\u70B9\u5E95\u4E0B\u7684\u6240\u6709children</span>
<span class="token keyword">function</span> <span class="token function">deep</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> idKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span> <span class="token comment">// </span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> head <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        flag <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">[</span>idKey<span class="token punctuation">]</span><span class="token punctuation">)</span>

        flag <span class="token operator">=</span> <span class="token boolean">true</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> head<span class="token punctuation">.</span>children<span class="token operator">?.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>


<span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;5&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><p><strong>\u5199\u4E00\u4E2A\u51FD\u6570\u89E3\u6790a.b.c\u7684\u503C</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Parse simple path.
 * \u628A\u4E00\u4E2A\u5F62\u5982&#39;data.a.b.c&#39;\u7684\u5B57\u7B26\u4E32\u8DEF\u5F84\u6240\u8868\u793A\u7684\u503C\uFF0C\u4ECE\u771F\u5B9E\u7684data\u5BF9\u8C61\u4E2D\u53D6\u51FA\u6765
 * \u4F8B\u5982\uFF1A
 * data = {a:{b:{c:2}}}
 * parsePath(&#39;a.b.c&#39;)(data)  // 2
 */</span>
<span class="token keyword">const</span> bailRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^\\w.$]</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parsePath</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bailRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> segments <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> segments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">)</span> <span class="token keyword">return</span>
      obj <span class="token operator">=</span> obj<span class="token punctuation">[</span>segments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> obj
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u56FE\u7247\u61D2\u52A0\u8F7D\u4F18\u5316</strong></p><div class="language-html"><pre><code>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">img</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./docs/public/lake.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// const viewportHeight = document.documentElement.clientHeight</span>
        <span class="token comment">// let currentIndex = 0</span>

        <span class="token comment">// function loadImg() {</span>
        <span class="token comment">//     const imgs = document.querySelectorAll(&#39;.img&#39;)</span>
        <span class="token comment">//     const scrollTop = document.documentElement.scrollTop // \u83B7\u53D6\u6EDA\u52A8\u6761\u9AD8\u5EA6</span>

        <span class="token comment">//     for (let i = currentIndex; i &lt; imgs.length; i++) {</span>

        <span class="token comment">//         const imgRect = imgs[i].getBoundingClientRect()</span>
        <span class="token comment">//         console.log(imgRect.top, &#39;sass&#39;)</span>
        <span class="token comment">//         // \u5047\u5982\u5C4F\u5E55\u7A97\u53E3\u9AD8\u5EA6 + \u6EDA\u52A8\u6761\u9AD8\u5EA6 &gt;= \u56FE\u7247\u5143\u7D20\u4E0E\u9875\u9762\u9876\u90E8\u7684\u8DDD\u79BB (\u4E5F\u5C31\u662F\u8BF4\u56FE\u7247\u5728\u53EF\u89C6\u533A\u57DF\u8303\u56F4\u5185\u7684\u65F6\u5019)</span>
        <span class="token comment">//         if (imgRect.top &lt; viewportHeight &amp;&amp; imgRect.bottom &gt;= 0) {</span>
        <span class="token comment">//             imgs[i].src = imgs[i].getAttribute(&#39;data-src&#39;)</span>
        <span class="token comment">//             imgs[i].removeAttribute(&#39;data-src&#39;)</span>
        <span class="token comment">//             currentIndex++</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>

        <span class="token comment">// window.addEventListener(&#39;scroll&#39;, throttle(loadImg, 200))</span>

        <span class="token comment">// function throttle(fn, delay) {</span>
        <span class="token comment">//     let preTime = Date.now()</span>
        <span class="token comment">//     let timer = null</span>

        <span class="token comment">//     return (...args) =&gt; {</span>
        <span class="token comment">//         let curTime = Date.now()</span>
        <span class="token comment">//         clearTimeout(timer)</span>

        <span class="token comment">//         if (curTime - preTime &gt;= delay) {</span>
        <span class="token comment">//             preTime = curTime</span>
        <span class="token comment">//             fn.apply(this, args)</span>
        <span class="token comment">//             clearTimeout(timer)</span>
        <span class="token comment">//             return</span>
        <span class="token comment">//         }</span>

        <span class="token comment">//         timer = setTimeout(() =&gt; {</span>
        <span class="token comment">//             preTime = Date.now()</span>
        <span class="token comment">//             fn.apply(this, args)</span>
        <span class="token comment">//             timer = null</span>
        <span class="token comment">//         }, delay)</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>

        <span class="token keyword">const</span> io <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111111</span><span class="token punctuation">)</span>
                    <span class="token keyword">const</span> img <span class="token operator">=</span> entry<span class="token punctuation">.</span>target <span class="token comment">// \u83B7\u53D6\u6E90\u5BF9\u8C61</span>
                    <span class="token keyword">const</span> src <span class="token operator">=</span> img<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src <span class="token comment">// \u83B7\u53D6data-src\u5C5E\u6027</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>src<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
                        img<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-src&#39;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u4E00\u6B65\u8BB0\u5F97\u8981\u53D6\u6D88\u89C2\u5BDF \u5426\u5219\u52A0\u8F7D\u5B8C\u8D44\u6E90\u540E\u4F1A\u4E00\u76F4\u91CD\u590D\u8D70\u903B\u8F91(\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5F00\u9500)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span> imgs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.img&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u6240\u6709imgDOM\u5143\u7D20</span>
        
        <span class="token comment">// \u89C2\u5BDF\u6BCF\u4E00\u4E2AimgDOM\u5143\u7D20\u7684\u89C6\u56FE\u4F4D\u7F6E</span>
        imgs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">img</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            io<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p><strong>\u6570\u7EC4\u6241\u5E73\u5316</strong></p><div class="language-js"><pre><code>
<span class="token keyword">const</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">function</span> <span class="token function">flat</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">flat</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">flatten</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>


<span class="token keyword">const</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pre<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">flatten</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token operator">:</span> cur<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre></div><p><strong>\u5B9E\u73B0x\u7684n\u6B21\u65B9</strong></p><div class="language-js"><pre><code>

<span class="token keyword">function</span> <span class="token function">power</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>

    <span class="token keyword">const</span> middle <span class="token operator">=</span> <span class="token function">power</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u53D6\u4E00\u534A\u7684\u503C</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> middle <span class="token operator">*</span> middle <span class="token operator">*</span> x <span class="token comment">// \u5947\u6570</span>

    <span class="token keyword">return</span> middle <span class="token operator">*</span> middle <span class="token comment">// \u5076\u6570</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5B9E\u73B0add(1,2)(3)</strong></p><div class="language-js"><pre><code>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">let</span> arr

    <span class="token keyword">function</span> <span class="token function">_add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>arg<span class="token punctuation">]</span>
        <span class="token keyword">return</span> _add
    <span class="token punctuation">}</span>


    _add<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// return _add()</span>
        <span class="token comment">// console.log(123)</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> pre <span class="token operator">+</span> cur
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> _add
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token comment">// 3</span>


</code></pre></div><p><strong>\u6570\u7EC4\u8F6C\u6811</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">arrToTree</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">let</span> res
    
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> item <span class="token comment">// \u5B58\u5F15\u7528\u503C</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> parent <span class="token operator">=</span> map<span class="token punctuation">[</span>item<span class="token punctuation">.</span>pid<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> item <span class="token comment">// \u8FD9\u662Froot\u8282\u70B9</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>


</code></pre></div><p><strong>\u5224\u65AD\u4E00\u4E2A\u6570\u7EC4\u662F\u4E0D\u662F\u53E6\u4E00\u4E2A\u6570\u7EC4\u7684\u5B50\u4E32</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">judgeSameNum</span><span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span> arr2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">let</span> minArr
    <span class="token keyword">let</span> maxArr
    <span class="token keyword">let</span> minLength

    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxArr <span class="token operator">=</span> arr1
        minArr <span class="token operator">=</span> arr2
        minLength <span class="token operator">=</span> arr2<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        maxArr <span class="token operator">=</span> arr2
        minArr <span class="token operator">=</span> arr1
        minLength <span class="token operator">=</span> arr1<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>minArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> maxArr<span class="token punctuation">[</span>maxArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> minArr<span class="token punctuation">[</span>minLength <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> maxArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u8FB9\u754C\u6761\u4EF6\u5224\u65AD</span>
    
    <span class="token keyword">const</span> leftNum <span class="token operator">=</span> minArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>

    <span class="token keyword">let</span> index <span class="token operator">=</span> maxArr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">===</span> leftNum<span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> maxArr<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> minArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>maxArr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">===</span> minArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index<span class="token operator">++</span>
            j<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>

<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">judgeSameNum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


</code></pre></div><p><strong>\u4E0B\u5212\u7EBF\u8F6C\u5C0F\u9A7C\u5CF0</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">toHump</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\_(\\w)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">all<span class="token punctuation">,</span> letter</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>all<span class="token punctuation">,</span> letter<span class="token punctuation">)</span>
        <span class="token keyword">return</span> letter<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;css_style_sheet&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toHump</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre></div><p><strong>\u5C0F\u9A7C\u5CF0\u8F6C\u4E0B\u5212\u7EBF</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">toLine</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([A-Z])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;_$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;cssStyleSheet&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toLine</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2Acall</strong></p><div class="language-js"><pre><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;lgowen&#39;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;cherry&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u51FD\u6570\u53C2\u6570</span>

    context <span class="token operator">=</span> context <span class="token operator">||</span> window <span class="token comment">// \u83B7\u53D6\u8C03\u7528\u5BF9\u8C61</span>

    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">// this\u6307\u5411\u8BE5\u51FD\u6570</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u51FD\u6570</span>

    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn <span class="token comment">// \u6267\u884C\u5B8C\u5220\u9664\u51FD\u6570</span>

    <span class="token keyword">return</span> res <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C</span>
<span class="token punctuation">}</span>

<span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>


</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2Aapply</strong></p><div class="language-js"><pre><code>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    context <span class="token operator">=</span> context <span class="token operator">||</span> window

    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>

    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn 

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2Abind</strong></p><div class="language-js"><pre><code>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u53C2\u6570 bind\u7684\u53C2\u6570</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u91CC\u7684arguments\u662FFn\u7684\u53C2\u6570</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Fn</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u5224\u65AD\u8FD4\u56DE\u7684\u51FD\u6570this\u6307\u5411\u662F\u7528new\u8C03\u7528\u7684\u8FD8\u662F\u76F4\u63A5\u6267\u884C\u7684 \u4F20\u5165\u7684\u53C2\u6570\u8FDB\u884C\u62FC\u63A5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2AeventEmitter</strong></p><div class="language-js"><pre><code>

<span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> effects <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u9632\u6B62\u91CD\u590D\u76D1\u542C\u8FDB\u5165\u6B7B\u5FAA\u73AF</span>
        effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effect</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">effect</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> effects <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>effects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>fn<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token function">off</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> effects <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> effects <span class="token operator">&amp;&amp;</span> effects<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">effect</span> <span class="token operator">=&gt;</span> effect <span class="token operator">!==</span> fn<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token function">once</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">// \u6267\u884C\u5B8C\u4E00\u904D\u65B9\u6CD5\u540E\u53D6\u6D88\u76D1\u542C\u8BE5\u65B9\u6CD5</span>
        <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><p><strong>LRU\u7F13\u5B58</strong></p><div class="language-js"><pre><code>
<span class="token keyword">class</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span>capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> capacity
    <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> isExist <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>isExist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
            <span class="token comment">// \u4FDD\u8BC1\u8BE5key\u5728\u6700\u65B0\u64CD\u4F5C\u8FC7</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isExist <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

        <span class="token comment">// \u5148\u5220\u540E\u5B58\u4FDD\u8BC1\u8BE5key\u662F\u6700\u65B0\u64CD\u4F5C\u8FC7\u7684</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isExist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
       
        <span class="token comment">// \u5982\u679C\u8D85\u51FA\u5BB9\u91CF\u65F6\u4ECE\u7F13\u5B58\u4E2D\u628A\u6700\u65E7\u7684\u90A3\u4E2Akey\u5E72\u6389</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>retry\u51FD\u6570</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;resolve&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;reject&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5 \u91CD\u8BD5\u67D0\u4E2A\u65B9\u6CD5  retryTimes \u6B21\u76F4\u5230\u6210\u529F \u8FD4\u56DE\u7B2C\u4E00\u6B21\u6210\u529F\u7684\u7ED3\u679C or \u6700\u540E\u4E00\u6B21\u5931\u8D25\u7684\u9519\u8BEF\u539F\u56E0</span>
<span class="token keyword">function</span> <span class="token function">retry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>retryTimes</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5206\u522B\u7528async await\u5B9E\u73B0\u548C\u4E0D\u7528async await \u5B9E\u73B0 </span>
<span class="token punctuation">}</span>
<span class="token function">retry</span><span class="token punctuation">(</span>doSomething<span class="token punctuation">,</span>retryTimes<span class="token punctuation">)</span>


<span class="token comment">// \u7528async await\u5B9E\u73B0 </span>
<span class="token keyword">function</span> <span class="token function">retry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> retryTimes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> retryTimes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> retryTimes<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
          count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">retry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> retryTimes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> retryTimes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> retryTimes<span class="token punctuation">)</span> <span class="token keyword">return</span> err
      count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0D\u7528async await \u5B9E\u73B0 </span>
<span class="token keyword">function</span> <span class="token function">retry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>retryTimes</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> <span class="token function-variable function">excute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> retryTimes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
              count<span class="token operator">++</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">retry</span><span class="token punctuation">(</span>doSomething<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>


</code></pre></div>`,51)]))}var d=s(o,[["render",c]]);export{m as __pageData,d as default};
