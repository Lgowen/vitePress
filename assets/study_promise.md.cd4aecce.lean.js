import{_ as s,A as a,V as p,E as t}from"./plugin-vue_export-helper.fc7452c3.js";const m='{"title":"promise\u5408\u96C6 #","description":"","frontmatter":{},"headers":[],"relativePath":"study/promise.md","lastUpdated":1731465675970}',o={};function c(e,n,u,l,k,i){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="promise\u5408\u96C6" tabindex="-1">promise\u5408\u96C6 <a class="header-anchor" href="#promise\u5408\u96C6" aria-hidden="true">#</a></h1><p><strong>\u5982\u4F55\u7528 Promise \u5B9E\u73B0\u7EA2\u7EFF\u9EC4\u706F\u4EA4\u66FF\u6253\u5370</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7EA2\u706F3\u79D2\u6253\u5370\u4E00\u6B21\uFF0C\u9EC4\u706F2\u79D2\u6253\u5370\u4E00\u6B21\uFF0C\u7EFF\u706F1\u79D2\u6253\u5370\u4E00\u6B21</span>
<span class="token keyword">function</span> <span class="token function">green</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">yellow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">red</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">colorPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">mySetTimeout</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">mySetTimeout</span><span class="token punctuation">(</span>green<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">mySetTimeout</span><span class="token punctuation">(</span>yellow<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">colorPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u9012\u5F52\u6267\u884C</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mySetTimeout</span><span class="token punctuation">(</span><span class="token parameter">cb<span class="token punctuation">,</span> timeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> _</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6267\u884C\u56DE\u8C03</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BA9promise\u7684\u72B6\u6001\u4ECEpending -&gt; fulfilled</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">colorPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>Promise.all</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">myPromiseAll</span><span class="token punctuation">(</span><span class="token parameter">PromiseArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> asnArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// promise.all\u8FD4\u56DE\u7684\u7ED3\u679C -&gt; \u5B58\u50A8PromiseArr\u4E2D\u7684\u6240\u6709promise\u6210\u529F\u6216\u5176\u4E2D\u4E00\u4E2A\u5931\u8D25\u7684\u7ED3\u679C</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u8D1F\u8D23\u8BA1\u6570 -&gt; \u5F53PromiseArr\u4E2D\u6240\u6709\u7684promise\u6267\u884C\u5B8C\u6BD5\u540E\u5C06res\u8FD4\u56DE</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> PromiseArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// \b</span>
    
    <span class="token comment">// \u904D\u5386\u6570\u7EC4\u6267\u884C\u6BCF\u4E00\u4E2Apromise -&gt; \u5C06\u6BCF\u4E2A\u8FD4\u56DE\u7684\u7ED3\u679C\u653E\u8FDBasnArr\u4E2D -&gt; \u6BCF\u653E\u5165\u4E00\u4E2A\u8BA1\u4E00\u4E2A\u6570 -&gt; \u5F53\u5168\u90E8\u7ED3\u679C\u90FD\u8FD4\u56DE\u5B8C\u6BD5\u65F6resolve(asnArr)</span>
    PromiseArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          asnArr<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">;</span>
          count<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> len<span class="token punctuation">)</span> <span class="token function">resolve</span><span class="token punctuation">(</span>asnArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>Promise.race</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">myPromiseRace</span><span class="token punctuation">(</span><span class="token parameter">PromiseArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        PromiseArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">promise</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
            <span class="token comment">// Promise.resolve(promise).then(res =&gt; resolve(res), err =&gt; reject(err))</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Promise.allSettled</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">myPromiseAllSettled</span><span class="token punctuation">(</span><span class="token parameter">PromiseArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">const</span> len <span class="token operator">=</span> PromiseArr<span class="token punctuation">.</span>length
        <span class="token keyword">const</span> <span class="token function-variable function">isTimeToResolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> len<span class="token punctuation">)</span> <span class="token function">resolve</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        PromiseArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> res <span class="token punctuation">}</span>
                count<span class="token operator">++</span>
                <span class="token function">isTimeToResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;rejected&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">reason</span><span class="token operator">:</span> err <span class="token punctuation">}</span>
                count<span class="token operator">++</span>
                <span class="token function">isTimeToResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5B9E\u73B0myFetch\u5728\u8BF7\u6C42timeout\u540E\u6CA1\u7ED3\u679C\u6CA1\u56DE\u6765\u62A5\u9519</strong></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">myFetch</span><span class="token punctuation">(</span><span class="token parameter">timeout<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">fetch</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre></div><p><strong>\u4E8B\u4EF6\u5FAA\u73AF</strong></p><div class="language-js"><pre><code>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">88</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">6</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>

