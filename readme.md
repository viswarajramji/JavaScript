# Javascript

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
3. Boolean Interpretation table:

* String (Non-empty)  true / (Empty) false.
* Number (Any Non zero)true / (zero) false
* Object (non-null) true / (null) false.

## Basics
1. Variable Declaration: let , var , cons
2. DataTypes - null ,undefined,  Number, String , Boolean, Object , BigInt 
3. Identify type of DataType : typeof
4. Operators: Relational , Arthematic, Comparsion , Nullish coalescing operator .
5. Control flow: if , if..else , switch case, while loop, for loop , do..while loop, forEach

## Nullish coalescing operator 

JavaScript nullish coalescing operator (??) that accepts two values and returns the second value if the first one is null or undefined.

    //Interesting Operator - Nullish Coalescing Operator
    console.log(null??["test"]); // ["test"]
    console.log(undefined??["test"]); // ["test"]
    console.log("hello"??["test"]);//"hello"

## Object Basics

Instance of a class.

    //creating Objects
    var myObj={
        firstName:"shan",
        lastName:"Micheal"
    };

    //accessing object attributes
    console.log(myObj.firstName);
    console.log(myObj.lastName);
    console.log(myObj["firstName"]);
    console.log(myObj["lastName"]);

    //deleting Object attributes
    delete myObj.lastName;
    console.log(myObj["lastName"]);

    //checking if the attribute exists.
    console.log("firstName" in myObj);
    console.log("lastName" in myObj);

## Arrays

In JavaScript, an array is an ordered list of value

    var arr=["value"];

    //adding values
    arr.push("shan");
    arr.unshift("micheal");

    console.log(arr);

    //removing values
    console.log(arr.pop());
    console.log(arr.shift());
    console.log(arr);

    //finding the index of the array value
    var index=arr.indexOf("value");
    console.log(index);

    //check if the value is an array 
    console.log(Array.isArray(arr));

## Functions
 
Functions are used to structure the code into smaller and more reusable units.

Syntax:

    function <functionName>(args1,arg2,...,args n){

    }

Example:

    function test(a,b){
        return a+b;
    }

    var result=test(10,15);
    console.log(result);

### Sorting an Array

    //sorting
    function sortByProperty(propertyName) {
        return function (a, b) {
            var value1 = a[propertyName];
            var value2 = b[propertyName];
            if (value1 > value2) {
                return 1;
            }
            return -1;
        }
    }

    var arr = [{
        name: "micheal",
        age: 15
    }, {
        name: "shan",
        age: 10
    }
    ]

    console.log(arr);
    arr.sort(sortByProperty("age"));
    console.log(arr);
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


### Default Parameters

Default Parameters are used to assign value to undefined parameters.
Note: it wont work for null values.

    // values function()
    function valueCallingWithUndefinedValue(result=10){
        console.log(result);
    }

    valueCallingWithUndefinedValue(undefined);// 10
    valueCallingWithUndefinedValue(null);//null
    valueCallingWithUndefinedValue();//10
    valueCallingWithUndefinedValue(10);//10


## Class and Objects

Object are a key value pair with any changes will affect the current instance only
### Object Methods

An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method. Typically, you use methods to describe the object behaviors.

    // Object Example
    var object={
        firstName: "Suru",
        lastName: "Shan",
        getFullName:function(){
            return this.firstName+"__"+this.lastName;
        }
    }
    //Accessing Objects using both method and key values
    console.log(object.getFullName);
    console.log(object.getFullName());
    console.log(object["getFullName"]());
    console.log(object["firstName"]);

### Constructor functions

without constructor function concept the code for creating objects can be cumbersome.

    var object1={
        first:"s1",
        last:"l1"
    };

    var object2={
        first:"s2",
        last:"l2"
    };

    var object3={
        first:"s3",
        last:"l3"
    };

    console.log(object1.first);
    console.log(object2.first);
    console.log(object3.first);

