var a = 10;
console.log(`a is: ${a}`); // 10

var a = 100;
console.log(`a is: ${a}`); // 100

// let a = 1000; // Identifier 'a' has already been declared

let myName = 'sanjay';
console.log('Gloabal: ', myName); // sanjay
function test() {
    let myName = 'Dillip';
    console.log('Function: ', myName); // Dillip
    if (true) {
        let myName = 'Subashish';
        console.log('if Block: ', myName); // Subashish
    }
}
test()