<span class="token comment">// \u7531\u4E8E\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u6700\u4F4E\u5EF6\u8FDF\u65F6\u95F4\u4E0D\u540C\uFF0C\u4EE5\u4E0A\u7684\u5B9A\u65F6\u5668\u6267\u884C\u987A\u5E8F\u4E5F\u6709\u53EF\u80FD\u4E0D\u540C \uFF08chrome\u548CSafari\u7684\u6700\u5C0F\u5EF6\u8FDF\u4E3A1ms\uFF0Cfirefox\u548Cie\u7684\u6700\u5C0F\u5EF6\u8FDF\u662F0\uFF09</span>
<span class="token comment">// \u8FD9\u4E5F\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u5728chrome\u6D4F\u89C8\u5668\u4E0B \u4EE5\u4E0A\u7684\u4E24\u4E2A\u5B9A\u65F6\u5668\u4F1A\u5148\u6253\u53701 \u800C\u4E0D\u662F2</span>

<span class="token comment">// Promise.resolve(() =&gt; { console.log(3); return 5}) Promise.resolve\u4E86\u4E00\u4E2A\u51FD\u6570 \u6240\u4EE5\u5728.then(val =&gt; console.log(4, val); return 6) \u8FD9\u91CC\u63A5\u6536\u5230\u7684val\u662F\u5176resolve\u7684\u51FD\u6570</span>
<span class="token comment">// 1. Promise.resolve() -&gt; \u5C06promise\u7684\u72B6\u6001\u4ECEpending\u6539\u4E3Afullfilled \u56E0\u6B64\u4F1A\u5C06.then()\u4E2D\u7684\u56DE\u8C03\u6CE8\u518C\u4E8B\u4EF6\u961F\u5217\u4E2D\u53BB\uFF08\u5FAE\u4EFB\u52A1\uFF09</span>
<span class="token comment">// 2. \u4E3B\u6267\u884C\u6808console.log(7) -&gt; \u6253\u53707</span>
<span class="token comment">// 3. \u6B64\u65F6\u6267\u884C\u6808\u4E3A\u7A7A \u6545\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u770B\u662F\u5426\u6709\u7B49\u5F85\u88AB\u653E\u5165\u6267\u884C\u6808\u4E2D\u6267\u884C\u7684\u5FAE\u4EFB\u52A1 </span>
<span class="token comment">// 4. \u62FF\u51FA\u7B2C\u4E00\u4E2A\u4EFB\u52A1\uFF1A.then\u4E2D\u7684\u56DE\u8C03\u51FD\u6570 \u6253\u5370 4 \b(() =&gt; console.log(3); return 5) \u6267\u884C\u5B8C\u540E\u4F1A\u5C06.finally()\u4E2D\u7684\u56DE\u8C03\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D tips: finally\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u5F62\u53C2</span>
<span class="token comment">// 5. \u6B64\u65F6\u6267\u884C\u6808\u4E3A\u7A7A \u4ECE\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA.finally()\u4E2D\u7684\u56DE\u8C03\u51FD\u6570 -&gt; \u6253\u5370 6 undefined </span>
<span class="token comment">// 6. \u8FD9\u65F6\u5019\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u4E5F\u4E3A\u7A7A \u5373\u672C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F</span>

<span class="token comment">// \u5F00\u59CB\u7B2C\u4E8C\u8F6E</span>
<span class="token comment">// 1. \u4ECE\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u5B9A\u65F6\u56681\uFF0CPromise.resolve().then() \u5C06\u5176\u56DE\u8C03\u51FD\u6570\u6CE8\u518C\u8FDB\u5165\u5FAE\u4EFB\u52A1\u961F\u5217</span>
<span class="token comment">// 2. \u6253\u53701</span>
<span class="token comment">// 3. \u6267\u884C\u6808\u4E3A\u7A7A \u4EFB\u52A1\u961F\u5217\u4E2D\u5B58\u5728\u5FAE\u4EFB\u52A1 \u53D6\u5176\u51FA\u6765\u6267\u884C \u6253\u537088</span>
<span class="token comment">// 4. \u6267\u884C\u6808\u4E3A\u7A7A \u5FAE\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A \u8BE5\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F</span>

