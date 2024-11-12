# 数组中的第K个最大元素 #

**215. 数组中的第K个最大元素**

```js

// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例 1:

// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6], k = 4
// 输出: 4

let findKthLargest = function(nums, k) {
    return quickSelect(nums, nums.length - k)
};

let quickSelect = (arr, k) => {
    return quick(arr, 0, arr.length - 1, k)
}

let quick = (arr, left, right, k) => {
    let index

    if (left < right) {

        index = partition(arr, left, right)
        if (index === k) {
            return arr[index]
        } else if (index > k) {
            return quick(arr, left, index - 1, k)
        } else {
            return quick(arr, index + 1, right, k)
        }
    }

    return arr[left]
}

let partition = (arr, left, right) => {
    const middle = arr[Math.floor(Math.random() * (right - left + 1)) + left]
    let i = left
    let j = right
    while (i < j) {

        while (arr[i] < middle) {
            i++
        }

        while (arr[j] > middle) {
            j--
        }

        if (i < j) swap(arr, i, j)

        if (arr[i] === arr[j] && i !== j) {
            i++
        }
    }

    return i
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

```