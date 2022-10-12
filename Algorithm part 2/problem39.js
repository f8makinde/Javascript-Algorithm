
function calculateArray(array){
   let sum = 0;
       for(let arrays of array){
         sum += arrays;
         sum / array.length;
       }
      return  sum / array.length;
 }

 function calculateGrade(marks){

     const average = calculateArray(marks)
         if(average <= 59){
            return "F";
         }
         else if(average <= 69){
            return "D";
         }
         else if(average <= 79){
            return "C";
         }
         else if(average <= 89){
            return "B";
         }
         else{
         return "A";
         }
         
 }

 const marks = [80, 80, 50]
 console.log(calculateGrade(marks))