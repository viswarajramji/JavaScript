//All pass use case
// output 10,100,1000

function restCall1(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 2");
			resolve(10);
		},1000);
	});
}


function restCall2(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 2");
			resolve(100);
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

Promise.all([p1,p2,p3]).then(function(values){
	values.forEach((value)=>console.log(value));
}).catch(function(err){
	console.log(err);
});


//one rejected use case 
//output -1000

function restCall1(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 2");
			resolve(10);
		},1000);
	});
}


function restCall2(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 2");
			resolve(100);
		},1000);
	});
}



function restCall3(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("calling rest api 3");
			reject(1000);
		},1000);
	});
}


var p1=restCall1();
var p2=restCall2();
var p3=restCall3();

Promise.all([p1,p2,p3]).then(function(values){
	values.forEach((value)=>console.log(value));
}).catch(function(err){
	console.log(err);
})

