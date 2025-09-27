let maxResult = Math.max(10, 20, 30); // value
console.log(maxResult);

let usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
console.log(usersPromise);
usersPromise.then(
    (response) => {
        console.log(response);
        response.json().then(
            finalData=>{
                console.log(finalData)
            }
        )
    },
    (error) => {
        console.log(error)
    }
)