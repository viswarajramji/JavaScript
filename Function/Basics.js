function test(a, b) {
    return a + b;
}

var result = test(10, 15);
console.log(result);


//sorting
function sortByProperty(propertyName) {
    return function (a, b) {
        var value1 = a[propertyName];
        var value2 = b[propertyName];
        if (value1 > value2) {
            return 1;
        }
        return -1;
    }
}

var arr = [{
    name: "micheal",
    age: 15
}, {
    name: "shan",
    age: 10
}
]

console.log(arr);
arr.sort(sortByProperty("age"));
console.log(arr);