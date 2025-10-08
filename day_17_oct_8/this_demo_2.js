console.log('Module Level: ', this); // this = {}
global.a = 10;

function f1() {
    console.log('I am f1...');
    console.log(this.a); // this = global
    console.log(globalThis.a); // globalThis = global
}
let f2 = () => {
    console.log('I am f2...');
    console.log(this.a); // this = {} = modeule.exports
    console.log(globalThis.a); // globalThis = global
}
f1();
f2();