The above code is repitative , so this can be avoided by constructor functions by the below code

    function Person(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    var arr=[];

    var p1=new Person("s1","l1");
    var p2=new Person("s2","l2");
    var p3=new Person("s3","l3");

    arr.push(p1);
    arr.push(p2);
    arr.push(p3);

    arr.forEach(object=>console.log(object.firstName+"__"+object.lastName));

Note: when function constructor is called without using new then the values are stored to the global variable . use new.target to identify if the methods are invoked using new or not , 


    //calling function without new
    function myTest(value){
        //if new is used to create then new.target will have new function and if its called without new then new.target will be undefined.
        if(!new.target){
            throw new Error("cannot call without new");
        }
        this.value=value;
        this.getValue=function(){
            return this.value;
        }
    }

    var values= new myTest("hello");
    console.log(values.getValue())

### Prototype 

used to modify the attributes of a class.

Behaviour:

// Person.protype => personprototype.constructor=> person function 
//                => personprototype.object=> object function 
 

    function Person(){
        this.firstName="firstName";
        this.lastName="lastName";
    }
    Person.prototype.getFullName=function()
    {
        return this.firstName +"__"+this.lastName;
    }
    var p1=new Person();
    var p2=new Person();
    console.log(p1.getFullName());
    console.log(p2.getFullName());

### Class 

Simple Class Example 

    class Person{
        constructor(firstName,lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }

        getFullName(){
            return this.firstName+"__"+this.lastName;
        }
    }


    let p1=new Person("test","shan");
    let p2=new Person("shan","test");
    console.log(p1.getFullName());
    console.log(p2.getFullName());

### Object Property types - Descriptor Notes

Object Descriptor to used to manage the attributes of the object
3 methods to remember

1. Object.defineProperty  - Object.defineProperty(object,property,descriptor property})
2. Object.defineProperties  - Object.defineProperties(test,object);
3. Object.getOwnPropertyDescriptor - Object.getOwnPropertyDescriptor(test,"Name of the property");

Descriptor Property

configurable - used for defining configurable (ie) cannot be deleted using del property nor this property can be modified
enumerable - will be ignore during enumeration or iterator if set to true
Writable - will not be allowed to be modified is set to yes
value - value of property

//Note:

Check if an object has a property enumerable:  object.propertyIsEnumerable(propertyName);
Check if the object property is from the current object or another object : object.hasOwnProperty(propertyName);
### In Loop

    var object={
        firstName:"shan",
        lastName:"Micheal"
    };

    //print object attributes
    for(var field in object){
        console.log(field);
    }
    //print object values
    for(var field in object){
        console.log(object[field])
    }

    for(var field in fullObject){
    if(fullObject.hasOwnProperty(field))
      console.log(field+"_"+fullObject[field]);
}

### Object Assign

Merges values and creates a new values also it perform shallow copy

    var sourceObj1={
        firstName:"firstName",
        lastName:"test"
    }

    var sourceObj2={
        firstName:"firstName1",
        lastName:"test1"
    }

    var value=Object.assign({},sourceObj1,sourceObj2);
    console.log(value);

### Object Optional Chaining

syntax - (?.)

use the operator to check null or undefined and then use the corresponding operation example:

    //?. operator chaning 
    function getUser(id){
        if(id<=0){
            return null;
        }
        return {
            firstName:"Shan",
            lastName:"Micheal",
            getFullName:function(){
                return this.firstName+"_"+this.lastName;
            }
        };
    }

    var user=getUser(1);
    console.log(user?.firstName); //using user.firstName will give execption

# Class

Instead of function constructor we can use class in JS.

    class Person{
        constructor(firstName,lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }

        getFirstName(){
            return this.lastName;
        }

        getLastName(){
            return this.firstName;
        }
    }


    var person=new Person("shan","Micheal");
    console.log(person.getLastName());
    console.log(person.getFirstName());

    //must use new with Person 


### Inheritance 

Extending base class with additional metrics.

    class Person{
        constructor(firstName,lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }
        getFirstName(){
            return this.firstName
        }

        getLastName(){
            return this.getLastName;
        }

        getFullName(){
            return this.firstName+"__"+this.getLastName;
        }
    }

    class Profession extends Person{
        constructor(jobRole,firstName,lastName){
            super(firstName,lastName);
            this.jobRole=jobRole;
        }

        printAllDetails(){
            console.log(this.firstName+"__"+this.lastName+"__"+this.jobRole);
        }
    }


    var profession =new Profession("Developer","first","last");
    profession.printAllDetails();

Note : use Instanceof  to find the type of object

### Static Method 

static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods.

    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
        static createAnonymous(gender) {
            let name = gender == "male" ? "John Doe" : "Jane Doe";
            return new Person(name);
        }
    }

Note: If you attempt to call the static method from an instance of the class, you’ll get an error

### Static Property

Like a static method, a static property is shared by all instances of a class. To define static property, you use the static keyword followed by the property name like this:

    class Item {
        static count = 0;
        static getCount() {
            return Item.count;
        }
    }

    Items.getCount();//prints 0

### Private Fields

ES2022 allows you to define private fields for a class. To define a private field, you prefix the field name with the # sign.)

    class Circle {
        #radius;
        constructor(value) {
            this.#radius = value; //undefined && #radius will throw execption while accessing 
        }
        get area() {
            return Math.PI * Math.pow(this.#radius, 2);
        }
    }

### Private & Static Method

    class Person{
        #firstName;
        #lastName;
        static #counter=0;

        #validateName(name){
            if(typeof(name) !== "string" || name.length==0 ){
                throw "name not valid"
            }
        }

        constructor(firstName,lastName){
            this.#firstName=this.#validateName(firstName);
            this.#lastName=this.#validateName(lastName);
            Person.#counter++;
        }

        getCounter(){
            return Person.#counter;
        }
    }

    try{
        var person=new Person("test","test");
        console.log(person.getCounter())
    }catch(ex){
        console.log(ex);
    }

