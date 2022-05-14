var sourceObj1={
    firstName:"firstName",
    lastName:"test"
}

var sourceObj2={
    firstName:"firstName1",
    lastName:"test1"
}

var value=Object.assign({},sourceObj1,sourceObj2);
console.log(value);