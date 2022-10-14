
function except(array, excluded){
  const output = [];
  for(element of array){
    if(!excluded.includes(element)){
        output.push(element)
    }
  }
  return output;
}

console.log(except([1, 2, 3, 4, 5], [3]))