# 随手记 #

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
    Promise.resolve().then(() => {
        return mySetTimeout(red, 3000) // 由于红灯三秒打印一次 所以让红灯每次等待3秒执行一次
    }).then(() => {
        return mySetTimeout(green, 2000) // 由于绿灯一秒打印一次 所以让绿灯每次等待2秒执行一次
    }).then(() => {
        return mySetTimeout(yellow, 1000) // 由于黄灯两秒打印一次 所以让黄灯每次等待1秒执行一次
    }).then(() => {
        return colorPrint() // 最后递归执行
    })
}


function mySetTimeout(cb, timeout) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            cb() // 执行回调
            resolve() // 让promise的状态从pending -> fulfilled
        }, timeout)
    })
}

colorPrint();
```


**全排列**

```js
// 输入 [['a1', 'a2'], ['b1', 'b2'], ['c1', 'c2']]
// 输出 ['a1b1c1', 'a1b1c2', 'a1b2c1', 'a1b2c2', 'a2b1c1', 'a2b1c2', 'a2b2c1', 'a2b2c2' ]


function fullArrangement(arr) {
    const len = arr.length // 数组长度
    let res = [] // 存放结果
    let j = 1 // 初始化merge的位置

    function mergeArray(arr1, arr2) {
        const newArr = []
        arr1.forEach(item1 => {
            arr2.forEach(item2 => {
                newArr.push(item1 + item2)
            })
        })
        res = newArr // 每次以更新res的值
    }

    mergeArray(arr[0], arr[j++]) // 初始化
    
    // 递归终止条件
    if (j !== len) {
        mergeArray(res, arr[j++]) // 递归
    }
    
    return res
}

fullArrangement([['a1', 'a2'], ['b1', 'b2'], ['c1', 'c2']])
```
