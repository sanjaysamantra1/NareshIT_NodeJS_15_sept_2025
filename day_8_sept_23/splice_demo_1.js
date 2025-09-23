let arr = [10, 20, 30, 40];
// splice(index , # elements to delete , elements to insert)

arr.splice(1, 2, 25, 35); // both delete & insert
console.log(arr);

arr.splice(1, 0, 20, 30); // only insert
console.log(arr);  // [ 10, 20, 30, 25, 35, 40 ]

arr.splice(3, 2); // only delete
console.log(arr);  // [ 10, 20, 30, 40 ]