# 随手记 #

**全排列**

```js
// 输入 [['a1', 'a2'], ['b1', 'b2'], ['c1', 'c2']]
// 输出 ['a1b1c1', 'a1b1c2', 'a1b2c1', 'a1b2c2', 'a2b1c1', 'a2b1c2', 'a2b2c1', 'a2b2c2' ]

function fullArrangement(arr) {
  const len = arr.length; // 数组长度
  let res = []; // 存放结果
  let j = 1; // 初始化merge的位置

  function mergeArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach((item1) => {
      arr2.forEach((item2) => {
        newArr.push(item1 + item2);
      });
    });
    res = newArr; // 每次以更新res的值
  }

  mergeArray(arr[0], arr[j++]); // 初始化

  // 递归终止条件
  if (j !== len) {
    mergeArray(res, arr[j++]); // 递归
  }

  return res;
}

fullArrangement([
  ["a1", "a2"],
  ["b1", "b2"],
  ["c1", "c2"],
]);

function permute(nums) {

    const res = [] // 存放结果数组
    const track = [] // 存放当前路径
    

    function findTrack(track) {

        if (track.length === nums.length) {
            // 假如当前路径的长度与原数组长度相同时则当前路径寻找完毕 放入结果数组中
            // 用slice是使用副本不影响引用值 不然结果中的路径会一直改变为相同结果
            res.push(track.slice())
        }

        for (let i = 0; i < nums.length; i++) {
            
            // 当前路径中含有当前数字时则跳过本次循环
            if (track.includes(nums[i])) {
                continue
            }

            track.push(nums[i]) // 向当前路径推入当前数字

            findTrack(track) // 对当前路径进行回溯 寻找下一个值

            track.pop() // 寻找完后把值弹出
        }
    }

    findTrack(track)

    return res
}

```

**寻找驼峰数字**

```js

function findHumpNum(arr, left, right) {
    
    const middleIndex = Math.floor((left + right) / 2) + 1 // 防止越界
    
    const middle = arr[middleIndex]
    const leftNum = arr[middleIndex - 1]
    const rightNum = arr[middleIndex + 1]

    if (middle > leftNum && middle > rightNum) return middle

    if (middle > leftNum && middle < rightNum) return findHumpNum(arr, middleIndex + 1, right)

    if (middle < leftNum && middle > rightNum) return findHumpNum(arr, left, middleIndex - 1)
}

// 时间复杂度: O(log(n))
// 空间复杂度: O(1)


findHumpNum([1,2,5,6,2,1], 0, 5) // 6

```


**合并两个数组**

```js

function mergeArray(arr1, arr2) {
    let i = 0 // 初始化指针
    let j = 0 // 初始化指针
    const len1 = arr1.length // 获取数组长度
    const len2 = arr2.length // 获取数组长度
    const arr = [] // 初始化结果数组
    arr1.sort((a, b) => a - b) // 排序 时间复杂度O(nlog(n))
    arr2.sort((a, b) => a - b) // 排序 时间复杂度O(mlog(m))

    // 时间复杂度: O(M + N)
    // 当两个指针都指向空时循环结束
    while(i < len1 || j < len2) {
        const left = arr1[i]
        const right = arr2[j]
        if (arr1[i] === undefined) {
            arr.push(...arr2.slice(j)) // 假如某个指针指向空时，数组将另外一个数组(包含当前指针指向的数，以及剩下的数字推入数组)
            return arr
        }
        if (arr2[j] === undefined) {
            arr.push(...arr1.slice(i))
            return arr
        }

        // 判断两个指针指向值的大小来判断要先推入哪个数字
        if (left > right) {
            arr.push(right)
            j++
        } else if (left < right) {
            arr.push(left)
            i++
        } else {
            // 当两个数相同时随便推入一个 两个指针同时指向下一个
            arr.push(left)
            i++
            j++
        }
    }

    return arr
}

// 时间复杂度: O(nlog(n))
// 空间复杂度: O(n)

mergeArray([1,2,100,5,5], [2,2,2,5,0]) // [0, 1, 2, 2, 2, 5, 5, 100]

```

**柯里化函数**

```js
function curry (fn, length = fn.length) {
    
    return function _curry(...args) {
        
        // 判断剩余参数的长度是否与fn函数所需要参数的长度相等 
        // 相等直接返回fn函数调用结果
        // 否则返回一个回调函数，这个回调函数返回_curry函数，传入的参数为合并当前与上一次的剩余参数
        return args.length === length ? fn(...args) : (...arg) => _curry(...args, ...arg)

    }
}

```


