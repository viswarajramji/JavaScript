class MyClass{
    #name
    constructor(name){
        this.#name=name;
    }
}

var myClass=new MyClass("test");
console.log(myClass.name); //undefined && #name will throw execption