// using then()
// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     response.json().then(finalData => console.log(finalData))
// })


// using async await
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let finalResponse = await response.json();
console.log(finalResponse);

