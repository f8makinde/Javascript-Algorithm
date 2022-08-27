function generateSentence(desc, arr) {
    for(let i = 0; i < arr.length; i++){
    }
    return `The ${arr.length} ${desc} are ${arr}`;
}
console.log(generateSentence("largest countries", ["China", "India", "USA"]));
console.log(generateSentence("best fruits", ["Apples", "Bananas"]));