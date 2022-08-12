function removeOddNum(arr){
    let array = [];  
    for(let i = 0; i < arr.length; i++){   
    if(arr[i] % 2 === 0){ 
    array.push(arr[i]);
    }   
    }  
    return array;  
    } 
    console.log(removeOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));