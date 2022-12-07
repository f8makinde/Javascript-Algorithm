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
