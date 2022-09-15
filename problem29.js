function largestEl (arr){
    arr.sort()
   let last  = arr[arr.length - 1];
   return last;
}
console.log(largestEl([5, 7, 2, 9, 1]))