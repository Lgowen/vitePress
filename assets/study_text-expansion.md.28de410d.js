import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.8685c10c.js";const d='{"title":"css\u5B9E\u73B0\u591A\u884C\u6587\u672C\u5C55\u5F00\u6536\u8D77 #","description":"","frontmatter":{},"headers":[],"relativePath":"study/text-expansion.md","lastUpdated":1650278083715}',p={},o=t(`<h1 id="css\u5B9E\u73B0\u591A\u884C\u6587\u672C\u5C55\u5F00\u6536\u8D77" tabindex="-1">css\u5B9E\u73B0\u591A\u884C\u6587\u672C\u5C55\u5F00\u6536\u8D77 <a class="header-anchor" href="#css\u5B9E\u73B0\u591A\u884C\u6587\u672C\u5C55\u5F00\u6536\u8D77" aria-hidden="true">#</a></h1><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/html; charset=utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
         <span class="token selector">.ioui-text-expansion</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.ioui-text-expansion__text</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 425px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #002753<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
        <span class="token property">max-height</span><span class="token punctuation">:</span> 6em<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.ioui-text-expansion__text::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
          <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
          <span class="token property">margin-bottom</span><span class="token punctuation">:</span> -40px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token selector">.ioui-text-expansion__text::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
          <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset <span class="token function">calc</span><span class="token punctuation">(</span>120px - 100vw<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>1.45em - 100vh<span class="token punctuation">)</span> 0 0 #f7f8fa<span class="token punctuation">;</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> -120px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.ioui-text-expansion .ioui-text-expansion__button</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 42px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.ioui-text-expansion .ioui-text-expansion__button::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">;</span>
          <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.ioui-text-expansion .ioui-text-expansion__button::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
          <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
          <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
          <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s<span class="token punctuation">;</span>
          <span class="token property">border-top</span><span class="token punctuation">:</span> 10px solid #002753<span class="token punctuation">;</span>
          <span class="token property">border-left</span><span class="token punctuation">:</span> 8px solid transparent<span class="token punctuation">;</span>
          <span class="token property">border-right</span><span class="token punctuation">:</span> 8px solid transparent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token selector">.ioui-text-expansion__text--expand</span> <span class="token punctuation">{</span>
      <span class="token property">max-height</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.ioui-text-expansion__text--expand::after</span> <span class="token punctuation">{</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.ioui-text-expansion__text--expand .ioui-text-expansion__button::before</span> <span class="token punctuation">{</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token selector">.ioui-text-expansion__text--expand .ioui-text-expansion__button::after</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ioui-text-expansion<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ioui-text-expansion__text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ioui-text-expansion__button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5C55\u5F00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          \u6211\u6211\u665A\u554A\u554A\u624B\u52A8\u8428\u8FBE\u963F\u65AF\u987F\u963F\u65AF\u987F\u963F\u65AF\u987F\u7231\u4E0A\u5927\u53D4\u7684\u6492\u6253\u7B97\u7684\u554A\u7684\u7231\u4E0A\u7684\u6492\u7684\u554A\u963F\u65AF\u987F\u963F\u65AF\u987F\u963F\u65AF\u987F\u6E7F\u7B54\u7B54\u7684\u7231\u4E0A\u5927\u7684\u554A\u7684\u554A\u6492\u6492\u7231\u4E0A\u6492\u554A\u554A\u662F\u7231\u4E0A\u7231\u4E0A\u6492\u7231\u4E0A\u7231\u4E0A
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.ioui-text-expansion__text&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.ioui-text-expansion__button&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> isExpand <span class="token operator">=</span> <span class="token boolean">false</span>
        button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            isExpand <span class="token operator">=</span> <span class="token operator">!</span>isExpand
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isExpand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                container<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ioui-text-expansion__text ioui-text-expansion__text--expand&#39;</span><span class="token punctuation">)</span>
                button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;\u6536\u8D77&#39;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                container<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ioui-text-expansion__text&#39;</span><span class="token punctuation">)</span>
                button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;\u5C55\u5F00&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,2),e=[o];function c(u,l,i,k,r,g){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{d as __pageData,_ as default};
