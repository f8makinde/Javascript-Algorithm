function checkIfSorted(arr){
    if(arr.length < 2){
        return `This is not a sorted array`
    }
for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr[i]; j++){
       if(arr[j] < arr[i]){
        return false;
       }
    }
        return true;
    }
 }
console.log(checkIfSorted([1, 2, 3, 4, 5]));