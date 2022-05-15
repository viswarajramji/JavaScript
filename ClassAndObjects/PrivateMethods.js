class Person{
    #firstName;
    #lastName;
    static #counter=0;

    #validateName(name){
        if(typeof(name) !== "string" || name.length==0 ){
            throw "name not valid"
        }
    }

    constructor(firstName,lastName){
        this.#firstName=this.#validateName(firstName);
        this.#lastName=this.#validateName(lastName);
        Person.#counter++;
    }

    getCounter(){
        return Person.#counter;
    }
}

try{
    var person=new Person("test","test");
    console.log(person.getCounter())
}catch(ex){
    console.log(ex);
}

