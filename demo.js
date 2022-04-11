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