# 随手记

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
            Promise.resolve(promise).then(res => resolve(res))
        })
    })
}

```
