const fs = require('fs');

fs.readFile('./file_1.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());

    fs.readFile('./file_2.txt', (err, data) => {
        if (err) throw err;
        console.log(data.toString());

        fs.writeFile('./file_3.txt', file1Content, file2Content, (err, data) => {
            console.log('written')
        })
    });
});

