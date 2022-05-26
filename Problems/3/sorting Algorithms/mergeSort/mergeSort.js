function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    const midIndex = Math.floor(arr.length/2);
    console.log(`midIndex: ${midIndex}`);
    let leftArr = arr.slice(0, midIndex);
    let rightArr = arr.slice(midIndex, arr.length);
    console.log(`mergeSort::leftArr : ${leftArr}`);
    console.log(`mergeSort::rightArr : ${rightArr}`);
    leftArr = mergeSort(leftArr)
    rightArr = mergeSort(rightArr)
    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr){
    console.log(`leftArr : ${leftArr}`);
    console.log(`rightArr : ${rightArr}`);
    let sortedArr = [];
    let leftIndex = 0, rightIndex = 0;
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if(leftArr[leftIndex]< rightArr[rightIndex]){
            sortedArr.push(leftArr[leftIndex]);
            leftIndex++;
        }
        else{
            sortedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    while(leftIndex < leftArr.length){
        sortedArr.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < rightArr.length){
        sortedArr.push(rightArr[rightIndex]);
        rightIndex++;
    }
    console.log(`sortedArr :: ${sortedArr}`);
    return sortedArr;
}

console.log(mergeSort([1, 5, 8, 90, 23, 4, 10, 100, 56, 78, 34, 35, 57, 89]))

