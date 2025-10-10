const fs = require('fs');

const dirName = 'temp';
const fileName = `${dirName}/demo.txt`;
const newFileName = `${dirName}/demo_2.txt`;
// create a directory if its not present
if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
    console.log('directory created')
}

// create and write content to a file
fs.writeFileSync(fileName, 'Hellooo NodeJS!!!')
console.log('Write Operation is done...')

// Write more content to the file
fs.appendFileSync(fileName, '\nHiiiiii NodeJS!!!')
console.log('Added more content...')

// rename the file
fs.renameSync(fileName,newFileName);
console.log('file is renamed');

// check if file exists
console.log(fs.existsSync(fileName)) // false
console.log(fs.existsSync(newFileName)) // true

// statistics of a file
const statObj = fs.statSync(newFileName)
console.log(statObj.size, statObj.ctime, statObj.mtime)

// read all the files in a directory
const files = fs.readdirSync('../day_19_oct_10');
console.log(files)

// delete the file
fs.unlinkSync(newFileName);
console.log('file deleted');

// delete the directory
fs.rmdirSync(dirName);
console.log('directory deleted')

