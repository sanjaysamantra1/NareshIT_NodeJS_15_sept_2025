function test(a, b, ...c) {
    console.log(a, b, c); // 10 20 [30,40,50]
}
test(10, 20, 30, 40, 50);
// SyntaxError: Rest parameter must be last formal parameter