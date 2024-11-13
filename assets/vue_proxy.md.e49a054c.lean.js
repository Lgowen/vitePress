import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const f='{"title":"\u54CD\u5E94\u5F0F\u6570\u636E #","description":"","frontmatter":{},"headers":[],"relativePath":"vue/proxy.md","lastUpdated":1731465675970}',o={};function e(c,n,u,l,k,i){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u54CD\u5E94\u5F0F\u6570\u636E" tabindex="-1">\u54CD\u5E94\u5F0F\u6570\u636E <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u6570\u636E" aria-hidden="true">#</a></h1><p><strong>ProxyData</strong></p><div class="language-js"><pre><code>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Lgowen&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value

        <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// \u5728\u54CD\u5E94\u5F0F\u6570\u636E\u6539\u53D8\u65F6\uFF0C\u89E6\u53D1\u5BF9\u5E94\u526F\u4F5C\u7528\u51FD\u6570</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6876 -&gt; \u5B58\u653Etarget\u4E2D\u6BCF\u4E00\u4E2A\u5C5E\u6027\u53CA\u5176\u5BF9\u5E94\u6240\u6709\u4F9D\u8D56</span>

<span class="token comment">// WeakMap\u7ECF\u5E38\u7528\u4E8E\u5B58\u50A8\u90A3\u4E9B\u53EA\u6709\u5F53key\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u5B58\u5728\u65F6(\u6CA1\u6709\u88AB\u56DE\u6536)\u624D\u6709\u4EF7\u503C\u7684\u4FE1\u606F\u3002</span>
<span class="token comment">// \u5982\u679Ctarget\u5BF9\u8C61\u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\u4E86\uFF0C\u8BF4\u660E\u7528\u6237\u4FA7\u4E0D\u518D\u9700\u8981\u5B83\u4E86\uFF0C\u8FD9\u65F6\u5783\u573E\u56DE\u6536\u5668\u4F1A\u5B8C\u6210\u56DE\u6536\u4EFB\u52A1\u3002</span>
<span class="token comment">// \u4F46\u662F\u5982\u679C\u4F7F\u7528Map\u6765\u4EE3\u66FFWeakMap\uFF0C\u90A3\u4E48\u5373\u4F7F\u7528\u6237\u4FA7\u7684\u4EE3\u7801\u5BF9target\u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\uFF0C\u8FD9\u4E2Atarget\u4E5F\u4E0D\u4F1A\u88AB\u56DE\u6536\uFF0C\u6700\u7EC8\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u6EA2\u51FA</span>

<span class="token comment">// \u8FFD\u8E2A\u54CD\u5E94\u5F0F\u6570\u636E(\u6536\u96C6\u4F9D\u8D56)</span>
<span class="token comment">// WeakMap: {</span>
<span class="token comment">//     name: new Map() -&gt; new Set() -&gt; key --- effentFn1 effentFn2</span>
<span class="token comment">//     age: new Map() -&gt; new Set() -&gt; key --- effentFn3 effentFn4</span>
<span class="token comment">// }</span>
<span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>activeEffect<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token comment">// \u5982\u679C\u5F53\u524D\u6CA1\u6709\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528\u51FD\u6570\u5219\u8FD4\u56DE</span>

    <span class="token keyword">const</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u8FD9\u4E2Atarget\u7684\u4E00\u4E2A\u4F9D\u8D56Map -&gt;  { key: Set }</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bunk<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u5982\u679C\u5F53\u524D\u8FD9\u4E2Atarget\u6CA1\u6709Map \u5219\u65B0\u5EFA\u4E00\u4E2A</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> deps <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u8FD9\u4E2Akey\u5BF9\u5E94\u7684\u4F9D\u8D56Set -&gt; [effectFn1, effectFn2]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        depsMap<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>deps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u5982\u679C\u5F53\u524D\u8FD9\u4E2Akey\u6CA1\u6709\u5BF9\u5E94\u7684Set \u5219\u65B0\u5EFA\u4E00\u4E2A</span>
    <span class="token punctuation">}</span>

    deps<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span> <span class="token comment">// \u6DFB\u52A0\u526F\u4F5C\u7528\u51FD\u6570</span>

    activeEffect<span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span> <span class="token comment">// \u5F80\u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528\u51FD\u6570\u8EAB\u4E0A\u6DFB\u52A0\u4F9D\u8D56(\u4E3A\u4E86\u8BB0\u5F55\u6240\u6709\u7684\u4F9D\u8D56)</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1\u5BF9\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6target\u5BF9\u5E94\u7684Map</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">const</span> effects <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u526F\u4F5C\u7528\u51FD\u6570</span>

    <span class="token keyword">const</span> newEffects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    effects <span class="token operator">&amp;&amp;</span> effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u907F\u514D\u526F\u4F5C\u7528\u51FD\u6570\u5D4C\u5957\u5BFC\u81F4\u65E0\u9650\u5FAA\u73AF</span>
        <span class="token comment">// \u5982\u679C\u5F53\u524D\u89E6\u53D1\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4E0E\u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528\u51FD\u6570\u76F8\u540C\u7684\u8BDD\uFF0C\u5219\u4E0D\u91CD\u590D\u89E6\u53D1\uFF0C\u907F\u514D\u65E0\u9650\u9012\u5F52\u8C03\u7528\uFF0C\u5BFC\u81F4\u6808\u6EA2\u51FA</span>
        <span class="token comment">// effect(() =&gt; proxyData.age++) \u907F\u514D\u8BE5\u60C5\u51B5</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fn <span class="token operator">!==</span> activeffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newEffects<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// effects &amp;&amp; effects.forEach(fn =&gt; fn()) // \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>

    newEffects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>effectFn<span class="token punctuation">.</span>options<span class="token punctuation">.</span>scheduler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5982\u679C\u5B58\u5728\u4E8B\u4EF6\u8C03\u5EA6\u5668 \u5219\u6309\u4F20\u8FDB\u6765\u7684\u53BB\u6267\u884C</span>
            effectFn<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">scheduler</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u907F\u514D\u5728\u6E05\u9664\u4F9D\u8D56\u65F6\u53C8\u540C\u65F6\u5728\u6DFB\u52A0\u4F9D\u8D56\u5BFC\u81F4\u6B7B\u5FAA\u73AF</span>
