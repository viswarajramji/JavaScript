// Object Example
var object={
    firstName: "Suru",
    lastName: "Shan",
    getFullName:function(){
        return this.firstName+"__"+this.lastName;
    }
}
//Accessing Objects using both method and key values
console.log(object.getFullName);
console.log(object.getFullName());
console.log(object["getFullName"]());
console.log(object["firstName"]);
