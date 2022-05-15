//a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

function greeting(name){
    function getValue(age){
        console.log(name+"__"+age);
    }
    return getValue;
}

var greet=greeting("test");
greet(10);