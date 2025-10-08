// 'use strict'

let a = 10;
let b = 20; // Global in this file, but they are not part of global object
var c = 30;
d = 40; // d is declared inside global

function f1() {
    console.log('This is f1...');
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
f1()

/* console.log('a is available in global object? ', global.a)
console.log('b is available in global object? ', global.b)
console.log('c is available in global object? ', global.c)
console.log('d is available in global object? ', global.d) */

console.log('a is available in global object? ', globalThis.a)
console.log('b is available in global object? ', globalThis.b)
console.log('c is available in global object? ', globalThis.c)
console.log('d is available in global object? ', globalThis.d)
