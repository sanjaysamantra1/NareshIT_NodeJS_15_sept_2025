let arr = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];
console.log(arr, arr.length); // length=3

let res1 = arr.flat();
console.log(res1, res1.length);  // length = 5   flatten:depth=1

let res2 = arr.flat(2); 
console.log(res2, res2.length);  // length = 7   flatten:depth=2

let res3 = arr.flat(Infinity); 
console.log(res3, res3.length);  // length = 10   flatten:depth=n
