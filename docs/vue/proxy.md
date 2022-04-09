# 响应式数据 #


**ProxyData**

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

// WeakMap经常用于存储那些只有当key所引用的对象存在时(没有被回收)才有价值的信息。
// 如果target对象没有任何引用了，说明用户侧不再需要它了，这时垃圾回收器会完成回收任务。
// 但是如果使用Map来代替WeakMap，那么即使用户侧的代码对target没有任何引用，这个target也不会被回收，最终可能导致内存溢出

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
            effectFn.options.scheduler(effectFn)
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

const obj = new Proxy({ foo: 1 }, /* ... */)

// 执行副作用函数
effect(() => {
    console.log(obj.foo)
}. {
    scheduler(fn) {
        jobQueue.add(fn) // 往队列中添加副作用函数(如下可能会往队列中推出两次相同的副作用函数，因为Set结构自动去重所以最终只会执行一行)

        flushJob() // 刷新队列(实际上如果在一轮事件循环中该队列正在刷新的话，则只会执行一次)
    }
})

obj.foo++
obj.foo++

// 1 首次执行副作用函数打印1
// 3 两次的obj.foo因为赋值操作触发的副作用函数会在微任务队列中取出执行 所以拿到的结果是最后赋值后的结果(减少了重复渲染)


// 该功能类似Vue.js中连续多次修改响应式数据但只会触发一次更新，实际上Vue.js内部实现了一个更加完善的调度器，思路与上文介绍相同

```


**computed和lazy**


```js
// 假如我们想给副作用函数设置懒执行


effect(() => {
    console.log('lazy function')
}, {
    lazy: true
})


function effect(fn, options = {}) {

    const effectFn = () => {

        cleanup(effectFn) // 在执行副作用函数之前先清除所有与副作用函数相关的依赖

        activeEffect = effectFn // 将当前副作用函数赋值给全局当前激活的副作用

        effectStack.push(activeEffect) // 栈中存放当前执行的副作用函数(栈顶存放的永远是嵌套副作用函数最底层的那个)

        const res = fn() // 执行传进来的副作用函数(获取副作用函数执行的结果)

        effectStack.pop() // 出栈
    
        activeEffect = effectStack[effectStack.length - 1] // 更新当前激活的副作用函数为之前的值(栈底存放的永远是嵌套副作用函数最外层的那个)

        return res // 返回副作用函数的结果
    }

    effectFn.options = options // 调度器选项

    effectFn.deps = [] // 每次触发前先清空所有的依赖 -> 以保证有多余的副作用依赖存在

    if (!options.lazy) {
        effectFn() // 如果没有设置lazy的话才立刻执行
    }

    return effectFn // 返回的这个函数可用于用户自行啥时候调用都可以
}

const effectFn = effect(() => {
    console.log('lazy function')
}, {
    lazy: true
})

effectFn() // 该函数为副作用函数

// 假如该副作用函数是返回一个值,即可以作为computed属性的getter

const effectFn = effect(() => {
    return obj.age + obj.year
}, {
    lazy: true
})

const value = effectFn() // 副作用函数执行完后得到的结果

// 接下来我们就可以写一个computed了
function computed(getter) {
    let value // computed缓存的值

    let dirty = true // 控制副作用函数是否执行

    const effectFn = effect(getter, {
        lazy: true,
        scheduler() {
            if (!dirty) {
                dirty = true // 当computed的值依赖的响应式数据改变时，触发setter时会走trigger

                trigger(obj, 'value') // 当计算属性依赖的响应式数据发生改变时，可以手动调用trigget函数触发响应
            }

        }
    })

    const obj = {

        get value() {
            
            // 在获取值的时候假如dirty为true的时候，才表示要重新去获取值，否则使用缓存
            if (dirty) {
                value = effectFn()

                dirty = false
            }
            
            track(obj, 'value') // 手动触发track函数，在读取computed值的时候去追踪并收集它的依赖

            return value
        }
    }

    return obj
}

const obj = new Proxy({ age: 1, year: 1998 }, /* ... */)

const computedValue = computed(() => obj.age + obj.yaer)

// console.log(computedValue.value)
// 在获取computedValue值的时候，首次会触发其副作用函数的执行
// 其副作用函数的执行又会触发 然后会把() => obj.age + obj.yaer当作当前激活的副作用函数
// obj.age和obj.year的getter，然后会去调用track函数追踪并收集obj.age和obj.yaer对应的依赖，Set[ () => obj.age + obj.yaer ]
// 然后返回值

