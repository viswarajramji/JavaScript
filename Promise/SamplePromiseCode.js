// //Reason on to use Promise

// function getUsers(){
//     var arr=[];
//     setTimeout(()=>{
//         arr=[1,2,2,4];
//     },1000);
//     return arr;
// }

// console.log(getUsers());  //print []




// function getValues(callback){
//     setTimeout(()=>{
//         arr=[1,2,2,4];
//         callback(arr)
//     },1000);
// }

// function printValue(arr){
//     arr.forEach(element => {
//         console.log(element);
//     });
// }
// getValues(printValue); 


//using promise
function getPromiseValues(){
    return new Promise((resolve,reject)=>{
        if(false){
            resolve();
        }else{
            reject();
        }
    });
}
var promise=getPromiseValues();
promise.then(function(){
    console.log("Successfully")
},function(){
    console.log("failed");
}).finally(function(){
    console.log("success");
})

