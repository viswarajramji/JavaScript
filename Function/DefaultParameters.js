// Default execution
function value(result){
    console.log(result);
}
value() //print undefined.
value("test");// print the test value.


//Typical way to assign default value to a method variable if undefinex
function valueWithoutDefaultValues(result){
    result=typeof result !== 'undefined' ? result : "hello";
    console.log(result);
}
valueWithoutDefaultValues() //print undefined.
valueWithoutDefaultValues("test");// print the test value.


// Assigning default values
function valueWithDefaultValues(result=10){
    console.log(result);
}
valueWithDefaultValues();
valueWithDefaultValues(100);

console.log("****");
// values function()
function valueCallingWithUndefinedValue(result=10){
    console.log(result);
}

valueCallingWithUndefinedValue(null);
valueCallingWithUndefinedValue(undefined);
valueCallingWithUndefinedValue();
valueCallingWithUndefinedValue(10);
