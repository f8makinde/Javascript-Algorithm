function lastEl(array){
    let newArray = array.map(element => {
        return element[element.length- 1];
    })
    return newArray;
}
console.log(lastEl([[1,2], [9,3,4], [5,6,7]]));