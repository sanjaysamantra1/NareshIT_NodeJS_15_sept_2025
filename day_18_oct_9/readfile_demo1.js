const fs = require('fs');

/* fs.readFile('../data/employees.json', (err, data) => { // asynchronous
    console.log(data); // Buffer (Byte)
    console.log(data.toString()); // 
});
fs.readFile('../data/employees.json', 'utf-8', (err, data) => { // asynchronous
    console.log(data);
}); */
console.log('Hellooooooo');


const fileContent = fs.readFileSync('../data/employees.json', 'utf-8'); // will take some time
console.log(fileContent);

console.log('Good Morning');
console.log('Byeeeee....');
// Read file using CJS , callBack 