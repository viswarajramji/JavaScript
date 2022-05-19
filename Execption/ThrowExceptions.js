function result1(value){
    if(value==null){
        throw new Error("execption occured value is empty");
    }
    return value;
}
try{
    console.log(result1());
}catch(ex){
    console.log(ex);
}finally{
    console.log("execution completed");
}

//result of the above one

// Error: execption occured value is empty
//     at result1 (/Users/I533804/Desktop/personal/Learning/Javascript/Execption/ThrowExceptions.js:3:15)
//     at Object.<anonymous> (/Users/I533804/Desktop/personal/Learning/Javascript/Execption/ThrowExceptions.js:8:17)
//     at Module._compile (internal/modules/cjs/loader.js:1063:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
//     at Module.load (internal/modules/cjs/loader.js:928:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     at internal/main/run_main_module.js:17:47
//execution completed

function result2(value){
    if(value==null){
        throw  "execption occured value is empty"
    }
    return value;
}
try{
    console.log(result2());
}catch(ex){
    console.log(ex);
}finally{
    console.log("execution completed");
}

//result of the above one
// execption occured value is empty
// execution completed