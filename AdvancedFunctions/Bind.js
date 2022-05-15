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
