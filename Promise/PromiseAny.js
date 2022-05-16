function api(){
    return new Promise(function(resolve,reject){
        if(success){
            resolve(10);
        }else{
            reject(20);
        }
    });
}

var p1=api();
var p2=api();
var p3=api();

Promise.any([p1,p2,p3]).then(function(result){
    console.log(result);
});
