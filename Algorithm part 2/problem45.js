   //  Constructor funtions
   function Pick(name, location, age, food){
    this.name = name;
    this.location = location;
    this.age = age;
    this.food = food;
 }

 const all = new Pick("faith", "Nigeria", 18, "Jollof rice")
 console.log(all);

 //Factories function
 function mySelf(name, location, age, food){
    return {
       name,
       location,
       age,
       food
    }
 }
 const pick = mySelf("faith", "Nigeria", 18, "Jollof rice")
 console.log(pick);