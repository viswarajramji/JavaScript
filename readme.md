# Javascript

This repo contains important sample and examples of javascript.

## Note:

How to run JS code without HTML.

1. Write your to a file : test.js
2. In Terminal, Navigate to the file.
3. Run node test.js
4. Js output will be printed.

## Functions

Syntax:

function <functionName>(args1,arg2,...,args n){

}

Example:

function test(a,b){
    return a+b;
}

var result=test(10,15);
console.log(result);

### Function As Variable

Javascript allows to assign function to a variable and use it like a normal variable passing as a parameter to another function or invoking the function from the variable directly

Example:

//Example 1
function test(a,b){
    return a+b;
}

var result=test;
console.log(result(10,15));






difference between let and var


defautl value of varible is undefined.


Data Type	Values converted to true	Value Converted to false
string	Any non-empty string	“” (empty string)
number	Any Non-zero number	0, NaN
object	Any object	null
undefined	(not relevant)	undefined



