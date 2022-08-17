function multiplyAllNumbers(array){
    let product = 1;
    array.forEach(element => {
        element.forEach(el => {
          product *= el;
        })
    })
    return product;
}
console.log(multiplyAllNumbers([[1, 2, 3, 4]]));