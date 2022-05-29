/**
 *  @param arr list of integers
 *  @description the timeComplexity of this algorithm is O(n2) and space complexity is O(1)
 */
function bubbleSort(arr){
    if(arr.length < 2){
        return arr;
    }
    for(let i = 0; i< arr.length; i++){
        for(let i = 0; i< arr.length ; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
}
const arr = [23, 5, 8, 90, 1, 4, 10, 100, 56, 78, 34, 35, 57, 89];
console.log(bubbleSort(arr));