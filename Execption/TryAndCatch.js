function result(a,b){
    try{
       return test();
    }catch(ex){
        console.log("Exception occured",ex)
    }
}

var value=result();
console.log(value);