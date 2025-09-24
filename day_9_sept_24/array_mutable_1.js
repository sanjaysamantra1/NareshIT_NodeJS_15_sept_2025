const arr = [10, 20, 30]; // mutable
arr.push(40);
console.log(arr);
// arr = [100, 200, 300]; // not allowed

let cars = ['Tata', 'Honda', 'Maruti'];
Object.freeze(cars);
cars[0] = 'BMW';
delete cars[0];
// cars.push('Hyundai', 'Toyota'); // Cannot add property 3, object is not extensible
console.log(cars)