**防抖**

```js
function debounce(fn, wait) {
    let timer = null

    return (...args) => {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

```


**节流**

```js

// 简易版本
function throttle(fn, delay) {
    let preTime = Date.now()

    return (...args) => {
        const curTime = Date.now()

        if (curTime - preTime > delay) {
            fn.apply(this, args)
            preTime = curTime
        }
    }
}

// 时间戳 + 定时器 版本 保证有头有尾的执行
function throttle(fn, delay) {
    let preTime = Date.now()
    let timer = null

    return (...args) => {
        let curTime = Date.now()
        clearTimeout(timer)

        if (curTime - preTime >= delay) {
            preTime = curTime
            fn.apply(this, args)
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            return
        }

        timer = setTimeout(() => {
            preTime = Date.now()
            fn.apply(this, args)
            timer = null
        }, delay)
    }
}


```


**深拷贝**


```js

// 用WeakMap而不是Map的原因
// Map是强引用
// WeakMap是弱引用
// 被弱引用的对象可以在任何时候被回收，而对于强引用来说，只要这个强引用还在，那么对象无法被回收。拿上面的例子说，map 和 a一直是强引用的关系， 在程序结束之前，a 所占的内存空间一直不会被释放。

function deepClone(target, map = new WeakMap()) {

    if (map.get(target)) return target // 解决循环引用 假如保存过了就直接用就行了 放置栈溢出

    if (typeof target !== 'object' || target === null) return target

    map.set(target, true)

    const newTarget = Array.isArray(target) ? [] : {} // 判断target是一个对象还是数组

    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            newTarget[key] = deepClone(target[key], map)
        }
    }


    return newTarget
}

```


**实现一个new**

```js

function Person() {

    return {
        name: 'lgowen'
    }
}

// 这里的Person可以当作以下函数的Fn

function createObj(Fn, ...args) {

    const obj = Object.create(Fn.prototype)

    const res = Fn.apply(obj, args) // 获取该构造函数执行的返回结果

    return (typeof res === 'object' && res !== null ) ? res : obj // 如果有返回结果且是对象的话就用函数返回值 否则默认返回内部生成的对象
}

```


**实现一个instanceof**
<!-- instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上 -->

```js

function Person() {}

const person = new Person()

// 判断Person的原型是否在person的原型链上

// console.log(person instanceof Person) // true

function myInstanceof(obj, Constructor) {

    let proto1 = Object.getPrototypeOf(obj) // 获取obj的原型

    const proto2 = Constructor.prototype // 获取constructor的原型

    while (proto1) {
        if (proto1 === proto2) {
            return true
        } else {
            proto1 = Object.getPrototypeOf(proto1)
        }
    }

    return false
}


```



**找到树形结构中某个节点底下的所有孩子节点**


```js

function fn(tree, idValue, idKey) {

    let res = []

    for (let i = 0; i < tree.length; i++) {
        res = findRoot(tree[i], idValue, idKey)
        console.log(res, 'resss')
        if (res) return res
    }
    // 首先需要找到某个节点
    // 判断该节点是否有children
    // 假如有则找出该节点下的所有children
    // 否则null

    return null
}

// 找到某个节点
function findRoot(root, idValue, idKey) {

    const stack = [root] // 

    while (stack.length) {
        const head = stack.pop()

        if (head[idKey] === idValue) {
            // 该keyNode底下所有children则为我要的结果
            if (!head.children || head.children.length === 0) return null
            return deep(head, idKey)
        }

        for (let i = head.children?.length - 1; i >= 0; i--) {
            stack.push(head.children[i])
        }
    }

}

// 找到某个节点底下的所有children
function deep(root, idKey) {
    const stack = [root] // 

    const res = []

    let flag = false

    while (stack.length) {
        const head = stack.pop()

        flag && res.push(head[idKey])

        flag = true

        for (let i = head.children?.length - 1; i >= 0; i--) {
            stack.push(head.children[i])
        }
    }

    return res
}


const tree = [
    {
        id: '1',
        children: [
            {
                id: '2',
                children: [
                    {
                        id: '3',
                        children: [{id: '4'}]
                    },
                    {
                        id: '5'
                    },
                    {
                        id: '6',
                        children: [{id: '7'}]
                    }
                ]
            },
            {
                id: '8',
                children: [{id: '9'}]
            }
        ]
    }
]

console.log(fn(tree, '2', 'id'))

```

**写一个函数解析a.b.c的值**

