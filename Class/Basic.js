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

//must use Person 