<span class="token punctuation">}</span>


<span class="token keyword">let</span> activeEffect <span class="token comment">// \u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>

<span class="token keyword">const</span> effectStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u6808 -&gt; \u4FDD\u8BC1\u5F53\u524D\u6267\u884C\u7684\u526F\u4F5C\u7528\u51FD\u6570\u662F\u5BF9\u5E94\u7684(\u5728effect\u5D4C\u5957\u65F6)</span>


<span class="token keyword">function</span> <span class="token function">cleanup</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> deps <span class="token operator">=</span> effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        deps<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span> <span class="token comment">// \u6E05\u9664\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570 </span>
    <span class="token punctuation">}</span>
    
    effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u91CD\u7F6E\u526F\u4F5C\u7528\u51FD\u6570\u7684\u4F9D\u8D56</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token function-variable function">effectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token function">cleanup</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span> <span class="token comment">// \u5728\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\u4E4B\u524D\u5148\u6E05\u9664\u6240\u6709\u4E0E\u526F\u4F5C\u7528\u51FD\u6570\u76F8\u5173\u7684\u4F9D\u8D56</span>

        activeEffect <span class="token operator">=</span> effectFn <span class="token comment">// \u5C06\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570\u8D4B\u503C\u7ED9\u5168\u5C40\u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528</span>

        effectStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span> <span class="token comment">// \u6808\u4E2D\u5B58\u653E\u5F53\u524D\u6267\u884C\u7684\u526F\u4F5C\u7528\u51FD\u6570(\u6808\u9876\u5B58\u653E\u7684\u6C38\u8FDC\u662F\u5D4C\u5957\u526F\u4F5C\u7528\u51FD\u6570\u6700\u5E95\u5C42\u7684\u90A3\u4E2A)</span>

        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u4F20\u8FDB\u6765\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>

        effectStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u51FA\u6808</span>
    
        activeEffect <span class="token operator">=</span> effectStack<span class="token punctuation">[</span>effectStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// \u66F4\u65B0\u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4E3A\u4E4B\u524D\u7684\u503C(\u6808\u5E95\u5B58\u653E\u7684\u6C38\u8FDC\u662F\u5D4C\u5957\u526F\u4F5C\u7528\u51FD\u6570\u6700\u5916\u5C42\u7684\u90A3\u4E2A)</span>
    <span class="token punctuation">}</span>

    effectFn<span class="token punctuation">.</span>options <span class="token operator">=</span> options <span class="token comment">// \u8C03\u5EA6\u5668\u9009\u9879</span>

    effectFn<span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u6BCF\u6B21\u89E6\u53D1\u524D\u5148\u6E05\u7A7A\u6240\u6709\u7684\u4F9D\u8D56 -&gt; \u4EE5\u4FDD\u8BC1\u6709\u591A\u4F59\u7684\u526F\u4F5C\u7528\u4F9D\u8D56\u5B58\u5728</span>

    <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u5206\u522B\u89E6\u53D1\u4E86proxyData.name\u548CproxyData.age\u7684get\u65B9\u6CD5\uFF0C\u5373\u7ED9\u5B83\u4EEC\u4E24\u4E2A\u5C5E\u6027\u90FD\u8BBE\u7F6E\u4E0A\u4E86\u5BF9\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4F9D\u8D56, \u5373\u8FD9\u91CC\u4F20\u5165\u7684\u65B9\u6CD5</span>
    window<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>proxyData<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>proxyData<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81\u4E86</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">.</span> <span class="token punctuation">{</span>
    <span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token comment">// \u7528\u4E8E\u65F6\u95F4\u8C03\u5EA6</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u907F\u514D\u91CD\u590D\u5237\u65B0</span>

