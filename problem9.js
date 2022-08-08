function queue(arr, num){
    if(typeof num !== "number"){
        return arr;
    }
    arr.push(num);
    arr.shift();
    if(arr[0] > arr[arr.length - 1]){
        let lastNum = arr.pop();
        let firstNum = arr.shift();
        arr.unshift(lastNum);
        arr.push(firstNum);
        return arr;
    }
    return arr;
}
console.log(queue([5, 2, 4, 5], 1));