
function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function partition(arr, start, end){
    let pivotIndex = start
    let pivotValue = arr[pivotIndex];
    let startIndex = start;
    endIndex = end;
    while(startIndex < endIndex){
        while(arr[startIndex] <= pivotValue){
            startIndex++;
        }
        while(arr[endIndex]> pivotValue){
            endIndex--;
        }
        if(startIndex < endIndex){
            swap(arr, startIndex, endIndex);
        }
    }
    
    swap(arr, pivotIndex, endIndex);
    return endIndex;
}

function quickSort(arr, start, end){
  if(arr.slice(start, end).length < 2){
      return arr;
  }
  if(start < end){
    let partitionIndex = partition(arr, start, end);
    quickSort(arr, start, partitionIndex-1);
    quickSort(arr, partitionIndex+1, end);
  }
}
const arr = [23, 5, 8, 90, 1, 4, 10, 100, 56, 78, 34, 35, 57, 89];
quickSort(arr, 0, arr.length-1);
console.log(arr);