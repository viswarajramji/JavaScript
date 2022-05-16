class Person{

    static counter=0;
    
    constructor(userName){
        this.userName=userName;
        Person.counter++;
    }

    static getCounter(){
        return Person.counter;
    }
}

var p1=new Person("Shan");
var p2=new Person("Micheal");
console.log(Person.getCounter());

