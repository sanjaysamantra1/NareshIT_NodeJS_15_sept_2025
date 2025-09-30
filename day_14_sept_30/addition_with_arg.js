let [a,b] = process.argv.slice(2);

if( a && b)
    console.log(`Addition of ${a} and ${b} is ${+a + +b}`);
else
    console.log('Please pass 2 params')