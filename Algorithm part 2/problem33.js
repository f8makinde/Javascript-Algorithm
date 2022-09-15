function rotate(arr, k){
    for(let i = 0; i < k; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotate([3, 7, 8, 9, 10, 11], 3))