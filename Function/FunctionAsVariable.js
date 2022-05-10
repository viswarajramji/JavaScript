//Function as Variable

//Example 1
function test(a,b){
    return a+b;
}

var result=test;
console.log(result(10,15));

//Example 2
var result=function(a,b){
    return a+b;
}
console.log(result(10,15));

//Example 3
function add(a,b){
    return a+b;
}

function example3(func,a,b){
    return func(a,b);
}
var result=example3(add,10,15);
console.log(result)

//Arrays sort of objects

function sortBy(propertyName){
    return function(prop1,prop2){
        let a = prop1[propertyName];
        let b = prop2[propertyName];
        if(a>b){
            return -1;
        }
        return 1;
    }
}


var arrarys=[
    {name : "testFirst" , age :10},
    {name : "testLast" , age :20}
]

console.log("pre-sort : ",arrarys);
console.log("post-sort : ",arrarys.sort(sortBy("name")));

