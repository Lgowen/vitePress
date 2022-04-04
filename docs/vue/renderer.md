# 渲染器

我们知道在 vue 中，其实是用 vnode 去描述一个 DOM 元素的，vnode 实际上就是一个对象，这个对象描述了关于该 DOM 元素的一些信息。
vue 中有一个渲染器，可以将这个 vnode 渲染成一个真实的 DOM 元素，其中的 diff 也是在渲染器中去实现的，比如说可以判断某个 vnode 上的属性信息，判断它的值是否是一个变量，可以代表这个 vnode 是否存在一个动态属性，从而在 diff 层面上快速寻找到改变的地方，并进行改变。

```js

/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */
function renderer(vnode, container) {
    // 假如该vnode是一个节点
    if (typeof vnode.tag === 'string') {
        mountElement(vnode, container)
        // 假如该vnode是一个组件(这个组件有可能是函数组件也有可能是对象组件)
    } else if (typeof vnode.tag === 'object') {
        mountObjectComponent(vnode, container)
    } else if (typeof vnode.tag === 'function') {
        mountFunctionComponent(vnode, container)
    }
}

const HelloWorld = {
    tag: 'div',
    props: {
        onClick: () => { alert('Hello World!') }
    },
    children: 'click me!'
}

/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */
function mountElement(vnode, container) {
    const el = document.createElement(vnode.tag) // 创建DOM元素

    Object.keys(vnode.props).forEach(key => {
      // 假如该属性是on开头 则为事件
      if (/^on/.test(key)) {
        const event = key.substr(2).toLowerCase() // 截取事件名
        el.addEventListener(event, vnode.props[key]) // 给el元素绑定event监听事件
      }
    })

    if (typeof vnode.children === 'string') {
        // 如果它的孩子是个字符串 那么是个文本节点
        const textNode = document.createTextNode(vnode.children)
        el.appendChild(textNode)
    } else if (Array.isArray(vnode.children)) {
        // 如果是个数组 每一个item是一个vnode 最终都挂在其根节点即el上
        vnode.children.forEach(item => renderer(item, el)) // 循环遍历递归去创建渲染孩子节点
    }

    container.appendChild(el) // 挂在根节点上
}

// 对象组件
const objectComponent = {
    render: () => {
        return {
            tag: 'div',
            props: {
              onClick: () => { alert('Hello World!') }
            },
            children: 'click me!'
        }
    }
}

// 函数组件

function functionComponent() {
    return {
        tag: 'div',
        props: {
           onClick: () => { alert('Hello World!') },
        }
        children: 'click me!'
    }
}

const objectVnode = {
    tag: functionComponent // 该vnode是一个函数组件
}

const functionVnode = {
    tag: objectComponent // 该vnode是一个对象组件
}

// 处理对象组件
/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */
function mountObjectComponent(vnode, container) {

    const node = vnode.tag.render()

    mountElement(node, container)
}

// 处理函数组件
/**
 * @param {object} vnode
 * @param {HTMLElement} container
 */
function mountFunctionComponent(vnode, container) {

    const node = vnode.tag()

    mountElement(node, container)
}

renderer(HelloWorld, document.body) // 将HelloWorld（vnode）挂载在body元素上
renderer(objectVnode, document.body) // 将objectVnode 组件 挂载在body元素上
renderer(functionVnode, document.body) // 将functionVnode 组件 挂载在body元素上

```
