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
