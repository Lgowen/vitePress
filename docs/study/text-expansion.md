# css实现多行文本展开收起 #



```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <meta charset="utf-8" />
    <style>
         .ioui-text-expansion {
      display: flex;
    }

    .ioui-text-expansion__text {
        position: relative;
        width: 425px;
        font-size: 28px;
        color: #002753;
        overflow: hidden;
        line-height: 1.5;
        max-height: 6em;
        text-align: justify;
    }

    .ioui-text-expansion__text::before {
        content: '';
          float: right;
          height: 100%;
          margin-bottom: -40px;
    }
    
    .ioui-text-expansion__text::after {
        content: '';
          width: 100vw;
          height: 100vh;
          position: absolute;
          box-shadow: inset calc(120px - 100vw) calc(1.45em - 100vh) 0 0 #f7f8fa;
          margin-left: -120px;
    }

    .ioui-text-expansion .ioui-text-expansion__button {
        position: relative;
        font-size: 24px;
        font-weight: bold;
        float: right;
        clear: both;
        line-height: 42px;
    }

    .ioui-text-expansion .ioui-text-expansion__button::before {
        content: '...';
          margin-right: 8px;
    }

    .ioui-text-expansion .ioui-text-expansion__button::after {
        content: '';
          display: inline-block;
          margin-bottom: 2px;
          margin-left: 4px;
          transition: transform 0.3s;
          border-top: 10px solid #002753;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
    }
  
    .ioui-text-expansion__text--expand {
      max-height: none;
    }
    .ioui-text-expansion__text--expand::after {
        visibility: hidden;
    }

    .ioui-text-expansion__text--expand .ioui-text-expansion__button::before {
        visibility: hidden;
      }
    .ioui-text-expansion__text--expand .ioui-text-expansion__button::after {
        transform: rotate(180deg);
      }
    
    </style>
</head>
<body>
    <div class="ioui-text-expansion">
        <div class="ioui-text-expansion__text">
          <div class="ioui-text-expansion__button">展开</div>
          我我晚啊啊手动萨达阿斯顿阿斯顿阿斯顿爱上大叔的撒打算的啊的爱上的撒的啊阿斯顿阿斯顿阿斯顿湿答答的爱上大的啊的啊撒撒爱上撒啊啊是爱上爱上撒爱上爱上
        </div>
      </div>
    <script>
        const container = document.querySelector('.ioui-text-expansion__text')
        const button = document.querySelector('.ioui-text-expansion__button')
        let isExpand = false
        button.addEventListener('click', () => {
            isExpand = !isExpand
            if (isExpand) {
                container.setAttribute('class', 'ioui-text-expansion__text ioui-text-expansion__text--expand')
                button.innerText = '收起'
            } else {
                container.setAttribute('class', 'ioui-text-expansion__text')
                button.innerText = '展开'
            }
        })
        
    </script>
</body>
</html>

```


