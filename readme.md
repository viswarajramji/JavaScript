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
4. Control flow: if , if..else , switch case, while loop, for loop , do..while loop, forEach
## Functions

JS uses pass by value

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


### Default Parameters

Default Parameters are used to assign value to undefined parameters

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

### Prototype 

used to modify the attributes of a class.

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

Merges values and creates a new values

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

# Private & Static Method

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