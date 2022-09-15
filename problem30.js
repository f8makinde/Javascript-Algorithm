function sorting(arr){
    if(arr == 0 || arr == 1){
        return -1;
       }
    arr.sort();
   let x = arr[1]
   let y = arr[arr.length - 2];
   return `${x} ${y}`
    
}
console.log(sorting([1,2,4,6,7,5]));