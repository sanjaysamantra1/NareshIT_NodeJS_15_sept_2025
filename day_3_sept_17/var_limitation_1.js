function varTest() {
    if (true) {
        var myName = 'Sanjay'; // ideally its hould be block scoped
        console.log('Block: ', myName); // it is function scoped
    }
    console.log('Function: ', myName);
}
varTest();

function letTest() {
    if (true) {
        let address = 'bangalore'; // ideally its hould be block scoped
        console.log('Block: ', address); // it is function scoped
    }
    console.log('Function: ', address); // No
}
letTest();