// different type of datatypes in JS
// 1. null
// 2. undefined
// 3. String
// 4. Number
// 5. Boolean
// 6. BigInt
// 7. Object - Complex datatype
//To know about the type of datatype use typeof()
//js is a dynamically typed language.

var a = "test"
var b=1;
var c=false;

console.log(a);
console.log(b);
console.log(c);

console.log("****")
//type of operator
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log("****")
var d;
console.log(d);
console.log(typeof(d));
console.log("****")
// null and undefind are same 
console.log(null == undefined); // true
console.log("****")
//MinValue and max value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//String are immutable

//Js Objects

var object={
    name:"name",
    age:18
};

//Objects can be accessed using object["name"] || object.name

console.log(object.name);
console.log(object["name"]);

console.log(object.test);
console.log(object["name"]);



