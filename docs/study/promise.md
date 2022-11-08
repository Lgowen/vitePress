# promise合集 #



**如何用 Promise 实现红绿黄灯交替打印**

```js
// 红灯3秒打印一次，黄灯2秒打印一次，绿灯1秒打印一次
function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

function red() {
  console.log("red");
}

function colorPrint() {
  Promise.resolve()
    .then(() => {
      return mySetTimeout(red, 3000); //
    })
    .then(() => {
      return mySetTimeout(green, 1000); //
    })
    .then(() => {
      return mySetTimeout(yellow, 2000); //
    })
    .then(() => {
      return colorPrint(); // 最后递归执行
    });
}

function mySetTimeout(cb, timeout) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      cb(); // 执行回调
      resolve(); // 让promise的状态从pending -> fulfilled
    }, timeout);
  });
}

colorPrint();
```


**Promise.all**

```js
function myPromiseAll(PromiseArr) {
  return new Promise((resolve, reject) => {
    const asnArr = []; // promise.all返回的结果 -> 存储PromiseArr中的所有promise成功或其中一个失败的结果
    let count = 0; // 负责计数 -> 当PromiseArr中所有的promise执行完毕后将res返回
    const len = PromiseArr.length; // 
    
    // 遍历数组执行每一个promise -> 将每个返回的结果放进asnArr中 -> 每放入一个计一个数 -> 当全部结果都返回完毕时resolve(asnArr)
    PromiseArr.forEach((promise) => {
      Promise.resolve(promise)
        .then(res => {
          asnArr[count] = res;
          count++;
          if (count === len) resolve(asnArr);
        }, err => {
            reject(err);
        })
    });
  });
}
```


**Promise.race**

```js

function myPromiseRace(PromiseArr) {
    return new Promise((resolve, reject) => {
        PromiseArr.forEach(promise => {
            Promise.resolve(promise).then(resolve, reject)
            // Promise.resolve(promise).then(res => resolve(res), err => reject(err))
        })
    })
}

```

**Promise.allSettled**

```js

function myPromiseAllSettled(PromiseArr) {
    return new Promise((resolve, reject) => {
        let count = 0
        const arr = []
        const len = PromiseArr.length
        const isTimeToResolve = () => {
            if (count === len) resolve(arr)
        }

        PromiseArr.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                arr[index] = { status: 'fulfilled', value: res }
                count++
                isTimeToResolve()
            }, err => {
                arr[index] = { status: 'rejected', reason: err }
                count++
                isTimeToResolve()
            })
        })
    })
}

```


**实现myFetch在请求timeout后没结果没回来报错**

```js

function myFetch(timeout, params) {
    return Promise.race([new Promise((_, reject) => {
        setTimeout(() => {
            reject('error')
        }, timeout)
    }), fetch(params)])
}


```

**事件循环**

```js

setTimeout(() => {
    Promise.resolve().then(() => {
		console.log(88)
	})
    console.log(1)
}, 1)

setTimeout(() => {
    console.log(2)
}, 0)

Promise.resolve(() => {
	console.log(3)
    return 5
}).then((val) => {
   console.log(4, val)
    return 6
}).catch(() => {
    console.log(5)
}).finally((val) => {
    console.log(6, val)
})

console.log(7)

// 由于不同浏览器的最低延迟时间不同，以上的定时器执行顺序也有可能不同 （chrome和Safari的最小延迟为1ms，firefox和ie的最小延迟是0）
// 这也解释了为什么在chrome浏览器下 以上的两个定时器会先打印1 而不是2

// Promise.resolve(() => { console.log(3); return 5}) Promise.resolve了一个函数 所以在.then(val => console.log(4, val); return 6) 这里接收到的val是其resolve的函数
// 1. Promise.resolve() -> 将promise的状态从pending改为fullfilled 因此会将.then()中的回调注册事件队列中去（微任务）
// 2. 主执行栈console.log(7) -> 打印7
// 3. 此时执行栈为空 故从任务队列中看是否有等待被放入执行栈中执行的微任务 
// 4. 拿出第一个任务：.then中的回调函数 打印 4 (() => console.log(3); return 5) 执行完后会将.finally()中的回调放入微任务队列中 tips: finally中的回调函数没有形参
// 5. 此时执行栈为空 从微任务队列中取出.finally()中的回调函数 -> 打印 6 undefined 
// 6. 这时候微任务队列中也为空 即本轮事件循环结束

// 开始第二轮
// 1. 从宏任务队列中取出定时器1，Promise.resolve().then() 将其回调函数注册进入微任务队列
// 2. 打印1
// 3. 执行栈为空 任务队列中存在微任务 取其出来执行 打印88
// 4. 执行栈为空 微任务队列为空 该轮事件循环结束

// 开始第三轮
// 1. 从宏任务队列中取出定时器2 执行打印2
```


**实现一个cacheRequest**

