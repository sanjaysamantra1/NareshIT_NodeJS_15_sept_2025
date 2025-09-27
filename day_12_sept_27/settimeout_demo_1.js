let f1 = () => console.log('I am F1...')
setTimeout(f1, 2000);

for(let i=1;i<=500000;i++){
    let j = i*i;
    console.log(`i is: ${i}`)
}