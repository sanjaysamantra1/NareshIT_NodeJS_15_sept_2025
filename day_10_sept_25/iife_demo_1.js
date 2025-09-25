function test() {
    if (true) {
        (function () {
            var a = 10;
            console.log(`inside block ${a}`);
        })();
    }
    console.log(`outside block ${a}`);
}
test();

{ // block
    console.log('hello')
}