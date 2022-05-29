/**
 *  @param arr list of integers
 *  @description Time Complexity: The time complexity of Selection Sort is O(N2) as there are two nested loops and space complexity O(1)
 */
function selectionSort(arr){
    if(arr.length < 2){
        return arr;
    }

    for(let i=0; i<arr.length;i++){
        minimumIndex = i;
        for(let j = minimumIndex+1; j< arr.length;j++){
            if(arr[j]< arr[minimumIndex]){
                minimumIndex = j;
            }
            temp = arr[i];
            arr[i] = arr[minimumIndex];
            arr[minimumIndex] = temp;
        }
    }
    return arr;
}

const arr = [23, 5, 8, 90, 1, 4, 10, 100, 56, 78, 34, 35, 57, 89, 3];
console.log(selectionSort(arr));