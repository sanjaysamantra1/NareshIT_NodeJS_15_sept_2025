// Function Declaration
add(3, 4);
function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`);
}
add(10, 20);

// Function Expression
let mul = function (a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
}
mul(10, 20);


// Arrow Function
let div = (a, b) => {
    console.log(`Division of ${a} and ${b} is ${a / b}`);
}
div(10, 20);