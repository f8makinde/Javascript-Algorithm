function calculator(num1, operator, num2){
    let answer = "";
    if(isNaN(num1) || isNaN(num2)){
        return `Please make sure your first input and your last input is a number`;
    }
    switch(operator){
        case "+": answer = num1 + num2;
        break;
        case "-": answer = num1 - num2;
        break;
        case "*": answer = num1 * num2;
        break;
        case "/": answer = num1 / num2;
        break;
        case "%": answer = num1 % num2;
        break;
        default: answer = `Invalid operator, kindly use either +, -, *, / or %`;
    }
    return answer;
}
console.log(calculator(2, "+", 2));