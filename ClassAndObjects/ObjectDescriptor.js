// Descriptor Notes
// Object Descriptor to used to manage the attributes of the object
// 3 methods to remember

// 1. Object.defineProperty  - Object.defineProperty(object,property,descriptor property})
// 2. Object.defineProperties  - Object.defineProperties(test,object);
// 3. Object.getOwnPropertyDescriptor - Object.getOwnPropertyDescriptor(test,"Name of the property");

// descriptor property

// configurable - used for defining configurable (ie) cannot be deleted using del property nor this property can be modified
// enumerable - will be ignore during enumeration or iterator if set to true
// Writable - will not be allowed to be modified is set to yes
// value - value of property


// 1. Object.defineProperty 

// syntax:

// Object.defineProperty(object,property,descriptor property})

//Example without descriptor
var object={};
object.firstName="test";
console.log(object.firstName);

delete object.firstName;
console.log(object.firstName);

// using descriptor - configurable
var objectD={};


Object.defineProperty(objectD,"age",{
    configurable:false, // change to true to delete
    enumerable:false, // age will be ignored in the iteration
    writable:false, //changing the value of 10 will not have any impact.
    value:10 
})

delete objectD.age;

for(let val in objectD){
    console.log(objectD[val])
}

objectD.age=100;
console.log(objectD.age);


//2. Define properties

var test={};
Object.defineProperties(test,{
    firstName:{
        value:"shan",
        configurable:true,
        enumerable:false,
        writable:true
    },
    lastName:{
        value:"nick",
        configurable:true,
        enumerable:false,
        writable:true
    }
});
console.log(test.firstName);
console.log(test.lastName);
for(var attr in test){
    console.log(attr);
}

//3. getting property descriptor

let firstNameDescriptor=Object.getOwnPropertyDescriptor(test,"firstName");
console.log(firstNameDescriptor);

