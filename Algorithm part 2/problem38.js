function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoint = 5;
  if(speed < speedLimit + kmPerPoint){
    return "Ok";
  }
  else{
   const points = Math.floor((speed - speedLimit) / kmPerPoint);
   if(points >= 12){
    return "License suspended";
   }
   else{
    return `Points: ${points}`;
   }
  }
}
console.log(checkSpeed(130));