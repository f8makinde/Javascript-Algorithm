function calculator(num1, operator, num2){
    if( isNaN(num1) || isNaN(num2)){
        return `Please make sure your first and last input is a number`;
      }
     else if(operator === `+`){
        return num1 + num2;
    }
    else if(operator === `-`){
        return num1 - num2;
    }
    else if(operator === `*`){
        return num1 * num2;
    }
    else if(operator === `/`){
        return num1 / num2;
    }
    else if(operator === `%`){
        return num1 % num2;
    }
    else{
        return `Invalid operator, use either +, -, /, * or %`;
    }
}
console.log(calculator(2, `*`, 4));