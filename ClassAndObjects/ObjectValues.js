var object={
    firstName:"shan",
    lastName:"Micheal",
    job:{
        role:"developer",
        company:"US"
    }
}



function printValue(val){
    for(var field of val){
        if(typeof(field)==="object"){
             printValue(Object.values(field));
         }else{
            console.log(field);
         }
     
    }
}

var values = Object.values(object);
printValue(values);