var object={
    firstName:"shan",
    lastName:"Micheal"
};

//print object attributes
for(var field in object){
    console.log(field);
}
//print object values
for(var field in object){
    console.log(object[field])
}
