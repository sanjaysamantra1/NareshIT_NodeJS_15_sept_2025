const fs = require('fs');

const myCallBack = (event, fileName) => {
    console.log(`${fileName} ${event}`);
}

fs.watch('.', myCallBack );