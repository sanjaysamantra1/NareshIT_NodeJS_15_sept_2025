// run multiple promises in parallel and resolve when all are fulfilled

let p1 = Promise.resolve('data from Promise-1')
let p2 = new Promise((resolve,reject) => setTimeout(() => {
    resolve('data from promise-2')
}, 5000));
let p3 = Promise.resolve('error from Promise-3')

Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.log(err))