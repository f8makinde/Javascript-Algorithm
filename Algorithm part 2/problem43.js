function countOccurences(array, search){
    let count = 0;
    for(let x of array){
       if(x === search){
        count++;
       }
    }
    return count;
}

function countOccurences(array, search){
   return array.reduce((accumulator, element) => {
      const  occurences = (element === search) ? 1 : 0;
      console.log(accumulator, element, search);
      return accumulator + occurences
    }, 0)
}
console.log(countOccurences([1, 2, 3, 4, 1], 1))