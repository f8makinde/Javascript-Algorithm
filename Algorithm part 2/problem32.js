function rotate(arr){
 let x = arr.shift();
  arr.push(x);
 return arr;
}
console.log(rotate([1, 2, 3, 4, 5]))


