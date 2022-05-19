function result(){
    let returnValue;
    try{
        returnValue=test();
    }
    catch(ex){
        console.log("exception occured");
        console.log(ex);
    }finally{
        returnValue = returnValue ?? "No Value";
    }
    return returnValue;
}

var value=result();
console.log(value)