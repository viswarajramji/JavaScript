//reject and execption will be handled by the catch.
function restCall1(){
    return new Promise(function(resolve,reject){
        throw new Error("failed")
    });
}

var p1=new restCall1();
p1.then(function(value){
    console.log(value);
}).catch(function(err){
    console.log(err);
});