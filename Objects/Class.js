class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName(){
        return this.firstName+"__"+this.lastName;
    }
}

Person.prototype.getLastName=function(){
    return this.lastName;
}



let p1=new Person("test","shan");
console.log(p1.getFullName());
console.log(p1.toString());

let p2=new Person("shan","test");
console.log(p1.getFullName());
console.log(p2.getFullName());


