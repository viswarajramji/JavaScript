var success=false;
var index=0;
function apiCall(){
	return new Promise(function(resolve,reject){
		if(index!=2){
			resolve(10);
            index++;
            console.log("passed")
		}else{
            console.log("false")
			reject(30);
		}
	});
}


var p1=new apiCall();
var p2=new apiCall();
var p3=new apiCall();

Promise.all([p1,p2,p3]).then(results=>{
    results.forEach(result=>console.log(result));
}).catch(results=>{
   console.log(results);
});
