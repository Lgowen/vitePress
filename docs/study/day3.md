# 浏览器渲染 #

浏览器解析HTML、CSS、JS，生成**DOM tree**和**CSS rules tree**，CSS rules tree会匹配对应的DOM节点且赋上style，然后生成对应的**render tree**，在这里render tree并不等同于DOM tree，因为一些带有**display：none**样式的Element是不会出现在render tree上的，然后计算它们的**位置与大小**，最后通过**Native GUI**的API进行绘制

> 建议script标签写在body底部的原因: html解析器在遇到js脚本的时候会阻塞DOM的构建，会将控制权转移给js引擎，等待js脚本执行完毕后继续构建DOM


> 因为js是可以更改样式的，但是更改样式前需要拿到完整的CSSOM，但是假如在执行js脚本时还没有拿到完整的CSSOM，那么浏览器必然会延迟脚本执行和DOM的构建，等待CSSOM下载和构建完毕


> 也就是说在这种情况下浏览器会先下载和构建CSSOM，然后执行js脚本，然后再构建DOM


**asnyc和defer**

1. async: 该属性会异步加载js脚本，加载完成后会立即执行（该阶段会阻塞DOM的构建），当该脚本执行完毕时再继续构建DOM
2. defer: 该属性会异步加载js脚本，DOM构建完成后再执行该脚本（延迟执行）

**渲染页面时常见哪些不良现象**

- **白屏**：有些浏览器渲染机制（比如chrome）要先构建DOM树和CSSOM树，构建完成后再进行渲染，如果CSS部分放在HTML尾部，由于CSS未加载完成，浏览器迟迟未渲染，从而导致白屏；也可能是把js文件放在头部，脚本会阻塞后面内容的呈现，脚本会阻塞其后组件的下载，出现白屏问题。

- **FOUC**：主要指的是样式闪烁的问题，由于浏览器渲染机制（比如firefox），在 CSS 加载之前，先呈现了 HTML，就会导致展示出无样式内容，然后样式突然呈现的现象。会出现这个问题的原因主要是 css 加载时间过长，或者 css 被放在了文档底部。


**浏览器架构**

 * 用户界面
   * 主进程
   * 内核 
       * JS 引擎线程 
           * 执行栈
       * 渲染引擎线程（调用GUI API渲染页面 -> 与JS 主线程互斥）
       * 浏览器事件处理线程（将click、mouse等UI交互事件发生后，将要执行的回调函数放入到任务队列中）
       * http异步网络请求线程（处理http请求: ajax、fetch，处理用户的get、post等请求，等返回结果后将回调函数推入到任务队列）
       * 定时触发器线程 （处理setTimeout、setInterval，等待时间结束后，会把执行函数推入任务队列中）
       * 任务队列
            * 微任务 (Promise.then函数中的回调函数)
            * 宏任务 (setTimeout的回调函数、setIntetval回调函数等)


**浏览器渲染时机**

js线程执行scirpt脚本，当执行栈内所有同步任务执行完毕后，执行本轮事件循环中的微任务，当该轮事件循环结束后，执行栈为空，这个时候会去尝试DOM的渲染（为什么是尝试，因为这一段js中可能没有涉及DOM的修改，如果有的话会去渲染，没有的话会忽略这一步），然后再触发事件循环机制。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="button" onclick="alert('hello world!')">点我</button>
    <!-- 点击该button等同于以下event相关代码的执行 -->
    <!-- 可以理解为浏览器的点击、鼠标事件会交给浏览器事件处理线程去处理，然后 -->

    <script>
        console.log('同步任务执行中')
        Promise.resolve().then(() => console.log('执行微任务'))
        setTimeout(() => console.log('执行宏任务'), 0)
        const event = new Event('click') // 新建一个click事件
        button.dispatchEvent(event) // button派发这个click事件
        console.log('本轮同步任务执行完毕')
    </script>
    <!-- script脚本是一个同步任务，在执行代码的过程中，button派发了click事件，阻塞了DOM的渲染 -->
</body>
</html>
```

> 注意
与浏览器原生事件不同，**原生事件**是由DOM派发的，并通过event loop**异步调用**事件处理程序，而**dispatchEvent()**则是**同步调用**事件处理程序。在调用dispatchEvent()后，所有监听该事件的事件处理程序将在代码继续前执行并返回。