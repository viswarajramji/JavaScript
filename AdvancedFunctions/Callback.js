function even(number){
    console.log(number+" is an even number");
}

function odd(number){
    console.log(number+" is an odd number");
}

function processNumber(numbers,evenFun,oddFun){
    numbers.forEach(element => {
        if(element%2==0){
            evenFun(element);
        }else{
            oddFun(element);
        }
    });
}

processNumber([1,2,3,4,5,6,7,8,9],even,odd);