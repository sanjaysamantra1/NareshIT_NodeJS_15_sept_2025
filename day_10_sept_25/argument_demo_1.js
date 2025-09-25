function add2Nums(a, b) {
    console.log(a + b)
}
add2Nums(10, 20); // 30

function add3Nums(a, b, c) {
    console.log(a + b + c)
}
add3Nums(10, 20, 30); // 60

// arguments : variable amount of arguments
function add() {
    let sum = 0;
    console.log(Array.isArray(arguments) , arguments);
    // arguments.filter(ele=>ele%2==0)
    for (ele of arguments) { // arguments is not an array
        sum = sum + ele;
    }
    console.log(sum);
}
add(10, 20);
add(10, 20, 30, 40);
add(10, 20, 30, 40, 50);

