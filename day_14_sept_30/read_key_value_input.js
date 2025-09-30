let args = process.argv.slice(2);

console.log(args);
let obj = {};
for(str of args){
    let k = str.split('=')[0];
    let v = str.split('=')[1];
    obj[k] = v;
}
console.log(obj);
