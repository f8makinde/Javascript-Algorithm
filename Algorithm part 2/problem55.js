//ascending
function bubbleSort(arr){
 for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++){
        if(arr[j] > arr[j + 1]){
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
 }
 return arr
}
console.log(bubbleSort([2, 7, 6, 4, 3]))

//descending

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr.length - 1; j++){
           if(arr[j] < arr[j + 1]){
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
           }
       }
    }
    return arr
   }
   console.log(bubbleSort([2, 7, 6, 4, 3]))