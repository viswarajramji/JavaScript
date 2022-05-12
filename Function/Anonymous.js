var test=function(){
    console.log("hello world");
}
test();
// self invoking functions
(function(){
    console.log("self invoking function");
})()
//self Invoking functions with Paramets
var myObject={
    _firstName: "Shan",
    _lastName:"Micheal",
    getName: function(){
        return this._firstName;
    },

    getlastName:function(){
        return this._lastName;
    }
};

(function(){
    console.log(myObject.getName()+"_"+myObject.getlastName());
})(myObject);

//Assigning function to variables.
var a=10;
var b=10;
var myVariable=function(){
    return a+b;
}

var local=myVariable;
console.log(local());