<span class="token comment">// \u5F00\u59CB\u7B2C\u4E09\u8F6E</span>
<span class="token comment">// 1. \u4ECE\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u5B9A\u65F6\u56682 \u6267\u884C\u6253\u53702</span>
</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2AcacheRequest</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">cacheRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u662F\u5426\u6709\u7F13\u5B58</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>requestFn<span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE\u503C\u4E3A\uFF1A\u72B6\u6001\u4E3Apending\u7684Promise</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">// \u5426\u5219\u8FD4\u56DE\u7F13\u5B58\u6570\u636E</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> requestFn <span class="token operator">=</span> <span class="token function">axios</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
        
        cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">,</span> requestFn <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u8FDB\u7F13\u5B58</span>

        <span class="token keyword">return</span> requestFn<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u8FDB\u7F13\u5B58</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;fail&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> err <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u8FDB\u7F13\u5B58</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre></div><p><strong>\u5B9E\u73B0\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\u8C03\u5EA6\u5668\u63A7\u5236\u5E76\u53D1\u6570\u91CF</strong></p><div class="language-js"><pre><code>

<span class="token keyword">class</span> <span class="token class-name">Scheduler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">maxNum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>maxNum <span class="token operator">=</span> maxNum

    <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// async add(promiseCreator) {</span>
  <span class="token comment">//   if (this.current &gt;= this.maxNum) {</span>
  <span class="token comment">//     await new Promise(resolve =&gt; this.queue.push(resolve))</span>
  <span class="token comment">//   }</span>

  <span class="token comment">//   this.current++</span>

  <span class="token comment">//   const res = await promiseCreator() </span>

  <span class="token comment">//   this.current--</span>

  <span class="token comment">//   this.queue.length &amp;&amp; this.queue.shift()()</span>

  <span class="token comment">//   return res</span>
  <span class="token comment">// }</span>

    <span class="token keyword">async</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">startTask</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">startTask</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">startTask</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token operator">++</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token operator">--</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5F53\u6267\u884C\u5B8C\u540E\u4ECE\u963B\u585E\u961F\u5217\u4E2D\u53D6\u51FA\u6539\u53D8Promise\u7684\u72B6\u6001\u4EE5\u81F3\u4E8E\u8BA9\u4EFB\u52A1\u7EE7\u7EED\u6267\u884C</span>

    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5EF6\u8FDF\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">sleep</span> <span class="token operator">=</span> <span class="token parameter">time</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u540C\u65F6\u8FDB\u884C\u7684\u4EFB\u52A1\u6700\u591A2\u4E2A</span>
<span class="token keyword">const</span> scheduler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scheduler</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6DFB\u52A0\u5F02\u6B65\u4EFB\u52A1</span>
<span class="token comment">// time: \u4EFB\u52A1\u6267\u884C\u7684\u65F6\u95F4</span>
<span class="token comment">// val: \u53C2\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">addTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">time<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    scheduler<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u8BF7\u6C42\u63A7\u5236\u5E76\u53D1</strong></p><div class="language-js"><pre><code>



<span class="token keyword">function</span> <span class="token function">asyncPool</span><span class="token punctuation">(</span><span class="token parameter">limit<span class="token punctuation">,</span> promiseArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u50A8\u5B58\u6240\u6709\u7684Promise</span>

    <span class="token keyword">const</span> excuting <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u50A8\u5B58\u6B63\u5728\u6267\u884C\u7684Promise</span>

    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> promise <span class="token keyword">of</span> promiseArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u65B0\u5EFA\u4E00\u4E2Apromise\u6765\u67E5\u770B\u5176\u72B6\u6001</span>

        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span>

        <span class="token comment">// \u5F53\u9650\u5236\u7684\u6570\u91CF\u5C0F\u4E8EpromiseArr\u957F\u5EA6\u65F6\u9700\u8981\u8FDB\u884C\u5E76\u53D1\u63A7\u5236</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>limit <span class="token operator">&lt;=</span> promiseArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">const</span> e <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> excuting<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>excuting<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u5F53promise\u6267\u884C\u5B8C\u65F6\u628A\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u5220\u9664</span>

            excuting<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>excuting<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5982\u679C\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u6570 \u5927\u4E8E\u9650\u5236\u6570</span>
                
                <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>excuting<span class="token punctuation">)</span> <span class="token comment">// \u7B49\u5F85\u6267\u884C\u5FEB\u7684\u90A3\u4E2A\u7ED3\u679C\u6267\u884C\u5B8C\u6210</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5F00\u53D1\u4E2D\u9700\u8981\u5728\u591A\u4E2Apromise\u5904\u7406\u5B8C\u6210\u540E\u6267\u884C\u540E\u7F6E\u903B\u8F91\uFF0C\u901A\u5E38\u4F7F\u7528Promise.all\uFF1A</span>

