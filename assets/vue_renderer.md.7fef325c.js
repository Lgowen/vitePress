import{_ as s,A as a,V as t,E as p}from"./plugin-vue_export-helper.fc7452c3.js";const d='{"title":"\u6E32\u67D3\u5668 #","description":"","frontmatter":{},"headers":[],"relativePath":"vue/renderer.md","lastUpdated":1731465675970}',o={};function e(c,n,u,l,k,i){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u6E32\u67D3\u5668" tabindex="-1">\u6E32\u67D3\u5668 <a class="header-anchor" href="#\u6E32\u67D3\u5668" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u77E5\u9053\u5728 vue \u4E2D\uFF0C\u5176\u5B9E\u662F\u7528 vnode \u53BB\u63CF\u8FF0\u4E00\u4E2A DOM \u5143\u7D20\u7684\uFF0Cvnode \u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u63CF\u8FF0\u4E86\u5173\u4E8E\u8BE5 DOM \u5143\u7D20\u7684\u4E00\u4E9B\u4FE1\u606F\u3002 vue \u4E2D\u6709\u4E00\u4E2A\u6E32\u67D3\u5668\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E2A vnode \u6E32\u67D3\u6210\u4E00\u4E2A\u771F\u5B9E\u7684 DOM \u5143\u7D20\uFF0C\u5176\u4E2D\u7684 diff \u4E5F\u662F\u5728\u6E32\u67D3\u5668\u4E2D\u53BB\u5B9E\u73B0\u7684\uFF0C\u6BD4\u5982\u8BF4\u53EF\u4EE5\u5224\u65AD\u67D0\u4E2A vnode \u4E0A\u7684\u5C5E\u6027\u4FE1\u606F\uFF0C\u5224\u65AD\u5B83\u7684\u503C\u662F\u5426\u662F\u4E00\u4E2A\u53D8\u91CF\uFF0C\u53EF\u4EE5\u4EE3\u8868\u8FD9\u4E2A vnode \u662F\u5426\u5B58\u5728\u4E00\u4E2A\u52A8\u6001\u5C5E\u6027\uFF0C\u4ECE\u800C\u5728 diff \u5C42\u9762\u4E0A\u5FEB\u901F\u5BFB\u627E\u5230\u6539\u53D8\u7684\u5730\u65B9\uFF0C\u5E76\u8FDB\u884C\u6539\u53D8\u3002</p><div class="language-js"><pre><code>
<span class="token comment">/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */</span>
<span class="token keyword">function</span> <span class="token function">renderer</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5047\u5982\u8BE5vnode\u662F\u4E00\u4E2A\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mountElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
        <span class="token comment">// \u5047\u5982\u8BE5vnode\u662F\u4E00\u4E2A\u7EC4\u4EF6(\u8FD9\u4E2A\u7EC4\u4EF6\u6709\u53EF\u80FD\u662F\u51FD\u6570\u7EC4\u4EF6\u4E5F\u6709\u53EF\u80FD\u662F\u5BF9\u8C61\u7EC4\u4EF6)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mountObjectComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mountFunctionComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> HelloWorld <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;click me!&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */</span>
<span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFADOM\u5143\u7D20</span>

    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5047\u5982\u8BE5\u5C5E\u6027\u662Fon\u5F00\u5934 \u5219\u4E3A\u4E8B\u4EF6</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^on</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> event <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u622A\u53D6\u4E8B\u4EF6\u540D</span>
        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u7ED9el\u5143\u7D20\u7ED1\u5B9Aevent\u76D1\u542C\u4E8B\u4EF6</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u5B83\u7684\u5B69\u5B50\u662F\u4E2A\u5B57\u7B26\u4E32 \u90A3\u4E48\u662F\u4E2A\u6587\u672C\u8282\u70B9</span>
        <span class="token keyword">const</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
        el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>textNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u662F\u4E2A\u6570\u7EC4 \u6BCF\u4E00\u4E2Aitem\u662F\u4E00\u4E2Avnode \u6700\u7EC8\u90FD\u6302\u5728\u5176\u6839\u8282\u70B9\u5373el\u4E0A</span>
        vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">renderer</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u5FAA\u73AF\u904D\u5386\u9012\u5F52\u53BB\u521B\u5EFA\u6E32\u67D3\u5B69\u5B50\u8282\u70B9</span>
    <span class="token punctuation">}</span>

    container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token comment">// \u6302\u5728\u6839\u8282\u70B9\u4E0A</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5BF9\u8C61\u7EC4\u4EF6</span>
<span class="token keyword">const</span> objectComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;click me!&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u51FD\u6570\u7EC4\u4EF6</span>

<span class="token keyword">function</span> <span class="token function">functionComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;click me!&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> objectVnode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> functionComponent <span class="token comment">// \u8BE5vnode\u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> functionVnode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> objectComponent <span class="token comment">// \u8BE5vnode\u662F\u4E00\u4E2A\u5BF9\u8C61\u7EC4\u4EF6</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5904\u7406\u5BF9\u8C61\u7EC4\u4EF6</span>
<span class="token comment">/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */</span>
<span class="token keyword">function</span> <span class="token function">mountObjectComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> node <span class="token operator">=</span> vnode<span class="token punctuation">.</span>tag<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">mountElement</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5904\u7406\u51FD\u6570\u7EC4\u4EF6</span>
<span class="token comment">/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */</span>
<span class="token keyword">function</span> <span class="token function">mountFunctionComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> node <span class="token operator">=</span> vnode<span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">mountElement</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">renderer</span><span class="token punctuation">(</span>HelloWorld<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token comment">// \u5C06HelloWorld\uFF08vnode\uFF09\u6302\u8F7D\u5728body\u5143\u7D20\u4E0A</span>
<span class="token function">renderer</span><span class="token punctuation">(</span>objectVnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token comment">// \u5C06objectVnode \u7EC4\u4EF6 \u6302\u8F7D\u5728body\u5143\u7D20\u4E0A</span>
<span class="token function">renderer</span><span class="token punctuation">(</span>functionVnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token comment">// \u5C06functionVnode \u7EC4\u4EF6 \u6302\u8F7D\u5728body\u5143\u7D20\u4E0A</span>

</code></pre></div>`,3)]))}var m=s(o,[["render",e]]);export{d as __pageData,m as default};
