var success=true;
function apiCall(){
	return new Promise(function(resolve,reject){
		if(success){
			resolve(10);
		}else{
			reject(10);
		}
	});
}

var getPromise=apiCall();
getPromise.then(function(value){
	return value*10;
}).then(function(value){
	return value*10;
}).then(function(value){
	console.log(value);
});


var sPromise=apiCall();
sPromise.then(function(value){
	console.log(value);
});

sPromise.then(function(value){
	console.log(value);
});

sPromise.then(function(value){
	console.log(value);
});

