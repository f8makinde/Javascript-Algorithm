
// // REDUCE 

// const number = [1, -1, 2, 3]
// // a = 1, c = -1 => a = 0
// // a = 0 , c = 2 => a = 2
// // a = 2, c = 3 => a = 5
//  const sum = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//  })
//  console.log(sum);

// //  EXERCISE
// //  ARRAY FROM RANGE
//  function arrayFromRange(min, max){
//     const output  = [];
//     for(let i = min; i <= max; i++){
//         output.push(i)
//     }
//     return output;
//  }
//  console.log(arrayFromRange(1, 4));

// includes



// // MOVING AN ELEMENT

// function move(array, index, offset){
//     const position = index + offset;
//     if(position >= array.length || position < 0){
//         console.error('Invalid offset');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
  
// }
// console.log(move([1, 2, 3, 4], 1, 2))


// // count occurences





