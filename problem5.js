function arrays(arr){
    let eliminateFirstEl = arr.shift();
    let eliminateLastEl = arr.pop();
    let addBothEliminatedEl = eliminateFirstEl + eliminateLastEl;
    arr.unshift(addBothEliminatedEl);
    return arr;
}
console.log(arrays([1, 2, 3, 4, 5]));
