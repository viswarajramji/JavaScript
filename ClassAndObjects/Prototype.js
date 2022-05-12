function Person(){
    this.firstName="firstName";
    this.lastName="lastName";
}
Person.prototype.getFullName=function()
{
    return this.firstName +"__"+this.lastName;
}
var p1=new Person();
var p2=new Person();
console.log(p1.getFullName());
console.log(p2.getFullName());