```js
/**
 * Parse simple path.
 * 把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
 * 例如：
 * data = {a:{b:{c:2}}}
 * parsePath('a.b.c')(data)  // 2
 */
const bailRE = /[^\w.$]/
export function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

```


**图片懒加载优化**

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            width: 200px;
            height: 200px;
        }
    </style>
</head>

<body>
    <div style="height: 1000px;"></div>
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <img class="img" data-src="./docs/public/lake.jpg" />
    <script>
        // const viewportHeight = document.documentElement.clientHeight
        // let currentIndex = 0

        // function loadImg() {
        //     const imgs = document.querySelectorAll('.img')
        //     const scrollTop = document.documentElement.scrollTop // 获取滚动条高度

        //     for (let i = currentIndex; i < imgs.length; i++) {

        //         const imgRect = imgs[i].getBoundingClientRect()
        //         console.log(imgRect.top, 'sass')
        //         // 假如屏幕窗口高度 + 滚动条高度 >= 图片元素与页面顶部的距离 (也就是说图片在可视区域范围内的时候)
        //         if (imgRect.top < viewportHeight && imgRect.bottom >= 0) {
        //             imgs[i].src = imgs[i].getAttribute('data-src')
        //             imgs[i].removeAttribute('data-src')
        //             currentIndex++
        //         }
        //     }
        // }

        // window.addEventListener('scroll', throttle(loadImg, 200))

        // function throttle(fn, delay) {
        //     let preTime = Date.now()
        //     let timer = null

        //     return (...args) => {
        //         let curTime = Date.now()
        //         clearTimeout(timer)

        //         if (curTime - preTime >= delay) {
        //             preTime = curTime
        //             fn.apply(this, args)
        //             clearTimeout(timer)
        //             return
        //         }

        //         timer = setTimeout(() => {
        //             preTime = Date.now()
        //             fn.apply(this, args)
        //             timer = null
        //         }, delay)
        //     }
        // }

        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(111111)
                    const img = entry.target // 获取源对象
                    const src = img.dataset.src // 获取data-src属性
                    if (src) {
                        img.src = src
                        img.removeAttribute('data-src')
                    }
                    observer.unobserve(img) // 这一步记得要取消观察 否则加载完资源后会一直重复走逻辑(避免不必要的开销)
                }
            })
        })

        const imgs = document.querySelectorAll('.img') // 获取所有imgDOM元素
        
        // 观察每一个imgDOM元素的视图位置
        imgs.forEach(img => {
            io.observe(img)
        })
    </script>
</body>

</html>

```



**数组扁平化**

```js

const flatten = (arr) => {
    const result = []

    function flat(result, arr) {
        for (const item of arr) {
            if (Array.isArray(item)) {
                flat(result, item)
            } else {
                result.push(item)
            }
        }
    }

    flatten(result, arr)

    return result
}


const flatten = (arr) => arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur), [])

```


**实现x的n次方**


```js


function power(x, n) {
    if (n === 0) return 1

    const middle = power(x, Math.floor(n / 2)) // 取一半的值

    if (n % 2 === 1) return middle * middle * x // 奇数

    return middle * middle // 偶数
}

```

**实现add(1,2)(3)**

```js


function add(...args) {
    
    let arr

    function _add(...arg) {
        arr = [...args, ...arg]
        return _add
    }


    _add.toString = function () {
        // return _add()
        // console.log(123)
        return arr.reduce((pre, cur) => {
            return pre + cur
        })
    }

    return _add
}

add(1,2) => // 3


```



**数组转树**


```js

function arrToTree(arr) {
    const map = {}

    let res
    
    arr.forEach(item => {
        map[item.id] = item // 存引用值
    })

    arr.forEach(item => {
        const parent = map[item.pid]

        if (parent) {
            (parent.children || (parent.children = [])).push(item)
        } else {
            res = item // 这是root节点
        }
    })

    return res
}


```



**判断一个数组是不是另一个数组的子串**

```js
function judgeSameNum(arr1, arr2) {

    let j = 0

    let minArr
    let maxArr
    let minLength

    if (arr1.length > arr2.length) {
        maxArr = arr1
        minArr = arr2
        minLength = arr2.length
    } else {
        maxArr = arr2
        minArr = arr1
        minLength = arr1.length
    }

    if (minArr[0] > maxArr[maxArr.length - 1] || minArr[minLength - 1] < maxArr[0]) return false // 边界条件判断
    
    const leftNum = minArr[j]

    let index = maxArr.findIndex(item => item === leftNum)

    while (index < maxArr.length && j < minArr.length) {

        if (maxArr[index] === minArr[j]) {
            index++
            j++
        } else {
            return false
        }
    }

    return true

}

