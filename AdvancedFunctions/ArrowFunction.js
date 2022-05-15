// () = > expression (ie) return expression
var sum=((a,b)=>a+b)(10,15);
console.log(sum);

var array=["test","test2","test3","test4"];
var result=array.map(value=> value.length);
console.log(result);


function process(fn,value1,value2){
   return fn(value1,value2);
}


console.log(process((a,b)=>a+b,10,15));