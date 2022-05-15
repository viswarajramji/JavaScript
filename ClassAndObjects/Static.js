class Person{
    constructor(firstName){
        this.firstName=firstName;
    }
    static staticMethod(){
        console.log("static method");
    }
}

var person=new Person("test");
Person.staticMethod();