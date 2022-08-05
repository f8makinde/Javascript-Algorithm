function quadraticEquation(a, b, c){
    let numeratorOne = -b + (Math.sqrt(b**2 -4*a*c));
    let numeratorTwo = -b - (Math.sqrt(b**2 -4*a*c));
    let denominator = 2*a;
    return "x = " + numeratorOne/denominator + " and x = " + numeratorTwo/denominator;
}
console.log(quadraticEquation(2, 9, 9));
