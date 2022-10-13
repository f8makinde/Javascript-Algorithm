function showStars(rows){
    for(let i = 1; i <= rows; i++){
       let pattern = "";
         for(let j = 0; j < i; j++){
          pattern += "*"
         }
         console.log(pattern);
    }
 
}
showStars(10)

function isPrime(i)
{

 for(let j = 2; j < i; j++){
 if(i % j === 0){
  return false;
 }
 }
 return true;
}
function showPrimes(limit){
  for(let i = 2; i <= limit; i++){
   if(isPrime(i)){
    console.log(i)
  }
  }
}
showPrimes(20);