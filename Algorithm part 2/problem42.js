function getMax(array){
    if(array.length === 0){
       return undefined;
    }
   let max= array.sort(function(a, b){
        return a - b;
   })
   return max.pop();
}

function getMax(array){
   if(array.length === 0){
      return undefined;
   }
 return array.reduce((a, b) => {
          return(b > a) ? b : a;
   })
}

console.log(getMax([1, 2, 3, 4]))