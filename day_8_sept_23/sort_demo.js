let arr1 = [50, 10, 40, 20, 30];
arr1.sort();
console.log(arr1);

let arr2 = [7, 101, 8, 105, 102, 107, 9, 4, 91, 81, 92, 82];
arr2.sort();
console.log(arr2); // string sort

arr2.sort((a,b)=>a-b); // asc (numeric sort)
console.log(arr2)
