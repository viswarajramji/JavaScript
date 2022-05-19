//Syntax 
// var map=new Map([Iterable(optional)]);
var map=new Map();

//property - Create operatosn
//syntax : map.set(key,value)
map.set("name","Shan");
map.set("age","10");


//Read Operations
//entries() – returns a new Iterator object that contains an array of [key, value] for each element in the map object.The order of objects in the map is the same as the insertion order.
//Get()- reads data from map
console.log("***key data***");
console.log(map.get("name"));
console.log(map.get("test")); //returns undefined

//keys()
console.log("***keys***");
for(const val of map.keys()){
    console.log(val);
}

//values()
console.log("*** values ***");
for(const val of map.values()){
    console.log(val);
}

//entries
for(var value of map.entries()){
    console.log(value[0]+"__"+value[1]);
}

//check if the key exists.
console.log("Has value")
console.log(map.has("name"));

//Delete operation
//delete(key)
console.log(map.delete("name"));
console.log(map.get("name"));

//clear - clears all the data
map.clear();
console.log(map.get("test"));

