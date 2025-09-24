let arr1 = [10, 20];
let arr2 = arr1;  // Reference copy : a new array is not being created
// There is only 1 array [10,20] , both arr1 & arr2 are referring to the same array
arr1.push(30);
arr2.push(40);
console.log('arr1 ', arr1); // [10,20,30,40]
console.log('arr2 ', arr2); // [10,20,30,40]

let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // spread : a new array is being created, elements are copied
// this is not a refernce copy, value copy
arr3.push(40);
arr3[2].push(32, 33);
console.log('arr3 ', arr3); // [10,20,[30, 31,32, 33],40]
console.log('arr4 ', arr4); // [10,20,[30, 31,32, 33]]
// Shallow Copy : only top level elements are copied by value, nested elements are copied by reference


let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5); // structuredClone : DeepCopy
arr5.push(40);
arr5[2].push(32, 33);
console.log('arr5 ', arr5);
console.log('arr6 ', arr6);