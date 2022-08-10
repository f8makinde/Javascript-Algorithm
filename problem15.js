function multiplyAll(arr){
    product = 1;
    arr.forEach(element => {
        element.forEach(el => {
         product *= el;
        })
        return product;
    });
  return product;
}
console.log(multiplyAll([[5,6], [1,8], [3,4]]));