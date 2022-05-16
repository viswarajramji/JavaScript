function api(){
    return new Promise(function(resolve,reject){
        if(true){
            reject(20);
            console.log("test");
            throw new Error("Invalid Id argument");
        }else{
            resolve(20);
        }
    });
}

try{
var p1=api();
p1.then(function(event){
    console.log(event);
}).catch(function(error){
    console.log(error)
});
}catch(ex){
    console.log(ex)
}

