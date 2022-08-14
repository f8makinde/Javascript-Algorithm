function ascending(arr){
    arr.sort(function (a, b){
        return a - b;
    })
    return arr;
}
console.log(ascending([5, 7, 1, 2, 8, 10, 6]));

function descending(arr){
    arr.sort(function (a, b){
        return b - a;
    })
    return arr;
}
console.log(descending([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));