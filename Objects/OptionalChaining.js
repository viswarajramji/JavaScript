//?. operator chaning 
function getUser(id){
    if(id<=0){
        return null;
    }
    return {
        firstName:"Shan",
        lastName:"Micheal",
        getFullName:function(){
            return this.firstName+"_"+this.lastName;
        }
    };
}

var user=getUser(1);
console.log(user?.firstName); //using user.firstName will give execption
console.log(user.getFullName()); //using user.firstName will give execption
console.log(user.getFirstName?.()); //using user.getFirstName() will give execption

//use ?. with coalesce operator for better usage
console.log(user.getFirstName?.() ?? user.getFullName());


