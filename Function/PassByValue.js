// Js uses pass by Value (ie) a new copy of the value passed as a function parameter is created and 
// used by which the source variable values are not impacted. This is not the case with Objects : Reference: https://www.javascripttutorial.net/javascript-pass-by-value/

// Example 1 // 
function square(x){
    x= x*x;
    return x;
}
var x=10;
console.log("Pre square value "+x);
console.log(square(x));
console.log("Post square value "+x);

//Example 2
function square(object){
    object.x=object.x * object.x;
    return object
}

var object={
    x:10
};

console.log("Pre Object  value "+object.x);
console.log(square(object).x);
console.log("Post Object  value "+object.x);




