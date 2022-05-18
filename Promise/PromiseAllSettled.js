function restCall1(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 2");
			reject(10);
		},1000);
	});
}


function restCall2(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 2");
			reject(100);
		},1000);
	});
}



function restCall3(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 3");
			resolve(1000);
		},1000);
	});
}


var p1=restCall1();
var p2=restCall2();
var p3=restCall3();

Promise.allSettled([p1,p2,p3]).then(function(values){
	 console.log(values);
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