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


var fullObject=Object.create({
    age:10
});

for(var field in fullObject){
    if(fullObject.hasOwnProperty(field))
      console.log(field+"_"+fullObject[field]);
}