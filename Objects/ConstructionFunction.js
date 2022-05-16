// without constructor function concept

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

//  The above code is repitative , so this can be avoided by constructor functions by the below code

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
console.log(typeof(myTest.prototype.value()));