<span class="token keyword">const</span> jobQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFAjob\u961F\u5217 Set\u7ED3\u6784\u53EF\u4EE5\u53BB\u91CD\u907F\u514D\u91CD\u590D\u6DFB\u52A0</span>
<span class="token keyword">const</span> isFlushing <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// \u5224\u65AD\u662F\u5426\u6B63\u5728\u5237\u65B0\u961F\u5217</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span>resolve <span class="token comment">// Promise\u5904\u7406\u5F02\u6B65\u4F7F\u526F\u4F5C\u7528\u51FD\u6570\u5728\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u6267\u884C</span>
<span class="token keyword">function</span> <span class="token function">flushJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>isFlushing<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token comment">// \u5047\u5982\u961F\u5217\u6B63\u5728\u5237\u65B0 \u5C31\u4E0D\u91CD\u590D\u64CD\u4F5C\u4E86</span>

    isFlushing <span class="token operator">=</span> <span class="token boolean">true</span>

    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        jobQueue<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">job</span> <span class="token operator">=&gt;</span> <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        isFlushing <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span>

<span class="token comment">// \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">.</span> <span class="token punctuation">{</span>
    <span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        jobQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token comment">// \u5F80\u961F\u5217\u4E2D\u6DFB\u52A0\u526F\u4F5C\u7528\u51FD\u6570(\u5982\u4E0B\u53EF\u80FD\u4F1A\u5F80\u961F\u5217\u4E2D\u63A8\u51FA\u4E24\u6B21\u76F8\u540C\u7684\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u56E0\u4E3ASet\u7ED3\u6784\u81EA\u52A8\u53BB\u91CD\u6240\u4EE5\u6700\u7EC8\u53EA\u4F1A\u6267\u884C\u4E00\u884C)</span>

        <span class="token function">flushJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5237\u65B0\u961F\u5217(\u5B9E\u9645\u4E0A\u5982\u679C\u5728\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u8BE5\u961F\u5217\u6B63\u5728\u5237\u65B0\u7684\u8BDD\uFF0C\u5219\u53EA\u4F1A\u6267\u884C\u4E00\u6B21)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>
obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>

<span class="token comment">// 1 \u9996\u6B21\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\u6253\u53701</span>
<span class="token comment">// 3 \u4E24\u6B21\u7684obj.foo\u56E0\u4E3A\u8D4B\u503C\u64CD\u4F5C\u89E6\u53D1\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4F1A\u5728\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u6267\u884C \u6240\u4EE5\u62FF\u5230\u7684\u7ED3\u679C\u662F\u6700\u540E\u8D4B\u503C\u540E\u7684\u7ED3\u679C(\u51CF\u5C11\u4E86\u91CD\u590D\u6E32\u67D3)</span>


