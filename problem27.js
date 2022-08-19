function search(sentence, word, replace){
let newWord = new RegExp(word, "gi");
let newSentence = sentence.replace(newWord, replace)
return newSentence;
}
console.log(search("Please visit Microsoft today, and invest in Microsoft tommorow", "MICROSOFT", "Twitter"));