```js
// 个人介绍

// native thread
// 这个线程主要负责原生渲染和调用原生能力。

// js thread
// js 线程用于解释和执行我们的 js 代码。在大多数情况下， react native 使用的 js 引擎是JSC(
// JavaScriptCore) ，在使用 chrome 调试时，所有的 js 代码都运行在 chrome 中，并且通过 websocket 与原生代码通信。此时的运行环境是 v8 。

// shadow thread
// 要渲染到界面上一个很重要的步骤就是布局，我们需要知道每个组件应该渲染到什么位置，这个过程就是通过 yoga 去实现的，这是一个基于 flexbox 的跨平台布局引擎。 shadow thread 会维护一个 shadow tree 来计算我们的各个组件在 native 页面的实际布局，然后通过 bridge 通知 native thread 渲染 ui 。

// Bridge 顾名思义就是 JS 和 Native 通信的一个桥梁, 所有的本地存储、图片资源访问、图形绘制、3D加速、网络访问、震动效果、NFC、原生控件绘制、地图、定位、通知等等很多功能都是由 Bridge 封装成 JS 接口以后注入 JS Engine 供 JS 调用

// 每一个支持 RN 的原生功能必须有同一个原生模块和一个 JS 模块, JS 模块方便调用其接口, 原生模块去根据接口调用原生功能实现原生效果

// Bridge 原生代码负责管理原生模块并能够方便的被 React 调用, 每个功能 JS 封装主要是对 React 做适配, JS 和 Native 之间不存在任何指针传递, 所有的参数均由字符串传递

// Bridge 各模块介绍
// RCTRootView

// RCTRootView 是 RN 加载的地方, 从这里开始有了 JS Engine. JS 代码被加载进来, 对应的原生模块也被加载进来, 然后 JS loop 开始
// RCTRootView 初始化代码完成后, 整个 React Native 运行环境就已经初始化好, JS 代码也加载完毕, 所有 React 的绘制都会有这个 RCTRootView 来管理
// 创建并持有 RCTBridge
// 加载 JS Bundle 初始化 JS 运行环境
// 初始化 JS 运行环境后会在 app 显示 loadingView
// JS 运行环境准备好就被加载视图 RCTRootContentView 替换加载视图
// 准备工作就绪之后就调用 AppRegistry.runApplication 正式启动 RN 代码, 从 Root 组件开始 UI 绘制
// RCTBridge

// 加载和初始化专用类, 用于前期 JS 的初始化和原生代码的加载
// 负责加载各个 Bridge 模块供 JS 调用
// 找到并注册实现了 RCTBridgeModule protocol 的类
// 创建持有 RCTBatchedBridge
// RCTBatchedBridge

// 负责 Native 和 JS 之间的相互调用, 也就是信息通信
// RCTJavaScriptLoader

// 实现远程代码的核心, 热更新, 开发环境代码加载. 静态 jsbundle 加载
// RCTContextExecutor

// 封装了 JS 和 Native 代码的互相调用逻辑
// RCTModuleData

// 加载管理所有与 JS 交互的原生代码, 把交互代码封装成 JS 模块
// RCTModuleMethod

// 记录所有原生代码的导出函数地址, 同时生成对应的字符串映射到改函数地址
// 翻译所有 J2N call
// MessageQueue

// RN 是不用 JS 引擎的 UI 渲染控件的, 但是会用到 JS 引擎的 DOM 操作管理能力来管理所有 UI 节点, 每次在写完 UI 组件代码后会交给 yoga 去做布局排版, 然后调用原生组件绘制
// MessageQueue 负责跳出 JS 引擎, 记录原生接口的地址和对应的 JS 函数名, 然后在 JS 调用该函数的时候把调用转发给原生接口


// 面试官你好，我是去年通过校招加入的滴滴。在滴滴里是做橙心优选供应链体系相关的系统。我自己个人这边主要负责的是供应商侧相关系统的业务	；。
// 一个是供应商小程序，主要负责的模块是有关商户权益和规则中心的内容。 
// 另外一个是vue技术栈的以表单驱动型的商户入驻H5项目，主要负责的内容是动态表单组件的封装和一些活动页面的开发。
// 后面在货运技术部主要是做滴滴货运企业版相关的业务，写过的一个树形表单业务组件，在部门里是复用的了，后续也是我这边主要在维护。

// 小程序和普通网页：
// 小程序渲染层和逻辑层是分开的两个线程
// 渲染层的界面使用了WebView 进行渲染；逻辑层采用JsCore线程运行JS脚本。一个小程序存在多个界面，所以渲染层存在多个WebView线程，这两个线程的通信会经由微信客户端做中转，逻辑层发送网络请求也经由微信客户端转发
// 普通web网页渲染线程和脚本线程是互斥的


// 供应商小程序：

// 渲染层和逻辑层分开

// 商户权益模块(全新开发)：主要是与另一位开发先对接好我们前端联调时用到组件的参数以及传参的定义，然后我那边主要碰上的一个问题就是关于弧形进度条的实现。
// 小程序本身没有svg标签（使用要依赖canvas和Cax引擎），也不太合适用canvas，所以考虑使用css去实现。
// 两个盒子，内外盒子宽度都是高度的两倍，overflow-hidden，内层盒子给左上和右上设置border-radius，transform-origin: 50% 100%，设置transform中心为该半圆的中心，默认初始值给个-180deg，然后根据具体的分段值换算加上对应的角度值就可以了。


// 使用flex布局后，scroll-view组件开启echance属性底部有大片空白区域。目前官方bug还没有修复，当时的做法是先暂时不开启这个属性。是在做新需求是发现的问题，并把之前存在的问题也给解决了

// flex: 
// flex-grow
// flex-shrink
// flex-basis

// 多弹窗问题：

// 树形组件：

// 一个折叠面板效果的bug：
// setTimeout最小延迟时间：chrome和safari 是1ms  firefox和ie是0ms

// 建议设置大于16.6ms，大多数浏览器的显示频率是16.7ms，假如setTimeout的时间小于16.7，那么会出现掉帧的情况，显示器16.7ms刷新间隔之前发生了其他绘制请求(setTimeout)，导致所有第三帧丢失。

// 第0ms: 屏幕未刷新，等待中，setTimeout也未执行，等待中；

// 第10ms: 屏幕未刷新，等待中，setTimeout开始执行并设置图像属性left=1px；

// 第16.7ms: 屏幕开始刷新，屏幕上的图像向左移动了1px， setTimeout 未执行，继续等待中；

// 第20ms: 屏幕未刷新，等待中，setTimeout开始执行并设置left=2px;（丢失了）

// 第30ms: 屏幕未刷新，等待中，setTimeout开始执行并设置left=3px;

// 再次刷新时，屏幕展示的已经是3px了，丢失了2px的画面。

// 使用了setTimeout掉帧，解决方案：requestAnimation
// requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成。
// 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流。

// 默认外层包裹(wrapper)的是：height：0，display：none
// 展开：先将display：none，改变为display：block；然后在nextTick去获取内容高度，设置wrapper高度(为了保证height的变化使得动画有过渡效果)
// 收起：先设置高度为0，再改变display：none

// 移动端适配：

// switch-domain: 由于后端环境过多，有时候会出现多人在同一模块进行需求开发的情况，后面可能会合并到同一分支上一起上线，但是使用的后端环境不一样，小程序体验版又只有一个，测试和产品验收的时候会造成冲突。所以写了这样一个组件。主要的逻辑是默认取稳定环境，在用户切换的时


// 目前的项目是：
// 商户入驻H5是vw、vh + px，可能当时是考虑到使用人群用到的机型比较新，所以没有向下兼容一些老机型的方案。
// 滴滴货运企业版H5: rem，给顶层HTML元素设置一个font-size值，该font-size的值会随着屏幕宽度变化而变化。默认在375宽度像素底下是1rem是50px, 项目中直接写rem。
// 一般设计稿给的图是750的图，所以按750的话默认1rem是100px，所以上面给的24px的话，就要写成 (24 / 100) = 0.24rem。

// 目前新建base项目中配置是以750是去配置的

// const base = 75
// var width = docEl.getBoundingClientRect().width 获取可视宽度
// var scale = width / 750 相对于750宽的缩放比例

//  viewport-fit=cover 兼容iphoneX 底部安全区域
// safe-area-inset-bottom 安全区域到底部的距离
// padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
//  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */


// 用postcsstorem,进行配置，这样项目中直接写px就可以了

// 我知道的还有别的方案是：媒体查询

// 项目的可维护性差（逻辑和业务耦合性太多，开发人员不固定每次修改内部逻辑，代码量庞大）
// 存在重复工作量（不同表单需要重写很多一样的代码）
// 需求越来越个性化（显隐、校验、表单项自由组合，根据级别不同远程动态渲染）


// 想要解决这些问题，这就需要引入更清晰的表单描述以及远程动态渲染等核心能力，所以，就想尝试能否换一种开发思路,借助 JSON-schema 强大的表达能力，解决我们的项目中的痛点

// 实现过程：通过json数据格式来动态渲染表单内容

// 1、定义出json数据格式，key-value代表的含义； 比如说component 代表需要渲染的类型、filed代表表单对应的渲染字段

// 2、如何根据component字段自动渲染对应的组件
// 需要在全局注册所有相对应的组件，利用Vue.component在配合component组件的is属性根据字段自动渲染

// 3、需要设计更多的静态属性，来达到通过配置控制表单的能力
// 在json中定义attrs静态属性集合，比如是否开启校验，表单的lable值，错误信息文案等
// 通过$attrs属性将设置的attrs给到每个具体的表单项,这里将逻辑处理成mixins同一处理

// 4、动态属性如何设计
// 在表单中可能会有很多的动态属性，比如显示、底部border、禁用等
// 按上一步的逻辑可以先把数据定义好，这时添加dynamicAttrs将动态属性设置成方法，只需要在静态属性之前将其拦截并替换即可

// 5、表单项的方法如何处理
// 每个表单项可能会有很多的方法，比如选择日期选择完，输入框输入等
// 一样的逻辑，我们可以在json中配置一个on的属性，用来处理表单的事件
// 那定义的事件如何和表单的原有事件结合，这里用到了$listeners 将传如的on事件集合给每个子表单项，在里面重写可以原生表单事件

// 6、表单如何校验
// 表单中是不包含任何按钮事件的，因此触发校验需要外部事件，因此我们需要将校验的方法传递到外层组件供其调用
// Vue2中外层组件通过ref拿到组件实例，也就能拿到内部封装的方法，调用validate表单根据过滤掉不需要校验的，再根据外部动态传入的校验规则校验，触发对应的错误提示

// 7、其他一些组件的单独渲染 slot
// 在业务开发中可能不能涵盖所有的组件，比如图片上传等，这时需要form组件支持自定义的componetn进行渲染，在渲染的时候通过配置项slot去判断，其他逻辑保持不变


// vue2和vue3


// vue-router: 
// 将需要进行懒加载的子模块打包成独立的文件（children chunk）；
// 借助函数来实现延迟执行子模块的加载代码；
// hash: 监听hashchange方法， 根据匹配hash进行dom操作
// history: 监听popstate方法， 使用pushState 和 replaceState 改变url地址不发请求
// 当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。

// 响应式数据处理的方式变了，
// Object.defineProperty -> Proxy  
// watch 
// computed
// nextTick：Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

// vue3直接使用了Promise.then

// Babel

// 1. 解析：词法分析解析成token数组，语法分析将token数组转换成ast（词法分析和语法分析，将代码解析成抽象语法树（AST））
// 2. 转换： 得到ast后，babel-traverse深度优先遍历应用于转换器，transformer，对节点进行增删改的操作。
// 3. 生成： 拿到转换后的ast后，babel-generator 再转换成js代码，深度遍历ast，然后构建生成对应的代码字符串


// // babel.config.js
// 真实的情况是babel只是提供了一个“平台”，让更多有能力的plugins入驻我的平台，
// 是这些plugins提供了将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法的能力。
// module.exports = {
//   presets: ["@babel/env”],
//   plugins: ["@babel/plugin-transform-runtime”, { cores: { version: ‘3’ }}]
// };

// Preset-env： 将es6版本后的代码，语法层面写法例如let，const，箭头函数等写法转换成浏览器能够识别的es5语法。构建时转译。

// polyfill： api层面，Promise、includes、map

// * 对辅助函数的复用，解决转译语法层时出现的代码冗余
// * 解决转译api层出现的全局变量污染


// Webpack

// 从入口开始需要逐步经历语法解析、依赖收集、代码转译、打包合并、代码优化，最终将高版本的、离散的源码编译打包成低版本、高兼容性的产物代码

// Tree-shaking： 清除多余无用js代码，减少包体积，sideEffects： false

// Plugins:
// 加入自定义的构建行为，使 webpack 可以执行更广泛的任务，拥有更强的构建能力。
// 插件（Plugin）可以贯穿 Webpack 打包的生命周期，执行不同的任务
// loader: 
// webpack 默认支持处理 JS 与 JSON 文件，其他类型都处理不了，这里必须借助 Loader 来对不同类型的文件的进行处理
// Loader 就是将 Webpack 不认识的内容转化为认识的内容，
// Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。

// Webpack 启动后会从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。 每找到一个 Module， 就会根据配置的 Loader 去找出对应的转换规则，对 Module 进行转换后，再解析出当前 Module 依赖的 Module。 这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。最后 Webpack 会把所有 Chunk 转换成文件输出6

// 1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
// 2. 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
// 3. 确定入口：根据配置中的 entry 找出所有的入口文件。
// 4. 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
// 5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
// 6. 输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
// 7. 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。


// vite

// no-bundle + esbuild(依赖预构建) 冷启动速度快
// 利用浏览器支持 esmodule 实现了真正的按需加载
// 基于esmodule的HMR，同时利用缓存策略提升速度，实现即时的模块热更新。

// 按需编译：用户代码这一类频繁变动的模块，直到被使用时才会执行编译操作

// 启动了一个用于承载资源服务的 service；二是使用 esbuild 预构建 npm 依赖包。之后就一直躺着，直到浏览器以 http 方式发来 ESM 规范的模块请求时，Vite 才开始“按需编译”被请求的模块。

// url输入到浏览器渲染：

// 1. 网络请求
// - url解析：判断输入内容是文本还是url还是关键字，如果是url会把不完整的url合成完成的url。协议+主机+端口+路径
// 如果输入的是内容会进行转译：encodeURI（编码整个URL，不包括？&；/等）和encodeURIComponent（编码参数部分）

// - 检查缓存：强缓存（memory cache和disk cache）判断过期时间expires和cache-control 和协商缓存（如果资源缓存过期带着资源标识向浏览器发起请求，校验缓存是否还可以继续使用。如果可以返回304，不携带数据。如果不可以则会返回200和新的资源，然后再把资源和标识缓存在本地）

// - DNS解析：浏览器的DNS缓存 操作系统的DNS缓存 路由器的DNS缓存 向服务商的DNS服务器查询
// 向全球13台根域名服务器查询（递归查询）

// - 建立TCP连接：
// 三次握手：
// 客户端发送建立连接请求；
// 服务端发送建立连接确认，此时服务端为该TCP连接分配资源；
// 客户端发送建立连接确认的确认，此时客户端为该TCP连接分配资源；

// 但假如这时服务端收到一个失效的建立连接请求，我们会发现服务端的资源被浪费了——此时客户端并没有想给它传送数据，但它却准备好了内存等资源一直等待着。
// 所以说，三次握手是为了保证客户端存活,防止服务端在收到失效的超时请求造成资源浪费。

// - 协商加密密钥——TLS握手

// 浏览器给服务器发送一个随机数client-random和一个支持的加密方法列表
// 服务器把另一个随机数server-random、加密方法、公钥传给浏览器
// 浏览器又生成另一个随机数pre-random，并用公钥加密后传给服务器
// 服务器再用私钥解密，得到pre-random
// 浏览器和服务器都将三个随机数用加密方法混合生成最终密钥

// 通过以上步骤可知，在TLS握手阶段，两端使用非对称加密的方式来通信，但是因为非对称加密损耗的性能比对称加密大，所以在正式传输数据时，两端使用对称加密的方式。

// 摘要算法保证信息完整性
// 数字证书(数字签名)可以验证服务器身份

// 数字证书需要向有权威的认证机构(CA)获取授权给服务器。首先，服务器和CA机构分别有一对密钥(公钥和私钥)，然后是如何生成数字证书的呢？

// CA机构通过摘要算法生成服务器公钥的摘要(哈希摘要)
// CA机构通过CA私钥及特定的签名算法加密摘要，生成签名
// 把签名、服务器公钥等信息打包放入数字证书，并返回给服务器

// 服务器配置好证书，以后客户端连接服务器，都先把证书发给客户端验证并获取服务器的公钥。
// 证书验证流程：

// 使用CA公钥和声明的签名算法对CA中的签名进行解密，得到服务器公钥的摘要内容
// 再用摘要算法对证书里的服务器公钥生成摘要，再把这个摘要和上一步得到的摘要对比，如果一致说明证书合法，里面的公钥也是正确的，否则就是非法的

// - 发送请求&接收响应

// - 关闭TCP连接
// 四次挥手：
// 客户端请求释放连接，仅表示客户端不再发送数据了；
// 服务端确认连接释放，但这时可能还有数据需要处理和发送；
// 服务端请求释放连接，服务端这时不再需要发送数据时；
// 客户端确认连接释放

// 因为在第二次握手结束后，服务端还有数据传输，所以没有办法把第二次确认和第三次合并。

// 客户端在发送完第四次的确认报文段后会等待2MSL才正真关闭连接，MSL是指数据包在网络中最大的生存时间。目的是确保服务端收到了这个确认报文段，


// 2. 浏览器渲染

// 1. 浏览器解析HTML、CSS生成对应的DOM tree 和 CSS rule tree
// 2. 浏览器引擎根据DOM tree 和 CSS rule tree生成对应的 render tree（这个部分一些display：none样式的dom元素就不会存在于render tree），然后计算每一个element的位置，这也是回流跟重绘的过程
// 3. 最后调用GUI API绘制

// async：异步加载js脚本，加载完成后就执行，会阻塞html解析
// defer：异步加载js脚本，延迟执行，等待html解析完再执行


// 1. 200 请求成功
// 2. 301 永久重定向
// 3. 302 临时重定向
// 4. 304 资源缓存    
// * last-modified/if-modified-since 一般用作 index.html 等不带 hash 的资源，
// * Etag
//   5. 400 错误的请求
//   6. 401 鉴权失败
//   7.  403 禁止访问
//   8. 404 找不到资源
//   9. 500 服务器错误
//   10. 502 可能是网关上游服务挂了，网关得不到响应
//   11. 503 服务器繁忙，流量太大
//   12. 504 网关上游请求超时，网关响应超时了

// HTTP是明文传输，不安全的，HTTPS是加密传输，安全的多
// HTTP标准端口是80，HTTPS标准端口是443
// HTTP不用认证证书免费，HTTPS需要认证证书要钱
// 连接方式不同，HTTP三次握手，HTTPS中TLS1.2版本7次，TLS1.3版本6次
// HTTP在OSI网络模型中是在应用层，而HTTPS的TLS是在传输层
// HTTP是无状态的，HTTPS是有状态的


// HTTPS

// 加密 数据一致性 身份认证

// http + SSL(TLS) = https

// X.509证书：(公开密钥)证书的标准格式，将加密密钥与(个人或组织)进行安全的关联

// 对称加密
// 非对称加密
// 身份认证


// 机密性：
// tls使用 非对称加密 和 对称加密 的混合加密方式实现机密性

// 通信刚开始的时候，非对称加密解决密钥交换的问题。
// 然后用随机数产生对称算法使用的会话密钥，再用公钥加密。
// 对方拿到密文后用私钥解密，取出会话密钥。
// 这样双方就实现了对称密钥的安全交换。


// 摘要算法：
// md5 验证文件完整性
// HMAC = MAC + Hash值
// MAC：通过MAC算法从消息和密钥中生成，允许验证者检测到消息内容的任何更改，从而保证了消息的数据完整性。

// 认证：
// 私钥加密，公钥解密。
// 私钥+摘要算法，实现数字签名

// 数字签名的认证问题

// 必须发布经过认证的公钥，才能解决信任问题。

// CA：证书认证机构

// XSS：
// 存储型：比如说评论恶意代码，会落库，别的用户打开论坛会在用户浏览器端运行
// 反射型：恶意代码被拼接到URL上，被拼接到HTML中返回。
// DOM型：恶意代码被拼接到URL上，被前端JavaScript代码执行。（前端自身）
// 特点：恶意代码被拼接到URL上，被前端JavaScript代码执行。
// 攻击者拼接出包含恶意代码的受害网站URL，诱导用户点击；
// 用户点击该URL；
// 前端 JavaScript 取出 URL 中的恶意代码，恶意代码在用户的浏览器端运行；
// 上述三种XSS攻击的目的都一致：恶意代码在浏览器端运行后，窃取用户的本地存储数据：通过document.cookie获取用户的身份凭证，然后通过网络请求将数据发送给恶意服务器。
// 在前端渲染时，要谨慎使用.innerHTML、.outerHTML、document.write()等直接插入HTML的API，其来源必须是可信的。
// 此外location、onclick、onerror、onload、onmouseover、还有 <a> 标签的 href 都可以把字符串当作代码执行。


// CSRF：

// 用户登录受害网站，浏览器把获取的身份凭证保存在本地cookie中；
// 用户被诱导打开黑客网站，黑客网站向受害网站服务器发起一个恶意请求，由于cookie的取用规则，这时浏览器会自动带上第一步中的身份凭证；
// 受害网站服务端对恶意请求校验，发现有身份凭证，恶意请求被成功受理；

// 1. 检验请求来源
// 2. SameSite cookie（向浏览器注入cookie时，开发者可以标注哪些请求才会带上。）
// 3. CSRF Token
// 4. 双重cookie，相较于与token，双重cookie不需要服务器做额外扩容。只需要在请求中加一个额外的字段，其值和cookie一致。因为上文提到过，攻击者没法获取到cookie，只是在发起请求时会携带。
// 在服务端收到请求时，如果没有和cookie值一样的额外字段，就可以认为是来自恶意网站。


//  1       2     3      4      5
// li1     li2    li3    li4    li5

//  1       2     6      3      4     5
// li1     li2    li6    li3    li4    li5

// 这样如图中的 li3 和 li4 和li5就不会重新渲染，因为元素内容没发生改变，对应的位置关系也没有发生改变。
// 这也是为什么 v-for 必须要写 key，而且不建议开发中使用数组的 index 作为 key 的原因


// Diff算法优化

// 1. 同级比较
// 2. 比较标签名，判断是否相同节点。假如标签名不同，则直接将newVnode生成真实DOM节点，插入到oldVnode对应真实DOM元素下一个节点的前面，移除oldVnode对应的真实DOM。
// 3. 比较key，如果标签名相同，key也相同。就会被认为是相同节点。

// - key 的作用主要是为了更高效的更新虚拟 DOM，因为它可以非常精确的找到相同节点，因此 patch 过程会非常高效
// - Vue 在 patch 过程中会判断两个节点是不是相同节点时，key 是一个必要条件。比如渲染列表时，如果不写 key，Vue 在比较的时候，就可能会导致频繁更新元素，使整个 patch 过程比较低效，影响性能
// - 应该避免使用数组下标作为 key，因为 key 值不是唯一的话可能会导致上面图中表示的 bug，使 Vue 无法区分它他，还有比如在使用相同标签元素过渡切换的时候，就会导致只替换其内部属性而不会触发过渡效果
// - 从源码里可以知道，Vue 判断两个节点是否相同时主要判断两者的元素类型和 key 等，如果不设置 key，就可能永远认为这两个是相同节点，只能去做更新操作，就造成大量不必要的 DOM 更新操作，明显是不可取的


// SameVnode(判断是不是同一节点的函数)

// Patch

// * vnode 不存在，oldVnode 存在，就删掉 oldVnode
// * vnode 存在，oldVnode 不存在，就创建 vnode
// * 两个都存在的话，通过 sameVnode 函数(后面有详解)对比是不是同一节点
// * 如果不是同一节点，就把 vnode 挂载到 oldVnode 的父你元素下
//     * 如果组件的根节点被替换，就遍历更新父节点，然后删掉旧的节点。如果新的 vnode 的根节点存在，就是说根节点被修改了，就需要遍历更新父节点
// * 如果是同一节点的话，通过 patchVnode 进行后续对比节点文本变化或子节点变化
// 如果 oldVnode 和 vnode 的引用地址是一样的，就表示节点没有变化，直接返回
// 如果 vnode 不是文本节点也不是注释的情况下
// * 如果 vnode 和 oldVnode 都有子节点，而且子节点不一样的话，就调用 updateChildren 更新子节点
// * 如果只有 vnode 有子节点，就调用 addVnodes 创建子节点
// * 如果只有 oldVnode 有子节点，就调用 removeVnodes 删除该子节点
// * 如果 vnode 文本为 undefined，就删掉 vnode.elm 文本
// 如果 vnode 是文本节点但是和 oldVnode 文本内容不一样，就更新文本




// CORS：

// CORS把请求分成简单请求和复杂请求，划分的依据是“是否会产生副作用”。
// 简单贴一下定义，同时满足下面这两个条件的是简单请求
// 请求方法是HEAD/GET/POST
// 请求体的文件类型只能是form-urlencoded、form-data、text/plain
// 预检请求：

// 浏览器发起预检请求，带上请求的来源origin，不包含请求体；
// 服务器返回检查结果，配置CORS头；
// 浏览器发起真正请求；
// 浏览器返回数据；


// HTTP

// 1.0
// - 采用的是“请求-应答”模式，每次请求响应都要新建一个连接，完成之后断开连接（无连接）
// - 一发一收，形成了一个先进先出的串行队列，排在前面的请求先处理，如果前面的请求耗时很长，就会导致后面的请求一直阻塞无法响应（也就是著名的队头堵塞）

// 1.1
// - 支持长连接，请求头添加Connection: Keep-Alive，建立一个TCP连接后客户端到服务端的连接持续有效，可以被多个请求复用
// - 可以发送/接收多个http请求/响应，当出现对服务器的后续请求时，不需要重新建立连接

//   长连接：
// - 减少CPU及内存的使用，因为不需要经常建立和关闭连接
// - 支持管道化的请求及响应模式
// - 因为减少了TCP请求，所以减少了网络堵塞
// - 减少了后续请求的响应时间，因为不需要等待建立TCP、握手、挥手、关闭TCP的过程
// - 发生错误时，也可以在不关闭连接的情况下进行错误提示


// 缺点： 有可能造成队头堵塞

// 如何避免长连接带来的问题：

// - 客户端请求头声明：Connection：close，本次请求完毕后关闭
// - 服务端配置：如Nginx，设置keepalive_timeout设置长连接超时时间，keepalive_requests设置长连接请求次数上限

// 管道化：

// - 在同一个TCP连接上可以不用等上一个请求回来再发请求出去，减少了整体响应时间，但是服务器还是会按照请求的顺序响应，所以如果有多个请求，如果前面的请求响应慢或者一直没有响应，就会导致后面的请求无法响应，就产生了队头阻塞

// * 管线化机制通过持久连接完成，在http1.1版本才支持
// * 只有GET请求和HEAD请求才可以进行管线化，而POST有所限制
// * 初次创建连接时不应启动管线化机制，因为服务器不一定支持http1.1版本的协议


// 并发连接：一个域名可以并发6～8个，chrome6个，firefox8个
// 域名分发：多准备几个二级域名，可以让不同的资源到不同的二级域名上取，它们都指向同一台服务器，这样就能够并发更多的长连接了



// 2.0

// - 头部压缩
//     - 压缩算法
//         - 首先是在服务器和客户端之间建立哈希表，将用到的字段存放在这张表中，那么在传输的时候对于之前出现过的值，只需要把索引传给对方即可，对方拿到索引查表就行了
//         - 其次是对于整数和字符串进行哈夫曼编码，哈夫曼编码的原理就是先将所有出现的字符建立一张索引表，然后让出现次数多的字符对应的索引尽可能短，传输的时候也是传输这样的索引序列，可以达到非常高的压缩率。
// - 多路复用
//     - HTTP队头堵塞
//     - 二进制分帧
//         - 把报文全部换成二进制格式
//         - 原来Headers + Body的报文格式如今被拆分成了一个个二进制的帧，用Headers帧存放头部字段，Data帧存放请求体数据。分帧之后，服务器看到的不再是一个个完整的 HTTP 请求报文，而是一堆乱序的二进制帧。这些二进制帧不存在先后关系，因此也就不会排队等待，也就没有了 HTTP 的队头阻塞问题。
//         - 通信双方都可以给对方发送二进制帧，这种二进制帧的双向传输的序列，也叫做流(Stream)。HTTP/2 用流来在一个 TCP 连接上来进行多个数据帧的通信，这就是多路复用的概念。
//         - 首先要声明的是，所谓的乱序，指的是不同 ID 的 Stream 是乱序的，但同一个 Stream ID 的帧一定是按顺序传输的。二进制帧到达后对方会将 Stream ID 相同的二进制帧组装成完整的请求报文和响应报文
// - 允许服务端主动推送数据给客户端：
//     - 比如浏览器请求一个 HTML 文件，服务器就可以在返回 HTML 的基础上，将 HTML 中引用到的其他资源文件一起返回给客户端，减少客户端的等待。
// - 



// 3.0

// http: 
// 特点：
// 1. 无连接：每请求一次就要连接一次，请求结束就会断掉，不会保持连接
// 2. 无状态：每一次请求都是独立的，请求结束不会记录连接的任何信息，减少了网络开销（也是缺点）
// 3. 灵活：根据http头的Content-type属性，可以传输任意数据类型的数据对象（文本、图片、视频）
// 4. 简单快速：

// 缺点：


// less-loader的原理(面试点)：主要是借助less模块的render方法，将less语法进行转换成css语法，然后返回或者额调用this.callback()传递给下一个loader。但是由于less-loader原本设计的时候，是想让less-loader可以作为最后一个loader使用的，所谓的最后一个loader，也就是说最后的返回值是一个js模块，也就是说module.exports = xxx这种，所以less-loader在返回结果的时候，将转换后的内容，外面套了一层module.exports = 转换后的内容。

// 那么这里变成了module.exports导出后，给到css-loader，css-loader只是处理了import、url等语法，将内容给到了style-loader，style-loader也就要跟着改变，因为style-loader的作用是创建一个style脚本，将css内容包裹在style标签中去，然后把style插入到document.head中。那么这里的关键就是拿到样式内容，这个内容刚才说了，被module.exports包裹了，那怎么拿到？直接require就可以了，因为module.exports本来就是js模块的导出格式，所以直接require就可以了。

// 实际上，在真正的style-loader、css-loader和less-loader的执行过程是这样的(面试点)：

// ​ 先执行loader的pitch函数，pitch函数是从左往右的，从上到下的，也就是先执行style-loader的pitch，这个函数主要是创建一个script脚本，这个脚本主要是创建一个style标签，style标签的innerHTML就是css样式，然后将style标签插入document.head中，然后将这个script脚本返回。注意，这边是有返回值的。pitch-loader一旦有返回值，那么后面的css-loader和less-loader都将不会直接，也不会执行当前loader的normal-loader，既然都不会执行了，那么style标签的css内容哪里来呢？其实，他在创建style标签后，它又require了css-loader和less-loader这两个内联loader，是走了内联loader才获取到的。内联loader从右往左，从下往上，也就是先执行less-loader，然后执行css-loader，最后将内容返给stylel-loader，这样才得到了css内容，赋值给style标签的innerHTML，然后插入到document.head中，这样才完成了整个样式的loader处理。

```