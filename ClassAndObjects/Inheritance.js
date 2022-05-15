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