const fs = require('fs/promises');

const filePromise = fs.readFile('../data/employees.json', 'utf-8')
console.log(filePromise)
filePromise.then(data=>console.log(data))

let resp = fs.writeFile('./demo1.txt','Helloooooooooo',{
    encoding:'utf8',
    mode:'666',
    flag:'w',

})
console.log(resp)

