function totalNum(array){
    let output = 0;
    array.forEach(element => {
    output += element;
    })
    return output;
}
console.log(totalNum([5, 7, 8, 9, 10, 2]));