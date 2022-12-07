const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]


function filterArray(array, callback) {
    const resultingArray = []
    for(let item of array){
        const shouldBeIncluded = callback(item)
       if(shouldBeIncluded){
        resultingArray.push(item)
       }
    }
    return resultingArray
}
const peopleWithPets = filterArray(people, function(person) {
    return person.hasPet
})

console.log(peopleWithPets)