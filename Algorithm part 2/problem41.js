
//constructor function

function Address(street, city, zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
    
}

let address1 =  new Address("Fashola", "Lagos", +234);
let address2 =  new Address("Fashola", "Lagos", +234);
  function areEqual(address1, address2){
     return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
  }
  function areSame(address1, address2){
   return address1 === address2;
  
}
console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))


function Post(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comment = [],
    this.isLive = false
}
 const blog = new Post("9ja trends","Trending news in nigeria",  "(f8_makinde)")
 console.log(blog);