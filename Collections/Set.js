//set operation , used to store unique values
//syntax:
// var set=new Set([iterator]);

//create set
var set=new Set();
set.add(1);
set.add(2);
set.add(1);
console.log(set.size);
console.log(set)


//reading from set
// forEach
set.forEach(console.log)

//entries

for(const value of set){
    console.log(value);
}

//check if the value exists.

console.log(set.has(2));//true
console.log(set.has(3));//false


//delete opration
set.delete(2);
console.log(set);
set.clear();
console.log(set);