console.log(Math.max(10, 20, 30)); // 30

let arr = [10, 20, 30, 40, 50];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 50
console.log(Math.max.apply({}, arr)); // 50


let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
let arr3 = [...arr1, ...arr2];
console.log(arr3)
