function add(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
           reject(`Both a and b should be number values`);
        } else {
           resolve(`Addition of ${a} and ${b} is ${a + b}`)
        }
    });
}

add(10, 20)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(console.log('Finally Block'))


add(10, 'sachin')
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(console.log('Finally Block'))
