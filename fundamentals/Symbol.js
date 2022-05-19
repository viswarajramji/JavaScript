//Symbol is a primitive datatype  and u cannot create values using new
//Symbol will always create primitive datatype.
let s1= Symbol(10);
let s2= Symbol(10);
console.log(typeof(s1));
console.log(typeof(s2));

console.log(s1==s2); //false as Symbol will provide only unique values

//creating reusable symbol
let s3=Symbol.for(10);
let s4=Symbol.for(10);
console.log(s3==s4);


//symbols ignored in iterator and in jsonify the value and the key is not considered for conversion
var myObj={
    name:"shan",
    micheal:"Guru"
};
myObj[Symbol()] ="test";
for(var attr in myObj){
    console.log(myObj[attr]);
}

