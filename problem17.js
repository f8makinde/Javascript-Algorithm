function factorial(num){
    let output = 1;
    for(let i = 1; i <= num; i++){
        output *= i;
    }
    return output;
}
console.log(factorial(10));