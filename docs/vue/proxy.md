# 响应式数据 #


```js


const data = { name: 'Lgowen', age: 18 }

const proxyData = new Proxy(data, {
    get(target, key) {

        track(target, key)

        return target[key]
    },
    set(target, key, value) {

        target[key] = value

        trigger(target, key) // 在响应式数据改变时，触发对应副作用函数
    }
})

const bucket = new WeakMap() // 桶 -> 存放target中每一个属性及其对应所有依赖

// 追踪响应式数据(收集依赖)
// WeakMap: {
//     name: new Map() -> new Set() -> key --- effentFn1 effentFn2
//     age: new Map() -> new Set() -> key --- effentFn3 effentFn4
// }
function track(target, key) {
    
    if (!activeEffect) return // 如果当前没有激活的副作用函数则返回

    const depsMap = bucket.get(target) // 获取这个target的一个依赖Map ->  { key: Set }
    
    if (!depsMap) {
        bunk.set(key, (depsMap = new Map())) // 如果当前这个target没有Map 则新建一个
    }

    const deps = depsMap.get(key) // 获取这个key对应的依赖Set -> [effectFn1, effectFn2]

    if (!deps) {
        depsMap.add(key, (deps = new Set())) // 如果当前这个key没有对应的Set 则新建一个
    }

    deps.add(activeEffect) // 添加副作用函数

    activeEffect.deps.push(deps) // 往当前激活的副作用函数身上添加依赖(为了记录所有的依赖)

}

// 数据改变时触发对应的副作用函数
function trigger(target, key) {
    
    const depsMap = bucket.get(target) // 获取target对应的Map

    if (!depsMap) return

    const effects = depsMap.get(key) // 获取副作用函数

    const newEffects = new Set()

    effects && effects.forEach(fn => {
        // 避免副作用函数嵌套导致无限循环
        // 如果当前触发的副作用函数与当前激活的副作用函数相同的话，则不重复触发，避免无限递归调用，导致栈溢出
        // effect(() => proxyData.age++) 避免该情况
        if (fn !== activeffect) {
            newEffects.add(fn)
        }
    })
    // effects && effects.forEach(fn => fn()) // 执行副作用函数

    newEffects.forEach(effectFn => {
        if (effectFn.options.scheduler) {
            // 如果存在事件调度器 则按传进来的去执行
            // effectFn.options.scheduler(effectFn)
            jobQueue.add(effectFn)

            flushJob()
        } else {
            effectFn()
        }
    }) // 避免在清除依赖时又同时在添加依赖导致死循环
}


let activeEffect // 当前激活的副作用函数

const effectStack = [] // 栈 -> 保证当前执行的副作用函数是对应的(在effect嵌套时)


function cleanup(effectFn) {

    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn) // 清除当前副作用函数 
    }
    
    effectFn.deps.length = 0 // 重置副作用函数的依赖
}

function effect(fn, options = {}) {

    const effectFn = () => {

        cleanup(effectFn) // 在执行副作用函数之前先清除所有与副作用函数相关的依赖

        activeEffect = effectFn // 将当前副作用函数赋值给全局当前激活的副作用

        effectStack.push(activeEffect) // 栈中存放当前执行的副作用函数(栈顶存放的永远是嵌套副作用函数最底层的那个)

        fn() // 执行传进来的副作用函数

        effectStack.pop() // 出栈
    
        activeEffect = effectStack[effectStack.length - 1] // 更新当前激活的副作用函数为之前的值(栈底存放的永远是嵌套副作用函数最外层的那个)
    }

    effectFn.options = options // 调度器选项

    effectFn.deps = [] // 每次触发前先清空所有的依赖 -> 以保证有多余的副作用依赖存在

    effectFn() // 执行

}

// 执行副作用函数
effect(() => {
    // 这里分别触发了proxyData.name和proxyData.age的get方法，即给它们两个属性都设置上了对应的副作用函数依赖, 即这里传入的方法
    window.body.innerText = `${proxyData.name}今年${proxyData.age}岁了`
}. {
    scheduler(fn) {
        setTimeout(fn) // 用于时间调度
    }
})

// 避免重复刷新

const jobQueue = new Set() // 创建job队列 Set结构可以去重避免重复添加
const isFlushing = false // 判断是否正在刷新队列
const p = Promise.resolve // Promise处理异步使副作用函数在一轮事件循环中执行
function flushJob() {

    if (isFlushing) return // 假如队列正在刷新 就不重复操作了

    isFlushing = true

    p.then(() => {
        jobQueue.forEach(job => job())
    }).finally(() => {
        isFlushing = false
    })
}

// 该功能类似Vue.js中连续多次修改响应式数据但只会触发一次更新，实际上Vue.js内部实现了一个更加完善的调度器，思路与上文介绍相同

```