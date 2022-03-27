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

**N叉树的前序遍历（深度优先）**

```js
var preorder = function(root) {
    const res = [];
    if (root == null) {
        return res;
    }

    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        for (let i = node.children.length - 1; i >= 0; --i) {
            stack.push(node.children[i]);
        }
    }
    return res;
};

```

**N叉树的层序遍历（广度优先）**


```js
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (root == null) return res;
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    let level = [];
    while (size--) {
      let cur = queue.shift();
      level.push(cur.val);
      for (let node of cur.children) {
        if (node) queue.push(node);
      }
    }
    res.push(level);
  }
  return res;
};

```

**大数相加**

```js

function bigNumberSum(str1, str2) {
    // 字符串转数组且反转 从个位数开始相加
    const arr1 = str1.split('').reverse()
    const arr2 = str2.split('').reverse()

    let flag = 0
    const res = []
    const len = Math.max(str1.length, str2.length)

    for (let i = 0; i < len; i++) {
        // 避免取的是undefined
        const num1 = Number(arr1[i]) || 0
        const num2 = Number(arr2[i]) || 0
        let sum = num1 + num2 + flag // 两个共同位置的数相加再加上进位
        if (sum >= 10) {
            sum = sum % 10 // 假如大于10取余数
            flag = 1 // 存在进位
        } else {
            flag = 0 // 不存在进位
        }
        res.push(sum)
    }
    if (flag) res.push(flag)

    return res.reverse().join('')
    
}

```

**打家劫舍**


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    // 假如只有一间房 那么就偷这间
    // 假如有两间房 因为不能偷相邻的房间 那就偷两间房里钱多的那间
    // 假如大于两间房 设它为第k间
    // 有两个选择
    // S(n) = Max(S(n - 2) + H(n), S(n - 1))
    // S(0) = H(0)
    // S(1) = Max(S(0), H(1))
    // S(2) = Max(S(0) + H(2), S(1))
    // S(3) = Max(S(1) + H(3), S(2))



    const len = nums.length
    if (len === 1) return nums[0]
    if (len === 2) return Math.max(nums[0], nums[1])

    let num1 = nums[0] // 前k-1
    let num2 = Math.max(nums[0], nums[1]) // 前k-2 + k

    for (let i = 2; i < len; i++) {
        const cur = num2
        num2 = Math.max(num1 + nums[i], num2) // 要么隔着偷 要么偷中间的 取最大值 累加
        num1 = cur
    }

    return num2
};

```