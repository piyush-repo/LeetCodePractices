function insertionSort(arr){
    if(arr.length < 2){
        return arr;
    }
    for(let i = 1; i< arr.length ; i++) {
        let key = arr[i];
        j = i-1;
        while (j>=0 && key < arr[j]){
            temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp
            j--;
        }
    }

    return arr;
}

const arr = [23, 5, 8, 90, 1, 4, 10, 100, 56, 78, 34, 35, 57, 89, 3];
console.log(insertionSort(arr));