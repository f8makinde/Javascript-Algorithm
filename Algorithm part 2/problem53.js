function sum(...args){
let total = 0;
for(let arg of args){
    total += arg
}
return total
}
console.log(sum(2, 3, 4, 5, 6))
//write a function that takes any number of arguments of type number and returns the sum of all the arguments

function stringIncludes(A, B){
    let convert1 = A.toLowerCase()
    let convert2 = B.toLowerCase()
    if(convert1.includes(convert2)){
        return true
    }
return false
}

console.log(stringIncludes("I drove to new york in a van with my friends", "New"))

//write a function that takes an array of objects and returns an array of the objects "name" property only if that property exists

function getNames(arr) {
    let newArr = []
 arr.map((arrays) => {
    if(arrays.name){
        newArr.push(arrays.name)
    }   
  })

return newArr
}
function getNames(arr) {
    let newArr = []
 arr.map((arrays) => {
    if(arrays.hasOwnProperty("name")){
        newArr.push(arrays.name)
    }   
  })

return newArr
}
console.log(getNames([
    {a: 1}, 
    {name: "Faith"},
    {},
    {name: "Mark"},
    {name: "sophia"},
    {b: 2}
]))