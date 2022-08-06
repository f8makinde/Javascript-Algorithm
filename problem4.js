function queue(arr, num){
    arr.push(num);
    let newArr = arr.slice(1)
    return newArr;
 }
 console.log(queue([0, 4, 5, 2], 10));
