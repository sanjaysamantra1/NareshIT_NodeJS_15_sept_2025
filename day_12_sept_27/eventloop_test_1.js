let f1 = () => console.log('I am f1...')
let f2 = () => console.log('I am f2...')
let f3 = () => console.log('I am f3...')
let f4 = () => console.log('I am f4...')

f1();
setTimeout(f2)
Promise.resolve().then(f3);
f4();