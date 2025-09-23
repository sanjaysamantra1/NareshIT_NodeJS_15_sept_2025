let arr = [10, 20, 30, 40];
arr.push(50);
console.log('after push: ', arr); // [10, 20, 30, 40, 50]
arr.pop();
console.log('after pop: ', arr); // [10, 20, 30, 40]

arr.unshift(50);
console.log('after unshift: ', arr); // [50, 10, 20, 30, 40]
arr.shift();
console.log('after shift: ', arr); // [10, 20, 30, 40]