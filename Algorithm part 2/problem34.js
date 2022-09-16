function present(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

console.log(present([5, 4, 3, 2, 1], 8));