console.log(judgeSameNum([1,2,3,4,5], [2, 3]))


```

**下划线转小驼峰**


```js
function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter){
        console.log(all, letter)
        return letter.toUpperCase();
    });
}
let a = 'css_style_sheet';
console.log(toHump(a));


```


**小驼峰转下划线**

```js
function toLine(name) {
  return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}
let b = 'cssStyleSheet';
console.log(toLine(b));

```


**实现一个call**


```js
var name = 'lgowen'

var obj = {
    name: 'cherry'
}

function printName() {
    console.log(this.name)
}

Function.prototype.call = function(context) {

    const args = [...arguments].slice(1) // 获取函数参数

    context = context || window // 获取调用对象

    context.fn = this // this指向该函数

    const res = context.fn(...args) // 执行函数

    delete context.fn // 执行完删除函数

    return res // 返回结果
}

printName.call(obj)


```


**实现一个apply**


```js

Function.prototype.apply = function (context) {

    context = context || window

    context.fn = this

    let res = null

    if (arguments[1]) {
        res = context.fn(...arguments[1])
    } else {
        res = context.fn()
    }

    delete context.fn 

    return res
}

```

**实现一个bind**


```js

Function.prototype.bind = function (context) {

    const fn = this
    const args = [...arguments].slice(1) // 获取参数 bind的参数

    return function Fn() {
        // 这里的arguments是Fn的参数
        return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments)) // 判断返回的函数this指向是用new调用的还是直接执行的 传入的参数进行拼接
    }
}

```


**实现一个eventEmitter**

```js


class EventEmitter {
    constructor() {
        this.cache = {}
    }

    emit(event, ...args) {
        const effects = this.cache[event].slice() // 防止重复监听进入死循环
        effects.forEach(effect => {
            effect(...args)
        })
        return this
    }

    on(event, fn) {
        const effects = this.cache[event]
        if (effects) {
            this.cache[event] = [fn]
        } else {
            this.cache[event].push(fn)
        }
        return this
    }

    off(event, fn) {
        const effects = this.cache[event]
        this.cache[event] = effects && effects.filter(effect => effect !== fn)

        return this
    }

    once(event, fn) {
        
        // 执行完一遍方法后取消监听该方法
        function handler(...args) {
            fn(...args)
            this.off(event, handler)
        }

        this.emit(event, handler)
    }

}

```

**LRU缓存**

```js

class LRUCache(capacity) {
    this.cache = capacity
    this.map = new Map()

    get(key) {

        const isExist = this.map.has(key)

        if (isExist) {
            const value = this.map.get(key)
            // 保证该key在最新操作过
            this.map.delete(key)
            this.map.set(key, value)
            return value
        } else {
            return -1
        }
    }


    put(key, value) {
        const isExist = this.map.has(key)

        // 先删后存保证该key是最新操作过的
        if (isExist) {
            this.map.delete(key)
        }
        this.map.set(key, value)
       
        // 如果超出容量时从缓存中把最旧的那个key干掉
        if (this.map.size() > this.cache) {
            const keys = [...this.map.keys()]
            this.map.delete(keys[0])
        }
    }
}

```


**retry函数**

```js
function doSomething(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()<0.2){
                resolve('resolve')
            }else{
                reject('reject')
            }
        })
    })
}

//实现一个方法 重试某个方法  retryTimes 次直到成功 返回第一次成功的结果 or 最后一次失败的错误原因
function retry(fn,retryTimes){
    //分别用async await实现和不用async await 实现 
}
retry(doSomething,retryTimes)


// 用async await实现 
function retry(fn, retryTimes) {

    let count = 1

    return new Promise(async (resolve, reject) => {

      while (count <= retryTimes) {
        try {
          const res = await fn()
          return resolve(res)
        } catch (err) {
          if (count === retryTimes) return reject(err)
          count++
        }
      }
    })
}

async function retry(fn, retryTimes) {
  let count = 1

  while (count <= retryTimes) {
    try {
      return await fn()
    } catch (err) {
      if (count === retryTimes) return err
      count++
    }
  }
}

// 不用async await 实现 
function retry(fn,retryTimes){

    let count = 1

    return new Promise((resolve, reject) => {

        const excute = () => {
          fn().then(res => {
            return resolve(res)
          }).catch(err => {
            if (count === retryTimes) {
              return reject(err)
            } else {
              excute()
              count++
            }
          })
        }

        excute()
    })
}


const res = retry(doSomething,2).then(res => console.log(res)).catch(err => console.log(err))


```