<span class="token comment">// \u8BE5\u529F\u80FD\u7C7B\u4F3CVue.js\u4E2D\u8FDE\u7EED\u591A\u6B21\u4FEE\u6539\u54CD\u5E94\u5F0F\u6570\u636E\u4F46\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21\u66F4\u65B0\uFF0C\u5B9E\u9645\u4E0AVue.js\u5185\u90E8\u5B9E\u73B0\u4E86\u4E00\u4E2A\u66F4\u52A0\u5B8C\u5584\u7684\u8C03\u5EA6\u5668\uFF0C\u601D\u8DEF\u4E0E\u4E0A\u6587\u4ECB\u7ECD\u76F8\u540C</span>

</code></pre></div><p><strong>computed\u548Clazy</strong></p><div class="language-js"><pre><code><span class="token comment">// \u5047\u5982\u6211\u4EEC\u60F3\u7ED9\u526F\u4F5C\u7528\u51FD\u6570\u8BBE\u7F6E\u61D2\u6267\u884C</span>


<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;lazy function&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token function-variable function">effectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token function">cleanup</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span> <span class="token comment">// \u5728\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\u4E4B\u524D\u5148\u6E05\u9664\u6240\u6709\u4E0E\u526F\u4F5C\u7528\u51FD\u6570\u76F8\u5173\u7684\u4F9D\u8D56</span>

        activeEffect <span class="token operator">=</span> effectFn <span class="token comment">// \u5C06\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570\u8D4B\u503C\u7ED9\u5168\u5C40\u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528</span>

        effectStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span> <span class="token comment">// \u6808\u4E2D\u5B58\u653E\u5F53\u524D\u6267\u884C\u7684\u526F\u4F5C\u7528\u51FD\u6570(\u6808\u9876\u5B58\u653E\u7684\u6C38\u8FDC\u662F\u5D4C\u5957\u526F\u4F5C\u7528\u51FD\u6570\u6700\u5E95\u5C42\u7684\u90A3\u4E2A)</span>

        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u4F20\u8FDB\u6765\u7684\u526F\u4F5C\u7528\u51FD\u6570(\u83B7\u53D6\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u7684\u7ED3\u679C)</span>

        effectStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u51FA\u6808</span>
    
        activeEffect <span class="token operator">=</span> effectStack<span class="token punctuation">[</span>effectStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// \u66F4\u65B0\u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4E3A\u4E4B\u524D\u7684\u503C(\u6808\u5E95\u5B58\u653E\u7684\u6C38\u8FDC\u662F\u5D4C\u5957\u526F\u4F5C\u7528\u51FD\u6570\u6700\u5916\u5C42\u7684\u90A3\u4E2A)</span>

        <span class="token keyword">return</span> res <span class="token comment">// \u8FD4\u56DE\u526F\u4F5C\u7528\u51FD\u6570\u7684\u7ED3\u679C</span>
    <span class="token punctuation">}</span>

    effectFn<span class="token punctuation">.</span>options <span class="token operator">=</span> options <span class="token comment">// \u8C03\u5EA6\u5668\u9009\u9879</span>

    effectFn<span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u6BCF\u6B21\u89E6\u53D1\u524D\u5148\u6E05\u7A7A\u6240\u6709\u7684\u4F9D\u8D56 -&gt; \u4EE5\u4FDD\u8BC1\u6709\u591A\u4F59\u7684\u526F\u4F5C\u7528\u4F9D\u8D56\u5B58\u5728</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5982\u679C\u6CA1\u6709\u8BBE\u7F6Elazy\u7684\u8BDD\u624D\u7ACB\u523B\u6267\u884C</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> effectFn <span class="token comment">// \u8FD4\u56DE\u7684\u8FD9\u4E2A\u51FD\u6570\u53EF\u7528\u4E8E\u7528\u6237\u81EA\u884C\u5565\u65F6\u5019\u8C03\u7528\u90FD\u53EF\u4EE5</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> effectFn <span class="token operator">=</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;lazy function&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BE5\u51FD\u6570\u4E3A\u526F\u4F5C\u7528\u51FD\u6570</span>

<span class="token comment">// \u5047\u5982\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u662F\u8FD4\u56DE\u4E00\u4E2A\u503C,\u5373\u53EF\u4EE5\u4F5C\u4E3Acomputed\u5C5E\u6027\u7684getter</span>

