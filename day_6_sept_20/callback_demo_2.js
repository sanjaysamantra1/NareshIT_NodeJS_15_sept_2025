const fs = require('fs');

let afterRead = (err, data) => {
    if (err) throw err;
    console.log(data.toString())
}

fs.readFile('./day_6_notes.txt',afterRead);
// readFile : HigherOrder
// afterRead : callBack