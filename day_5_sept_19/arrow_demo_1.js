// Regular
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));


// Arrow
const sum = (a, b) => a + b;
console.log(sum(20, 30));


// arrow function as callbacks
let arr = [10, 20, 30, 40, 50];
// let arr2 = arr.map(ele=>ele+5);
let arr2 = arr.map(function(ele){
    return ele+5;
})
console.log(arr2)
