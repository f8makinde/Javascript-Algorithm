function reversal(str){
    let stringToArray = str.split("");
    let reverseArray = stringToArray.reverse();
    let turnToAString = reverseArray.join("")
    return turnToAString;
}
console.log(reversal("hello"));