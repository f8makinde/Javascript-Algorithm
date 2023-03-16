// function recursiveFactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * recursiveFactorial(n - 1)
// }
// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(5))
// console.log(recursiveFactorial(1))
function log(num){
    if(num > 5){
        return;
    }
    console.log(num);
    log(num + 1);
}

log(1);

function factorial (n){
    if( n === 0){
        return 1
    }
    return n * factorial(n -1)
}
console.log(factorial(1))