```js
const cache = new Map()

const cacheRequest = (url, options) => {

    if (cache.has(url)) {
        // 判断是否有缓存
        if (cache.get(url).status === 'pending') {
            return Promise.resolve(cache.get(url).requestFn) // 返回值为：状态为pending的Promise
        }
        return Promise.resolve(cache.get(url).data) // 否则返回缓存数据

    } else {

        const requestFn = axios(url, options)
        
        cache.set(url, { status: 'pending', requestFn }) // 设置进缓存

        return requestFn.then(res => {
            cache.set(url, { status: 'success', data: res }) // 设置进缓存
            return Promise.resolve(res)
        }).catch(err => {
            cache.set(url, { status: 'fail', data: err }) // 设置进缓存
            return Promise.reject(err)
        })
    }
}



```



**实现一个异步任务调度器控制并发数量**


```js


class Scheduler {
  constructor(maxNum) {
    this.queue = []

    this.maxNum = maxNum

    this.current = 0
  }

  // async add(promiseCreator) {
  //   if (this.current >= this.maxNum) {
  //     await new Promise(resolve => this.queue.push(resolve))
  //   }

  //   this.current++

  //   const res = await promiseCreator() 

  //   this.current--

  //   this.queue.length && this.queue.shift()()

  //   return res
  // }

    async add(fn) {
    if (this.current >= this.maxNum) {
      new Promise(resolve => {
        this.queue.push(resolve)
      }).then(() => {
        this.startTask(fn)
      })
    } else {
      this.startTask(fn)
    }
  }

  async startTask(fn) {

    this.current++
    const res = await fn()
    this.current--

    this.queue.length && this.queue.shift()() // 当执行完后从阻塞队列中取出改变Promise的状态以至于让任务继续执行

    return res
  }
}

// 延迟函数
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// 同时进行的任务最多2个
const scheduler = new Scheduler(2);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask = (time, val) => {
    scheduler.add(() => {
        return sleep(time).then(() => console.log(val));
    });
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

```


**请求控制并发**

```js




function asyncPool(limit, promiseArr) {

    const res = [] // 储存所有的Promise

    const excuting = [] // 储存正在执行的Promise

    
    for (const promise of promiseArr) {

        const p = Promise.resolve().then(() => promise()) // 新建一个promise来查看其状态

        res.push(promise)

        // 当限制的数量小于promiseArr长度时需要进行并发控制
        if (limit <= promiseArr.length) {

            const e = p.then(() => excuting.splice(excuting.indexOf(e), 1)) // 当promise执行完时把正在执行的任务删除

            excuting.push(e)

            if (excuting.length >= limit) {
                // 如果正在执行的任务数 大于限制数
                
                await Promise.race(excuting) // 等待执行快的那个结果执行完成
            }
        }

    }

    return Promise.all(res)
}

// 开发中需要在多个promise处理完成后执行后置逻辑，通常使用Promise.all：

// Primise.all([p1, p2, p3]).then((res) => ...)
// 但是有个问题是，因为 promise 创建后会立即执行，也就是说传入到 promise.all 中的多个 promise 实例，
// 在其创建的时候就已经开始执行了，如果这些实例中执行的异步操作都是 http 请求，那么就会在瞬间发出 n 个 http 请求，这样显然是不合理的；
// 更合理的方式是：对 Promise.all 中异步操作的执行数量加以限制，同一时间只允许有 limit 个异步操作同时执行。

const timeout = (i) => {
  console.log("开始", i)
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(i)
      console.log("结束", i)
    }, i)
  )
}

async function asyncPool(limit, array, iteratorFn) {
  const ret = [] // 存储所有的异步任务
  const executing = [] // 正在执行的任务
  for (let item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item))
    ret.push(p)
    if (limit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }
  console.log(ret)
  return Promise.all(ret)
}

asyncPool(2, [1000, 5000, 3000, 2000], timeout).then(res => console.log(res))

```


**链式调用队列**

```js

let chain = new Chain()
chain().work().sleep(6).work().sleep(3)
// chain().work()
// chain().sleep(3)
// chain().work()

//需要结果是 
work
等待6ms
work
等待3ms
work
等待3ms
work

class Chain() {

  task = Promise.resolve() // 创建一个状态为fullfilled的promise 

  work() {
    // 执行当前任务
    // 然后更改当前任务 即降当前任务执行完后返回的promise赋值给task以便下一次使用时在其后面
    this.task = this.task.then(() => {
      console.log('work')
    })
    console.log(this.task, 'this.task')

    return this
  }


  sleep(time) {

    this.task = this.task.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`等待${time}ms`)
        }, time)
      })
    })

    return this
  }
}

```

**实现并发请求，并按顺序打印**

```js


function fetch(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(url)
    }, Math.random() * 1000)
  })
}

function fetchUrl(urls) {


  return new Promise((resolve, reject) => {
    let curIndex = 0
    const ans = []

    urls.forEach((url, index) => {

      fetch(url).then((res) => {
        ans[index] = res
  
        if (curIndex === index) {
          console.log(ans)
          curIndex = ans.length
        }
        if (index === urls.length) {
          resolve(ans)
        }
      }, err => {
        reject(err)
      })
    })
  })
}

const urls = [
    "www.baidu.com",
    "www.163.com",
    "www.qq.com",
    "www.fendou.host",
    "www.aliyun.com",
];

```