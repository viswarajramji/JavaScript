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