<span class="token comment">// Primise.all([p1, p2, p3]).then((res) =&gt; ...)</span>
<span class="token comment">// \u4F46\u662F\u6709\u4E2A\u95EE\u9898\u662F\uFF0C\u56E0\u4E3A promise \u521B\u5EFA\u540E\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F20\u5165\u5230 promise.all \u4E2D\u7684\u591A\u4E2A promise \u5B9E\u4F8B\uFF0C</span>
<span class="token comment">// \u5728\u5176\u521B\u5EFA\u7684\u65F6\u5019\u5C31\u5DF2\u7ECF\u5F00\u59CB\u6267\u884C\u4E86\uFF0C\u5982\u679C\u8FD9\u4E9B\u5B9E\u4F8B\u4E2D\u6267\u884C\u7684\u5F02\u6B65\u64CD\u4F5C\u90FD\u662F http \u8BF7\u6C42\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5728\u77AC\u95F4\u53D1\u51FA n \u4E2A http \u8BF7\u6C42\uFF0C\u8FD9\u6837\u663E\u7136\u662F\u4E0D\u5408\u7406\u7684\uFF1B</span>
<span class="token comment">// \u66F4\u5408\u7406\u7684\u65B9\u5F0F\u662F\uFF1A\u5BF9 Promise.all \u4E2D\u5F02\u6B65\u64CD\u4F5C\u7684\u6267\u884C\u6570\u91CF\u52A0\u4EE5\u9650\u5236\uFF0C\u540C\u4E00\u65F6\u95F4\u53EA\u5141\u8BB8\u6709 limit \u4E2A\u5F02\u6B65\u64CD\u4F5C\u540C\u65F6\u6267\u884C\u3002</span>

<span class="token keyword">const</span> <span class="token function-variable function">timeout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u59CB&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u675F&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncPool</span><span class="token punctuation">(</span><span class="token parameter">limit<span class="token punctuation">,</span> array<span class="token punctuation">,</span> iteratorFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u50A8\u6240\u6709\u7684\u5F02\u6B65\u4EFB\u52A1</span>
  <span class="token keyword">const</span> executing <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">iteratorFn</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>limit <span class="token operator">&lt;=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> e <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> executing<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>executing<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      executing<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>executing<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>executing<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">asyncPool</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><p><strong>\u94FE\u5F0F\u8C03\u7528\u961F\u5217</strong></p><div class="language-js"><pre><code>
<span class="token keyword">let</span> chain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">chain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// chain().work()</span>
<span class="token comment">// chain().sleep(3)</span>
<span class="token comment">// chain().work()</span>

<span class="token comment">//\u9700\u8981\u7ED3\u679C\u662F </span>
work
\u7B49\u5F856ms
work
\u7B49\u5F853ms
work
\u7B49\u5F853ms
work

<span class="token keyword">class</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  task <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u72B6\u6001\u4E3Afullfilled\u7684promise </span>

  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6267\u884C\u5F53\u524D\u4EFB\u52A1</span>
    <span class="token comment">// \u7136\u540E\u66F4\u6539\u5F53\u524D\u4EFB\u52A1 \u5373\u964D\u5F53\u524D\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\u8FD4\u56DE\u7684promise\u8D4B\u503C\u7ED9task\u4EE5\u4FBF\u4E0B\u4E00\u6B21\u4F7F\u7528\u65F6\u5728\u5176\u540E\u9762</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>task <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>task<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;work&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>task<span class="token punctuation">,</span> <span class="token string">&#39;this.task&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>


  <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>task <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>task<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u7B49\u5F85</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>\u5B9E\u73B0\u5E76\u53D1\u8BF7\u6C42\uFF0C\u5E76\u6309\u987A\u5E8F\u6253\u5370</strong></p><div class="language-js"><pre><code>

<span class="token keyword">function</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fetchUrl</span><span class="token punctuation">(</span><span class="token parameter">urls</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>


  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    urls<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

      <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        ans<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> res
  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curIndex <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span>
          curIndex <span class="token operator">=</span> ans<span class="token punctuation">.</span>length
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> urls<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> urls <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;www.baidu.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;www.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;www.qq.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;www.fendou.host&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;www.aliyun.com&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre></div>`,23)]))}var d=s(o,[["render",c]]);export{m as __pageData,d as default};
