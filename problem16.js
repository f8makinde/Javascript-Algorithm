
function myArray(arr){
    let x = [];
    for(let i = 0; i < arr.length; i++){
        x.push(arr[i][arr[i].length - 1]);
    }
    return x;
}
console.log(myArray([[3,4], [9,8,0]]))