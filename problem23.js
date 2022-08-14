function sum(array, num){
    let newArr = [];
   for(let i = 0; i < array.length; i++){
     newArr.push(array[i] + num);
   } 
   return newArr;
}
console.log(sum([1, 2, 3, 4, 5], 2));