function sum(arr){
    let total = 0;
    arr.forEach(element => {
        total += element;
    })
    return total;
}
console.log(sum([8, 7, 6]));