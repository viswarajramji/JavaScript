var object={
    name:"shan",
    age:10
};

console.log(object["name"]);
console.log(object["age"]);
console.log(object.name);
console.log(object.age);

//adding the property
object.school="test";
//deleting the property
delete object.age;
console.log(object.age);
//Check if the property exist or not
console.log("age" in object);
console.log("name" in object);



