//Object In js

//creating Objects
var myObj={
    firstName:"shan",
    lastName:"Micheal"
};

//accessing object attributes
console.log(myObj.firstName);
console.log(myObj.lastName);
console.log(myObj["firstName"]);
console.log(myObj["lastName"]);

//deleting Object attributes
delete myObj.lastName;
console.log(myObj["lastName"]);

//checking if the attribute exists.
console.log("firstName" in myObj);
console.log("lastName" in myObj);