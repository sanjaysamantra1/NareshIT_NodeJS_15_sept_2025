function initializeCount() { // initializeCount = HigherOrder : it returns another function
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
let increment = initializeCount();
increment();
increment();