## Advanced Function

In JavaScript, all functions are objects. They are the instances of the Function type. Because functions are objects, they have properties and methods like other objects.

Note: difference between call / apply and bind => call and apply will immediately execute the function, the bind will give a new function.

### call function

Call method is a way to dynamically bind a function with object

    class Person{
        constructor(firstName,lastName,age){
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
        }
    }

    function printName(age){
        console.log(this.firstName+"__"+this.lastName+"__"+age);
    }

    console.log(Person.length);
    var p1=new Person("shan","Micheal",10);
    var p2=new Person("guru","tam",12);
    var p3=new Person("mamas","pizza",10);

    printName.call(p1,p1.age);
    printName.call(p2,p2.age);
    printName.call(p3,p3.age);

### Apply function

Apply function is called with parameter as array where call method is call as normal arguments.

    class Person{
        constructor(firstName,lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }

    function job(jobRole,jobDescription){
        console.log(this.firstName+"__"+this.lastName);
        console.log(jobRole+"__"+jobDescription);
    }

    var p1=new Person("A","B");
    var p2=new Person("C","D");

    job.apply(p1,["testRole","testDescription"]);
    job.apply(p2,["testRole","testDescription"]);

    //
    job.call(p1,"testRole","testDescription");
    job.call(p2,"testRole","testDescription");

### Bind Function

The bind() method returns a new function, when invoked, has its this sets to a specific value.

    class Person{
        constructor(firstName,lastName,age){
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
        }
    }
    function printName(age){
        console.log(this.firstName+"__"+this.lastName+"__"+age);
    }
    var p1=new Person("firstName","lastName",10);
    var p1PrintName=printName.bind(p1);
    p1PrintName(10);

### Closure

A closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

    function greeting(name){
        function getValue(age){
            console.log(name+"__"+age);
        }
        return getValue;
    }

    var greet=greeting("test");
    greet(10);

### Self Invoking function

A self invoking function can be executed by itself
    var result=(function(a,b){
        return a+b;
    })(10,15);

    console.log(result);

### Arrow function

Some of the useful arrow functions:
1. map() => converts values to array
2. filter()=>filters values

syntax:  () = > expression (ie) return expression

    var sum=((a,b)=>a+b)(10,15);
    console.log(sum);

    var array=["test","test2","test3","test4"];
    var result=array.map(value=> value.length);
    console.log(result);


    function process(fn,value1,value2){
    return fn(value1,value2);
    }


    console.log(process((a,b)=>a+b,10,15));

### Rest Parameters

Can be used to send n number of parameters

    function test(...args){
    args.forEach(x=>{
        console.log(x);
    })
    }

    test(1,2,3,3,4);

### Call back Function

Call back function are function that are passed as parameters and are invoked.

    function even(number){
        console.log(number+" is an even number");
    }

    function odd(number){
        console.log(number+" is an odd number");
    }

    function processNumber(numbers,evenFun,oddFun){
        numbers.forEach(element => {
            if(element%2==0){
                evenFun(element);
            }else{
                oddFun(element);
            }
        });
    }

    processNumber([1,2,3,4,5,6,7,8,9],even,odd);

## Promise

a promise is an object that encapsulates the result of an asynchronous operation.

A promise object has a state that can be one of the following:

    Pending
    Fulfilled with a value
    Rejected for a reason
### why promise

    //Reason on to use Promise

    function getUsers(){
        var arr=[];
        setTimeout(()=>{
            arr=[1,2,2,4];
        },1000);
        return arr;
    }

    console.log(getUsers());  //print []

    //using promise
    function getPromiseValues(){
        return new Promise((resolve,reject)=>{
            if(true){
                resolve();
            }else{
                reject();
            }
        });
    }
    var promise=getPromiseValues();
    promise.then(function(){
        console.log("Successfully")
    }).catch(function(){
        console.log("failed");
    }).finally(function(){
        console.log("finally");
})

### Promise chaining

Series of promise executions are called as Promise Chaining.

    var success=true;
    function apiCall(){
        return new Promise(function(resolve,reject){
            if(success){
                resolve(10);
            }else{
                reject(10);
            }
        });
    }

    var getPromise=apiCall();
    getPromise.then(function(value){
        return value*10;
    }).then(function(value){
        return value*10;
    }).then(function(value){
        console.log(value);
    });


    var sPromise=apiCall();
    sPromise.then(function(value){
        console.log(value);
    });

    sPromise.then(function(value){
        console.log(value);
    });

    sPromise.then(function(value){
        console.log(value);
    });

### Promise.All

When all the promise succeeds then the then function is called with all the resolved values else the catch function is called with the failure value only.

    //All pass use case
    // output 10,100,1000

    function restCall1(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                resolve(10);
            },1000);
        });
    }


    function restCall2(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                resolve(100);
            },1000);
        });
    }



    function restCall3(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 3");
                resolve(1000);
            },1000);
        });
    }

    var p1=restCall1();
    var p2=restCall2();
    var p3=restCall3();

    Promise.all([p1,p2,p3]).then(function(values){
        values.forEach((value)=>console.log(value));
    }).catch(function(err){
        console.log(err);
    });

    //one rejected use case 
    //output -1000

    function restCall1(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                resolve(10);
            },1000);
        });
    }


    function restCall2(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                resolve(100);
            },1000);
        });
    }



    function restCall3(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 3");
                reject(1000);
            },1000);
        });
    }

    var p1=restCall1();
    var p2=restCall2();
    var p3=restCall3();

    Promise.all([p1,p2,p3]).then(function(values){
        values.forEach((value)=>console.log(value));
    }).catch(function(err){
        console.log(err);
    })
