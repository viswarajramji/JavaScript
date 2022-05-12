# Javascript (In-Progress)

This repo contains important sample and examples of javascript.

## Note:

How to run JS code without HTML.

1. Write your to a file : test.js
2. In Terminal, Navigate to the file.
3. Run node test.js
4. Js output will be printed.

## Points to Remember

1. let vs var : let accessible is limited to only function level whereas var is used as accessible globally. 
2. undefined vs null : undefined is the default value(ie) value does not exists whereas null is explicity set by application to clear the value.
## Basics

1. DataTypes - null ,undefined,  Number, String , Boolean, Object , BigInt 
2. Identify type of DataType : typeof
3. Operators: Relational , Arthematic, Comparsion , Coalesce.
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

    function test(a,b){
        return a+b;
    }

    var result=test;
    console.log(result(10,15));

###  Anonymous Functions

Functions without names are called as Anonymous Functions.

    var test=function(){
        console.log("hello world");
    }
    test();

    // self invoking functions
    (function(){
        console.log("self invoking function");
    })()


    //self Invoking functions with Paramets
    var myObject={
        _firstName: "Shan",
        _lastName:"Micheal",
        getName: function(){
            return this._firstName;
        },

        getlastName:function(){
            return this._lastName;
        }
    };

    (function(){
        console.log(myObject.getName()+"_"+myObject.getlastName());
    })(myObject);




