function api(){
    return new Promise(function(resolve,reject){
        if(false){
            resolve(10);
        }else{
            reject(20);
        }
    });
}

var p1=api();
var p2=api();
var p3=api();

Promise.allSettled([p1,p2,p3]).then(function(result){
    console.log(result);
});



// I533804@C02FQ0S8MD6T Promise % node PromiseAllSettled.js
// [
//   { status: 'fulfilled', value: 10 },
//   { status: 'fulfilled', value: 10 },
//   { status: 'fulfilled', value: 10 }
// ]
// I533804@C02FQ0S8MD6T Promise % node PromiseAllSettled.js
// [
//   { status: 'rejected', reason: 20 },
//   { status: 'rejected', reason: 20 },
//   { status: 'rejected', reason: 20 }
// ]