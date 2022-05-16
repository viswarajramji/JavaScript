var arr=["value"];

//adding values
arr.push("shan");
arr.unshift("micheal");

console.log(arr);

//removing values
console.log(arr.pop());
console.log(arr.shift());
console.log(arr);

//finding the index of the array value
var index=arr.indexOf("value");
console.log(index);

//check if the value is an array 
console.log(Array.isArray(arr));