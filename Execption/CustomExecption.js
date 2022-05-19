class CustomExecption extends Error{
    constructor(value){
        super(value);
        this.value=value;
    }
}

function process(){
    throw new CustomExecption("test");
}
try{
    process();
}catch(err){
    console.log(err);
}finally{
    
}