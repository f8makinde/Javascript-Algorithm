function factorial(n){
    let product = 1;
    if(n === 0){
        return 1
    }
    for(let i = 1; i <= n; i++){
        product *= i
    }
    return product
}
console.log(factorial(4))
console.log(factorial(0))