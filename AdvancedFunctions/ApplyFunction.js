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
