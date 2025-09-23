let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota', 'Honda'];

console.log(cars[2]); // Maruti
console.log(cars.at(2)); // Maruti

console.log(cars[-2]); // undefined
console.log(cars.at(-2)); // Hyundai

console.log(cars.includes('Tata')); // true
console.log(cars.includes('BMW')); // false

console.log(cars.indexOf('Honda')); // 1
console.log(cars.lastIndexOf('Honda')); // 5