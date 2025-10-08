'use strict'

function f1() {
    console.log('I am f1...');
    console.log(this); // this = undefined
}
let f2 = () => {
    console.log('I am f2...');
    console.log(this); // this = {}
}
f1();
f2();