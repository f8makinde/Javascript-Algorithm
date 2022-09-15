function sorting(arr){
    if(arr.length < 4){
        return -1;
       }
    arr.sort();
   let x = arr[1]
   let y = arr[arr.length - 2];
   return `${x} ${y}`
    
}
console.log(sorting([1]));