<span class="token keyword">const</span> effectFn <span class="token operator">=</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">.</span>age <span class="token operator">+</span> obj<span class="token punctuation">.</span>year
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u5B8C\u540E\u5F97\u5230\u7684\u7ED3\u679C</span>

<span class="token comment">// \u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u5199\u4E00\u4E2Acomputed\u4E86</span>
<span class="token keyword">function</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token parameter">getter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token comment">// computed\u7F13\u5B58\u7684\u503C</span>

    <span class="token keyword">let</span> dirty <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// \u63A7\u5236\u526F\u4F5C\u7528\u51FD\u6570\u662F\u5426\u6267\u884C</span>

    <span class="token keyword">const</span> effectFn <span class="token operator">=</span> <span class="token function">effect</span><span class="token punctuation">(</span>getter<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dirty <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// \u5F53computed\u7684\u503C\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u6539\u53D8\u65F6\uFF0C\u89E6\u53D1setter\u65F6\u4F1A\u8D70trigger</span>

                <span class="token function">trigger</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u5F53\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u53EF\u4EE5\u624B\u52A8\u8C03\u7528trigget\u51FD\u6570\u89E6\u53D1\u54CD\u5E94</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>

        <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token comment">// \u5728\u83B7\u53D6\u503C\u7684\u65F6\u5019\u5047\u5982dirty\u4E3Atrue\u7684\u65F6\u5019\uFF0C\u624D\u8868\u793A\u8981\u91CD\u65B0\u53BB\u83B7\u53D6\u503C\uFF0C\u5426\u5219\u4F7F\u7528\u7F13\u5B58</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                dirty <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
            
            <span class="token function">track</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u624B\u52A8\u89E6\u53D1track\u51FD\u6570\uFF0C\u5728\u8BFB\u53D6computed\u503C\u7684\u65F6\u5019\u53BB\u8FFD\u8E2A\u5E76\u6536\u96C6\u5B83\u7684\u4F9D\u8D56</span>

            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">1998</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> computedValue <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>age <span class="token operator">+</span> obj<span class="token punctuation">.</span>yaer<span class="token punctuation">)</span>

<span class="token comment">// console.log(computedValue.value)</span>
<span class="token comment">// \u5728\u83B7\u53D6computedValue\u503C\u7684\u65F6\u5019\uFF0C\u9996\u6B21\u4F1A\u89E6\u53D1\u5176\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6267\u884C</span>
<span class="token comment">// \u5176\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6267\u884C\u53C8\u4F1A\u89E6\u53D1 \u7136\u540E\u4F1A\u628A() =&gt; obj.age + obj.yaer\u5F53\u4F5C\u5F53\u524D\u6FC0\u6D3B\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token comment">// obj.age\u548Cobj.year\u7684getter\uFF0C\u7136\u540E\u4F1A\u53BB\u8C03\u7528track\u51FD\u6570\u8FFD\u8E2A\u5E76\u6536\u96C6obj.age\u548Cobj.yaer\u5BF9\u5E94\u7684\u4F9D\u8D56\uFF0CSet[ () =&gt; obj.age + obj.yaer ]</span>
<span class="token comment">// \u7136\u540E\u8FD4\u56DE\u503C</span>

obj<span class="token punctuation">.</span>age<span class="token operator">++</span>
<span class="token comment">// \u6BD4\u5982\u8BF4 obj.age++ \u8FD9\u65F6\u5019\u89E6\u53D1\u4E86obj.age\u7684getter\u548Csetter\uFF0C\u4F1A\u5C06computed\u503Cdirty\u8BBE\u7F6E\u4E3Atrue</span>
<span class="token comment">// \u90A3\u4E48\u5728\u4E0B\u4E00\u6B21\u83B7\u53D6computed\u7684\u503C\u65F6\u4F1A\u91CD\u65B0\u89E6\u53D1computed\u503C\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4EE5\u5230\u8FBE\u66F4\u65B0\u503C\u7684\u76EE\u7684</span>

<span class="token comment">// \u4F46\u662F\u5982\u679C\u5728\u53E6\u5916\u4E00\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\u4E2D\u53BB\u8BFB\u53D6computed\u7684\u503C\u7684\u8BDD\uFF0C\u5C31\u4F1A\u51FA\u73B0\u526F\u4F5C\u7528\u51FD\u6570\u7684\u5D4C\u5957\uFF0C\u5BFC\u81F4\u5916\u5C42\u7684effect\u4E0D\u4F1A\u88AB\u5185\u5C42\u7684effect\u4E2D\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u6536\u96C6</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u53E6\u4E00\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\u8BFB\u53D6computed\u7684\u503C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>computedValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u6240\u4EE5\u6211\u4EEC\u9700\u8981\u53BB\u4E3B\u52A8\u89E6\u53D1\u66F4\u65B0</span>

<span class="token comment">// \u5F53\u8BFB\u53D6\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\u7684value\u503C\u65F6\uFF0C\u6211\u4EEC\u624B\u52A8\u8C03\u7528track\u51FD\u6570\uFF0C\u628A\u8BA1\u7B97\u5C5E\u6027\u8FD4\u56DE\u7684\u5BF9\u8C61obj\u4F5C\u4E3Atarget\uFF0C\u540C\u65F6\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9track\u51FD\u6570\u3002</span>
<span class="token comment">// \u5F53\u8BA1\u7B97\u5C5E\u6027\u6240\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u6267\u884C\u8C03\u5EA6\u5668\u51FD\u6570\uFF0C\u5728\u8C03\u5EA6\u5668\u51FD\u6570\u5185\u624B\u52A8\u8C03\u7528trigger\u51FD\u6570\u89E6\u53D1\u54CD\u5E94\u5373\u53EF\u3002</span>
<span class="token comment">// \u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u9700\u8981\u7ED9computed\u5C5E\u6027\u5728\u83B7\u53D6\u503C\u7684\u65F6\u5019\u6536\u96C6\u5B83\u7684\u4F9D\u8D56\uFF0C\u5728\u5B83\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u526F\u4F5C\u7528\u51FD\u6570</span>

<span class="token comment">// computed(obj)</span>
<span class="token comment">//     -----------value</span>
<span class="token comment">//                  ----------effectFn</span>
</code></pre></div><p><strong>watch</strong></p><div class="language-js"><pre><code>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> onInvalidate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj\u4E2D\u7684\u503C\u53D8\u5316\u4E86&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> expired <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// \u8868\u793A\u526F\u4F5C\u7528\u51FD\u6570\u6CA1\u6709\u8FC7\u671F</span>
    
    <span class="token comment">// \u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570\u8FC7\u671F\u65F6\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u9996\u6B21\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\u4F1A\u6CE8\u518C\uFF09</span>
    <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        expired <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/list&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment">// \u53EA\u6709\u5F53\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u6CA1\u6709\u8FC7\u671F\u7684\u65F6\u5019\u624D\u4F1A\u6267\u884C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>expired<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        myData <span class="token operator">=</span> res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5728\u6CE8\u518Cwatch\u7684\u65F6\u5019\u7ACB\u5373\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570</span>
    <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span> <span class="token comment">// pre(\u7EC4\u4EF6\u66F4\u65B0\u524D) sync()</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E0A\u9762\u7684watch\u65B9\u6CD5\u5176\u5B9E\u662F\u60F3\u76D1\u542Cobj\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2Agetter\u51FD\u6570\u76D1\u542C\u54CD\u5E94\u5F0F\u6570\u636E\u4E2D\u7684\u67D0\u4E00\u4E2A\u503C\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u6267\u884C\u56DE\u8C03\u51FD\u6570\uFF0C\u4E14\u56DE\u8C03\u51FD\u6570\u4E2D\u53EF\u4EE5\u62FF\u5230\u65B0\u7684\u503C\u548C\u65E7\u7684\u503C</span>

<span class="token keyword">function</span> <span class="token function">watch</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> getter

    <span class="token keyword">function</span> <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cleanup <span class="token operator">=</span> fn
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> cleanup
    
    <span class="token comment">// \u4E3A\u4E86\u7ACB\u5373\u8C03\u7528\u62BD\u79BB\u7684\u51FD\u6570</span>
    <span class="token keyword">const</span> <span class="token function-variable function">job</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

            newValue <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5728source\u53D8\u5316\u65F6\u89E6\u53D1\u83B7\u53D6\u65B0\u7684\u503C</span>
            
            <span class="token comment">// \u5047\u5982\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u6709\u4F20\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u8FC7\u671F\u65F6\u7684\u56DE\u8C03 \u5219\u6267\u884C</span>
            <span class="token comment">// \u5728\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\u524D\u6267\u884C\uFF08\u4F7F\u5F97\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u8FC7\u671F)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cleanup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">cleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token function">cb</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> onInvalidate<span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u56DE\u8C03\u51FD\u6570\u5E76\u4E14\u4F20\u503C\uFF08\u8FD9\u65F6\u5019\u624D\u4F1A\u6267\u884ConInvalidate\u5C06\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u53D8\u4E3A\u8FC7\u671F\u7684\uFF09</span>

            oldValue <span class="token operator">=</span> newValue <span class="token comment">// \u6267\u884C\u5B8C\u56DE\u8C03\u51FD\u6570\u4E4B\u540E \u66F4\u65B0oldValue\u7684\u503C \u4EE5\u4FDD\u8BC1\u4E0B\u4E00\u6B21\u62FF\u5230\u7684\u6570\u636E\u662F\u6B63\u786E\u7684</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u5047\u5982source\u662F\u4E00\u4E2A\u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> source <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        getter <span class="token operator">=</span> source
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">getter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">traverse</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token comment">// \u9012\u5F52\u8BFB\u53D6\u8BE5\u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u503C(\u8FD9\u91CC\u6682\u65F6\u4E0D\u8003\u8651\u6570\u7EC4\u7684\u60C5\u51B5) \u89E6\u53D1\u503C\u7684getter\u6536\u96C6(track)\u4F9D\u8D56</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">let</span> newValue<span class="token punctuation">,</span> oldValue


    <span class="token keyword">const</span> effectFn <span class="token operator">=</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6Elazy\u53EF\u4EE5\u4F7F\u7684\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u4E0D\u7ACB\u523B\u6267\u884C \u53EF\u7528\u4E8E\u81EA\u884C\u6267\u884C \u5E76\u4E14\u83B7\u53D6\u526F\u4F5C\u7528\u51FD\u6570\u7684\u8FD4\u56DE\u503C(getter\u7684\u8FD4\u56DE\u503C)</span>
        <span class="token comment">// \u5728source\u4E2D\u7684\u6240\u6709\u503C\u53EA\u8981\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5219\u4F1A\u89E6\u53D1\u5176getter\u6267\u884C(trigger)\u5BF9\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570(\u5E76\u4E14\u6267\u884C\u8C03\u5EA6\u65B9\u6CD5)scheduler</span>
        <span class="token function-variable function">scheduler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>flush <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u653E\u8FDB\u5FAE\u4EFB\u52A1\u961F\u5217\u7B49DOM\u66F4\u65B0\u540E\u518D\u6267\u884C \u526F\u4F5C\u7528\u51FD\u6570\u653E\u5230\u5FAE\u4EFB\u52A1\u961F\u5217 \u5E76\u7B49\u5F85DOM\u66F4\u65B0\u540E\u7ED3\u675F\u540E\u518D\u6267\u884C</span>
                <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>job<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5047\u5982\u6709\u4F20\u53C2\u6570\u5C31\u7ACB\u5373\u5148\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        oldValue <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u9996\u6B21\u6267\u884C\u83B7\u53D6getter\u7684\u503C</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u5047\u5982\u8BE5\u503C\u662F\u4E00\u4E2A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u6216\u8005\u5DF2\u7ECF\u8BFB\u8FC7\u4E86(\u7528Set\u5B58\u50A8\u907F\u514D\u5FAA\u73AF\u5F15\u7528) \u5C31\u4E0D\u9700\u8981\u7EE7\u7EED\u8BFB\u4E86</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> source <span class="token operator">!==</span><span class="token operator">=</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> source <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> 
    
    seen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token comment">// \u5B58\u53D6\u8BFB\u8FC7\u7684\u5C5E\u6027</span>

    <span class="token comment">// \u9012\u5F52\u8BFB\u53D6\u6BCF\u4E00\u4E2A\u5C5E\u6027</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> seen<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> source
<span class="token punctuation">}</span>


</code></pre></div>`,7)]))}var m=s(o,[["render",e]]);export{f as __pageData,m as default};
