function longestWord(str){
    let array = str.split(" ")
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i].length);
    }
    return Math.max.apply(null, newArray)
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"));