obj.age++
// 比如说 obj.age++ 这时候触发了obj.age的getter和setter，会将computed值dirty设置为true
// 那么在下一次获取computed的值时会重新触发computed值的副作用函数以到达更新值的目的

// 但是如果在另外一个副作用函数中去读取computed的值的话，就会出现副作用函数的嵌套，导致外层的effect不会被内层的effect中的响应式数据收集
effect(() => {
    // 在另一个副作用函数读取computed的值
    console.log(computedValue.value)
})
// 所以我们需要去主动触发更新

// 当读取一个计算属性的value值时，我们手动调用track函数，把计算属性返回的对象obj作为target，同时作为第一个参数传递给track函数。
// 当计算属性所依赖的响应式数据变化时，会执行调度器函数，在调度器函数内手动调用trigger函数触发响应即可。
// 也就是说我们需要给computed属性在获取值的时候收集它的依赖，在它依赖的响应式数据发生改变时触发副作用函数

// computed(obj)
//     -----------value
//                  ----------effectFn
```



**watch**

```js

const obj = new Proxy({ age: 18 }, /* ... */)

watch(obj, async (newValue, oldValue, onInvalidate) => {
    console.log('obj中的值变化了')

    let expired = false // 表示副作用函数没有过期
    
    // 注册副作用函数过期时执行的回调函数（首次执行副作用函数会注册）
    onInvalidate(() => {
        expired = true
    })

    const res = await fetch('/api/list')
    
    // 只有当该副作用函数没有过期的时候才会执行
    if (!expired) {
        myData = res
    }
}, {
    immediate: true, // 在注册watch的时候立即执行一次回调函数
    flush: 'post' // pre(组件更新前) sync()
})

// 上面的watch方法其实是想监听obj的所有属性，也可以是一个getter函数监听响应式数据中的某一个值的变化，从而执行回调函数，且回调函数中可以拿到新的值和旧的值

function watch(source, cb, options = {}) {

    let getter

    function onInvalidate(fn) {
        cleanup = fn
    }

    let cleanup
    
    // 为了立即调用抽离的函数
    const job = () => {

            newValue = effectFn() // 在source变化时触发获取新的值
            
            // 假如该副作用函数有传该副作用函数过期时的回调 则执行
            // 在执行副作用函数前执行（使得该副作用函数过期)
            if (cleanup) {
                cleanup()
            }

            cb(newValue, oldValue, onInvalidate) // 执行回调函数并且传值（这时候才会执行onInvalidate将该副作用函数变为过期的）

            oldValue = newValue // 执行完回调函数之后 更新oldValue的值 以保证下一次拿到的数据是正确的
    }
    
    // 假如source是一个函数
    if (typeof source === 'function') {
        getter = source
    } else {
        getter = () => traverse(source) // 递归读取该对象的每一个值(这里暂时不考虑数组的情况) 触发值的getter收集(track)依赖
    }


    let newValue, oldValue


    const effectFn = effect(() => getter(), {
        lazy: true, // 设置lazy可以使的该副作用函数不立刻执行 可用于自行执行 并且获取副作用函数的返回值(getter的返回值)
        // 在source中的所有值只要发生变化时，则会触发其getter执行(trigger)对应的副作用函数(并且执行调度方法)scheduler
        scheduler: () => {
            if (options.flush === 'post') {
                // 放进微任务队列等DOM更新后再执行 副作用函数放到微任务队列 并等待DOM更新后结束后再执行
                const p = Promise.resolve()
                p.then(job)
            } else {
                job()
            }
        }
    })

    if (options.immediate) {
        job() // 假如有传参数就立即先执行一次回调函数
    } else {
        oldValue = effectFn() // 首次执行获取getter的值
    }
}

function traverse(source, seen = new Set()) {

    // 假如该值是一个基本数据类型或者已经读过了(用Set存储避免循环引用) 就不需要继续读了
    if (typeof source !=== 'object' || source === null || seen.has(source)) return 
    
    seen.add(source) // 存取读过的属性

    // 递归读取每一个属性
    for (const key in source) {
        traverse(source[key], seen)
    }

    return source
}


```
