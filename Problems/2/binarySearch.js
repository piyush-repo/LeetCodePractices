const process = require('process');
const arr = [10, 14, 18, 19, 23, 25, 28, 29, 34, 36, 38, 39, 40, 42, 44, 46, 48, 50 ];
const start = 0, end = arr.length -1;

function binarySearch(arr, start, end, target) {
    let midIndex = Math.floor((start + end)/2);
    if(target === arr[midIndex]){
        console.log(`Index : ${midIndex}`);
        return true;
    }
    if(arr[midIndex] > target){
        return binarySearch(arr, start, midIndex-1, target);
    }
    else{
        return binarySearch(arr, midIndex+1, end, target);
    }
}

console.log(binarySearch(arr, start, end, parseInt(process.argv[2])));
