//function hositing
//function is invoked before the declaration, however using hoisting the function gets executed and the results would be displayed.
var result=add(10,15);
console.log(result); //25

function add(a,b){
    return a+b;
}

//variable hositing
//Note the below code didnt give any exeption however using variable hositing the value is declared and the value is defaulted to undefined during global execution context - creation phase.

console.log(value);
var value=1;

//however varible hositing is not applicable for let variable, (ie) for let variable the declared is taken into consideration, however the value is not set .
//ReferenceError: Cannot access 'letResult' before initialization
console.log(letResult);
let letResult=1;


//ReferenceError: NoDeclartionResult is not defined.
//Note: only the let and var are hoisted when the application is started, others are not taken into consideration and will result //ReferenceError: NoDeclartionResult is not defined.
console.log(NoDeclartionResult);

