var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a} , b:${b}, c:${c}`);
a = 15;
b = 25;
// c = 35; // TypeError: Assignment to constant variable
console.log(`a:${a} , b:${b}, c:${c}`);


const user = { name: 'sanjay', add: 'bangalore' };
user.age = 50;   // add a new property
delete user.add; // delete a property
console.log(user);
// user = {name:'dillip',age:30}; // TypeError: Assignment to constant variable. 


const arr = [10, 20];
arr.push(30, 40); // Yes
console.log(arr);
arr = [100, 200]; // No