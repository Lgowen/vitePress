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