### Promise Any

    // 
    // output 10,100,1000

    function restCall1(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                resolve(10);
            },1000);
        });
    }


    function restCall2(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                resolve(100);
            },1000);
        });
    }



    function restCall3(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 3");
                resolve(1000);
            },1000);
        });
    }


    var p1=restCall1();
    var p2=restCall2();
    var p3=restCall3();

    Promise.any([p1,p2,p3]).then(function(values){
        console.log(value);
    }).catch(function(err){
        console.log(err);
    });


    //one rejected use case 
    //output -1000

    function restCall1(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                reject(10);
            },1000);
        });
    }


    function restCall2(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                reject(100);
            },1000);
        });
    }



    function restCall3(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 3");
                reject(1000);
            },1000);
        });
    }


    var p1=restCall1();
    var p2=restCall2();
    var p3=restCall3();

    Promise.all([p1,p2,p3]).then(function(values){
        values.forEach((value)=>console.log(value));
    }).catch(function(err){
        console.log(err);
    })

### Promise All Settled

The promise will be triggered once all the executions happens without any fail.

    function restCall1(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                reject(10);
            },1000);
        });
    }


    function restCall2(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 2");
                reject(100);
            },1000);
        });
    }



    function restCall3(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("calling rest api 3");
                resolve(1000);
            },1000);
        });
    }


    var p1=restCall1();
    var p2=restCall2();
    var p3=restCall3();

    Promise.allSettled([p1,p2,p3]).then(function(values){
        console.log(values);
    });

### handle execption in Promise

Reject and execption will be handled by the catch.

    function restCall1(){
        return new Promise(function(resolve,reject){
            throw new Error("failed")
        });
    }

    var p1=new restCall1();
    p1.then(function(value){
        console.log(value);
    }).catch(function(err){
        console.log(err);
    });

## Exceptions

the JavaScript engine encounters an error, it issues that error and immediately terminates the execution of the entire script. Sometimes, you want to handle the error and continue the execution. To do that, you use the try...catch

### Try..catch

    function result(a,b){
        try{
        return test();
        }catch(ex){
            console.log("Exception occured",ex)
        }
    }

    var value=result();
    console.log(value);

### try..catch..finally

    function result(){
        let returnValue;
        try{
            returnValue=test();
        }
        catch(ex){
            console.log("exception occured");
            console.log(ex);
        }finally{
            returnValue = returnValue ?? "No Value";
        }
        return returnValue;
    }

    var value=result();
    console.log(value)

### Throw Execption

Note: 
* the throw new Error -> will provide or give all the stacktrace.
* the throw messsage -> will not provide the stacktrace.

    function result1(value){
        if(value==null){
            throw new Error("execption occured value is empty");
        }
        return value;
    }
    try{
        console.log(result1());
    }catch(ex){
        console.log(ex);
    }finally{
        console.log("execution completed");
    }

    //result of the above one
    // Error: execption occured value is empty
    //     at result1 (/Users/I533804/Desktop/personal/Learning/Javascript/Execption/ThrowExceptions.js:3:15)
    //     at Object.<anonymous> (/Users/I533804/Desktop/personal/Learning/Javascript/Execption/ThrowExceptions.js:8:17)
    //     at Module._compile (internal/modules/cjs/loader.js:1063:30)
    //     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    //     at Module.load (internal/modules/cjs/loader.js:928:32)
    //     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    //     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    //     at internal/main/run_main_module.js:17:47
    //execution completed

    function result2(value){
        if(value==null){
            throw  "execption occured value is empty"
        }
        return value;
    }
    try{
        console.log(result2());
    }catch(ex){
        console.log(ex);
    }finally{
        console.log("execution completed");
    }

    //result of the above one
    // execption occured value is empty
    // execution completed