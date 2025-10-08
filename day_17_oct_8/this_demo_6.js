const fs = require('fs');

fs.readFile('../data/users.json', (data, err) => {
    console.log(this); // {}
})

fs.readFile('../data/users.json', function (data, err) {
    console.log(this);  // this = global
}) 